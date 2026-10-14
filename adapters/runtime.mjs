// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Lyre Studio
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, rm, lstat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const MAX_BYTES = 4 * 1024 * 1024;
const MAX_OUTPUT = 32 * 1024 * 1024;
export const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const assert = (condition, message = 'Invalid reviewed adapter') => { if (!condition) throw new Error(message); };
const keys = (value, expected) => assert(value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).sort().join() === expected.sort().join());
const size = value => assert(Number.isSafeInteger(value) && value >= 0 && value <= MAX_BYTES);
const digest = value => assert(typeof value === 'string' && /^[a-f0-9]{64}$/.test(value));
const array = (value, max = 512) => assert(Array.isArray(value) && value.length <= max);
const decoded = value => { assert(typeof value === 'string' && value.length <= 6 * 1024 * 1024 && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value)); return Buffer.from(value, 'base64'); };
export function safePath(value, source = false) {
  assert(typeof value === 'string' && value.length > 0 && value.length <= 1024 && !/[\\:<>"?*|#%\x00-\x1f\x7f]/.test(value));
  const parts = value.split('/');
  for (const part of parts) assert(part && part !== '.' && part !== '..' && !/[. ]$/.test(part) && !/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(part));
  assert(!parts.some(part => /^(?:\.git|\.lyre|node_modules|\.ssh|\.aws|\.gnupg)$/i.test(part) || (!source && ['.expo','.next','.medusa','dist','build'].includes(part)) || (/^\.env(?:\.|$)/i.test(part) && !/\.(example|template|sample)$/i.test(part)) || /\.(?:p8|p12|pfx|pem|key|keystore|jks)$/i.test(part)));
  assert(!['lyre.json','paseo.json'].includes(value.toLowerCase()));
  return value;
}

export function parseAdapter(bytes) {
  assert(bytes.length <= MAX_BYTES);
  const adapter = JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
  keys(adapter, ['schemaVersion','id','source','patches','overlays']);
  assert(adapter.schemaVersion === 1 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(adapter.id));
  keys(adapter.source, ['repository','commit','files']);
  assert(/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(adapter.source.repository) && /^[a-f0-9]{40}$/.test(adapter.source.commit));
  array(adapter.source.files); array(adapter.patches); array(adapter.overlays);
  assert(adapter.source.files.length > 0);
  const names = new Set();
  let total = 0;
  for (const file of adapter.source.files) {
    keys(file, ['path','sourcePath','sha256','bytes']); safePath(file.path); safePath(file.sourcePath,true); digest(file.sha256); size(file.bytes);
    assert(!names.has(file.path.normalize('NFC').toLowerCase())); names.add(file.path.normalize('NFC').toLowerCase()); total += file.bytes;
  }
  const patches = new Set();
  for (const patch of adapter.patches) {
    keys(patch, ['path','beforeSha256','afterSha256','edits']); safePath(patch.path); digest(patch.beforeSha256); digest(patch.afterSha256); array(patch.edits,4096);
    const key = patch.path.normalize('NFC').toLowerCase();
    assert(adapter.source.files.some(file=>file.path===patch.path) && names.has(key) && !patches.has(key) && !/(^|\/)(license|copying|notice)(\.|$)/i.test(key)); patches.add(key);
    for (const edit of patch.edits) { keys(edit,['offset','delete','insert']); size(edit.offset); size(edit.delete); decoded(edit.insert); }
  }
  for (const file of adapter.overlays) {
    keys(file,['path','base64','sha256','bytes']); safePath(file.path); digest(file.sha256); size(file.bytes);
    assert(!names.has(file.path.normalize('NFC').toLowerCase())); names.add(file.path.normalize('NFC').toLowerCase()); total += file.bytes;
    const bytes = decoded(file.base64); assert(bytes.length === file.bytes && sha256(bytes) === file.sha256);
  }
  assert(total <= MAX_OUTPUT);
  return adapter;
}

export function patchSource(bytes, patch) {
  assert(sha256(bytes) === patch.beforeSha256, 'Upstream patch base integrity mismatch');
  const parts = [];
  let offset = 0, size = bytes.length;
  for (const edit of patch.edits) {
    assert(edit.offset >= offset && edit.offset + edit.delete <= bytes.length, 'Invalid patch range');
    const insert = decoded(edit.insert); size += insert.length - edit.delete;
    assert(size <= MAX_BYTES, 'Patch output too large');
    parts.push(bytes.subarray(offset,edit.offset),insert); offset = edit.offset + edit.delete;
  }
  parts.push(bytes.subarray(offset));
  const result = Buffer.concat(parts);
  assert(sha256(result) === patch.afterSha256,'Adapted source integrity mismatch');
  return result;
}

async function download(url, expected, length, fetcher, signal) {
  const response = await fetcher(url,{redirect:'error',credentials:'omit',signal:AbortSignal.any([signal,AbortSignal.timeout(30000)])});
  if (response.status !== 200 || response.redirected || !response.body) { await response.body?.cancel(); throw new Error('Pinned upstream download unavailable'); }
  const parts = []; let count = 0;
  for await (const part of response.body) { count += part.length; if (count > length) { await response.body.cancel().catch(()=>{}); throw new Error('Pinned upstream size exceeded'); } parts.push(Buffer.from(part)); }
  const bytes = Buffer.concat(parts);
  assert(count === length && sha256(bytes) === expected,'Pinned upstream integrity mismatch');
  return bytes;
}

export async function materialize(adapterBytes, destination, {fetcher = fetch, signal = new AbortController().signal} = {}) {
  const adapter = parseAdapter(adapterBytes);
  const root = path.resolve(destination);
  await mkdir(root); // Exclusive: preserve existing user directories.
  const identity = await lstat(root);
  try {
    const outputs = new Map();
    for (const file of adapter.source.files) {
      signal.throwIfAborted();
      const url = `https://raw.githubusercontent.com/${adapter.source.repository}/${adapter.source.commit}/${file.sourcePath}`;
      outputs.set(file.path,await download(url,file.sha256,file.bytes,fetcher,signal));
    }
    for (const patch of adapter.patches) outputs.set(patch.path,patchSource(outputs.get(patch.path),patch));
    for (const file of adapter.overlays) outputs.set(file.path,decoded(file.base64));
    assert([...outputs.values()].reduce((total,bytes)=>total+bytes.length,0) <= MAX_OUTPUT,'Adapted output too large');
    for (const [file,bytes] of outputs) {
      signal.throwIfAborted();
      await mkdir(path.dirname(path.join(root,file)),{recursive:true});
      await writeFile(path.join(root,file),bytes,{flag:'wx',mode:0o644});
    }
    await writeFile(path.join(root,'lyre.json'),JSON.stringify({scripts:{preview:{type:'service',command:'node server.mjs',port:4173}}},null,2)+'\n',{flag:'wx'});
    return {id:adapter.id,repository:adapter.source.repository,commit:adapter.source.commit,adapterSha256:sha256(adapterBytes),files:outputs.size+1};
  } catch (error) {
    const stat = await lstat(root).catch(()=>null);
    if (stat && !stat.isSymbolicLink() && stat.ino === identity.ino && stat.dev === identity.dev) await rm(root,{recursive:true,force:true});
    throw error;
  }
}

export async function adapterPath(id) {
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id),'Invalid template id');
  const base = path.dirname(fileURLToPath(import.meta.url));
  const matches = [];
  for (const group of ['templates','community']) {
    const file = path.join(base,group,id,'adapter.json');
    if (await lstat(file).then(stat=>stat.isFile(),()=>false)) matches.push(file);
  }
  assert(matches.length === 1,'Template missing or ambiguous'); return matches[0];
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [command,id,destination] = process.argv.slice(2);
  assert(['prepare','bundle'].includes(command) && destination,'Usage: node adapters/runtime.mjs prepare|bundle <id> <new-output-path>');
  const bytes = await readFile(await adapterPath(id)); parseAdapter(bytes);
  if (command === 'bundle') { await writeFile(destination,bytes,{flag:'wx'}); console.log(sha256(bytes)); }
  else console.log(JSON.stringify(await materialize(bytes,destination),null,2));
}
