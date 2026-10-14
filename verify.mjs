import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const read = async name => JSON.parse(await readFile(new URL(name, import.meta.url), 'utf8'));
const v1 = await read('catalog-v1.json');
const v2 = await read('catalog-v2.json');
const { templates } = await read('templates.json');
assert.deepEqual(v1.offerings.map(row => row.id), ['stockroom', 'project-desk', 'daybook']);
assert.equal(v1.revision, v2.revision);
assert.equal(v2.offerings.length, 15);
assert.equal(templates.length, 12);
for (const row of templates) {
  assert.match(row.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.match(row.commit, /^[a-f0-9]{40}$/);
  assert.match(row.sha256, /^[a-f0-9]{64}$/);
  assert.equal(row.license, 'MIT');
  assert.equal(row.repositoryUrl, `https://github.com/LyreStudio/${row.id}`);
  assert.equal(row.cloneUrl, `${row.repositoryUrl}.git`);
  assert.equal(row.downloadUrl, `https://codeload.github.com/LyreStudio/${row.id}/zip/${row.commit}`);
  assert.equal(row.previewUrl, `https://lyrestudio.github.io/${row.id}/`);
  const offering = v2.offerings.find(offering => offering.id === row.id);
  assert.equal(offering?.repositoryUrl, row.repositoryUrl);
  assert.equal(offering?.imageUrl, `https://raw.githubusercontent.com/LyreStudio/${row.id}/${row.commit}/screenshots/desktop.png`);
  if (process.argv.includes('--online')) {
    const page = await fetch(row.previewUrl, { redirect: 'error', signal: AbortSignal.timeout(15000) });
    assert.equal(page.status, 200, row.id);
    assert.ok(page.headers.get('content-type')?.includes('text/html'));
    assert.match(await page.text(), new RegExp(`<meta name="lyre-marketplace-demo" content="${row.id}"`));
    const archive = await fetch(row.downloadUrl, { redirect: 'error', signal: AbortSignal.timeout(30000) });
    assert.equal(archive.status, 200, row.id);
    const bytes = Buffer.from(await archive.arrayBuffer());
    assert.equal(bytes.length, row.bytes, row.id);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), row.sha256, row.id);
  }
}
console.log(`PASS: ${templates.length} MIT project records; ${v2.offerings.length} current and ${v1.offerings.length} compatible listings${process.argv.includes('--online') ? '; live demos and archive hashes verified' : ''}.`);
