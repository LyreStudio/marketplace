// Validate reviewed publication records; never install or execute project code.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const bytes = name => readFile(new URL(name, import.meta.url));
const read = async name => JSON.parse(await bytes(name));
const sha256 = data => createHash('sha256').update(data).digest('hex');
const [v1, v2, v3, records] = await Promise.all([
  read('catalog-v1.json'), read('catalog-v2.json'), read('catalog-v3.json'), read('templates.json'),
]);
for (const legacy of [v1, v2]) {
  assert.deepEqual(legacy.offerings.map(row => row.id), ['stockroom', 'project-desk', 'daybook']);
  assert.equal(legacy.revision, v3.revision);
}
assert.equal(records.schemaVersion, 2);
assert.equal(records.revision, v3.revision);
assert.match(records.adapterCommit, /^[a-f0-9]{40}$/);
assert.equal(v3.offerings.length, records.templates.length + 3);
assert.ok(v3.offerings.length <= 50);
assert.ok((await bytes('catalog-v3.json')).length <= 128 * 1024);

async function fetchBytes(url, maximum, release = false) {
  let current = url;
  for (let attempt = 0; attempt < 4; attempt++) {
    const response = await fetch(current, {
      redirect: 'manual', credentials: 'omit', signal: AbortSignal.timeout(30000),
    });
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      assert.ok(release, 'Unexpected public-content redirect');
      const next = new URL(response.headers.get('location'), current);
      assert.equal(next.protocol, 'https:');
      assert.ok(['github.com', 'release-assets.githubusercontent.com', 'objects.githubusercontent.com'].includes(next.hostname));
      assert.equal(next.username + next.password, '');
      await response.body?.cancel();
      current = next.href;
      continue;
    }
    assert.equal(response.status, 200, url);
    assert.ok(response.body);
    const parts = [];
    let length = 0;
    for await (const part of response.body) {
      length += part.length;
      assert.ok(length <= maximum, 'Published content exceeded recorded size');
      parts.push(Buffer.from(part));
    }
    return Buffer.concat(parts);
  }
  throw new Error('Too many release download redirects');
}

for (const row of records.templates) {
  assert.match(row.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.equal(row.license, 'MIT');
  assert.match(row.upstreamCommit, /^[a-f0-9]{40}$/);
  assert.match(row.adapterSha256, /^[a-f0-9]{64}$/);
  assert.match(row.sha256, /^[a-f0-9]{64}$/);
  assert.equal(row.cloneUrl, `${row.repositoryUrl}.git`);
  assert.equal(row.previewUrl, `https://lyrestudio.github.io/marketplace/demos/${row.id}/`);
  assert.equal(row.downloadUrl, `https://github.com/LyreStudio/marketplace/releases/download/${records.releaseTag}/${row.id}.zip`);
  const localAdapter = row.adapterUrl.split(`/marketplace/${records.adapterCommit}/`)[1];
  assert.match(localAdapter, /^adapters\/(templates|community)\/[a-z0-9-]+\/adapter\.json$/);
  const adapterBytes = await bytes(localAdapter);
  assert.equal(adapterBytes.length, row.adapterBytes);
  assert.equal(sha256(adapterBytes), row.adapterSha256);
  const adapter = JSON.parse(adapterBytes);
  assert.equal(adapter.id, row.id);
  assert.equal(`https://github.com/${adapter.source.repository}`, row.repositoryUrl);
  assert.equal(adapter.source.commit, row.upstreamCommit);
  assert.deepEqual(adapter.source.files, row.sourceFiles);
  assert.match(await readFile(new URL(localAdapter.replace('adapter.json', 'SECURITY-REVIEW.md'), import.meta.url), 'utf8'), /review|scan/i);
  const listing = v3.offerings.find(offering => offering.id === row.id);
  for (const key of ['title', 'summary', 'repositoryUrl', 'previewUrl', 'imageUrl', 'setupUrl', 'license']) assert.equal(listing?.[key], row[key]);
  if (process.argv.includes('--online')) {
    const page = await fetchBytes(row.previewUrl, 2 * 1024 * 1024);
    assert.match(page.toString('utf8'), new RegExp(`<meta name="lyre-marketplace-demo" content="${row.id}"`));
    assert.equal(sha256(await fetchBytes(row.adapterUrl, row.adapterBytes)), row.adapterSha256);
    const archive = await fetchBytes(row.downloadUrl, row.bytes, true);
    assert.equal(archive.length, row.bytes);
    assert.equal(sha256(archive), row.sha256);
  }
}
console.log(`PASS: ${records.templates.length} upstream MIT adapters; ${v3.offerings.length} current and ${v2.offerings.length} compatible listings${process.argv.includes('--online') ? '; live demos, adapter bytes and ready-to-use ZIP hashes verified' : ''}.`);
