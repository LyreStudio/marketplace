# Reviewed upstream adapters (version 1)

Adapters preserve original upstream ownership. The marketplace contains small
reviewed patches, configuration and replacement artwork instead of template forks.
`runtime.mjs` is MIT licensed. This manual preparation tool does not authorize
desktop installation: Lyre compiles the source and adapter pins under ADR-0017.

Each `templates/<id>/adapter.json` or `community/<id>/adapter.json` is a complete
bundle with exactly these fields:

```json
{
  "schemaVersion": 1,
  "id": "example",
  "source": {
    "repository": "original-owner/original-project",
    "commit": "40 lowercase hexadecimal characters",
    "files": [{"path":"index.html","sourcePath":"subfolder/index.html","sha256":"64 hexadecimal characters","bytes":123}]
  },
  "patches": [{"path":"index.html","beforeSha256":"...","afterSha256":"...","edits":[{"offset":12,"delete":4,"insert":"YmFzZTY0"}]}],
  "overlays": [{"path":"server.mjs","base64":"...","sha256":"...","bytes":123}]
}
```

`path` is the materialized relative path. `sourcePath` selects the exact original
file from a pinned GitHub commit, including subfolder subsets and parent LICENSE.
Every original file is downloaded and verified before adaptation. Patches use byte
offsets into the original file, ascending nonoverlapping deletions and base64
insertions. Both original and resulting SHA-256 hashes must match. Overlays add
files; use patches for replacements. Licenses/notices cannot be patched. Include
parent licenses and accurate third-party terms; include a public security review
adjacent to the manifest or in an overlay. Review limits are not security guarantees.

The SHA-256 pin covers **actual adapter.json file bytes**, including its whitespace
and final newline. No normalization occurs. The bundle command copies those bytes.
Per-file bounds are 4 MiB, adapter JSON is at most 4 MiB, materialized output at most
32 MiB, each list at most 512 files (patches at most 4096 edits each). Unsafe paths,
links, private environment/credential paths and case collisions are rejected. The
materializer creates a new directory exclusively and does not merge existing work.

Each adapter includes a dependency-free `server.mjs`, `package.json`, public file
allowlist, documentation, owned assets and optional reviewed source patches. No
arbitrary commands or URLs are accepted from a catalog. No upstream build or package
lifecycle script is run. The template code has the user's OS authority when launched;
these import checks are not an OS sandbox or a vulnerability audit.

Manual preparation (Node 22 or newer):

```sh
node adapters/runtime.mjs prepare example ./example
node adapters/runtime.mjs bundle example ./example-adapter.json
cd example
npm start
```

The CLI generates fixed `lyre.json` with `node server.mjs` and port 4173. Config
overlays for `lyre.json`/`paseo.json` are forbidden. Desktop preparation instead owns
its pinned local runtime and generated configuration. Both paths produce identical
source/assets; the local runtime/configuration intentionally differs. Prepared
folders can be zipped as ready-to-use downloads with all original notices retained.
The runtime exports `parseAdapter`, `patchSource`, `materialize` and `adapterPath`.
