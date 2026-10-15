# Validation — upstream adapters, 2026-10-14

This increment migrates twelve previously prepared MIT projects to original pinned
upstream source plus central adapters and adds 21 functional browser projects.
Current revision is `2026101403`: 36 v3 listings, three v2 and three v1.
Immutable adapter, setup and image commit: `172321eac6e018088d98160a21996435247c1638`.

## Per-project acceptance

All 33 source/adapter materializations verify exact original file sizes and SHA-256
digests before applying bounded reviewed patches. Original MIT notices remain.
All 33 dependency-free servers pass public-file, private/config/traversal and method
denials. Actual browser interactions and settled layouts pass at 1440×1000 and
390×844, including Lyre's unchanged `allow-scripts allow-same-origin allow-downloads`
sandbox where applicable. The new 21 apps include targeted normal/empty/error
states. Touch is Chromium emulation, not physical-device acceptance.

Every adapter has a linked basic scan tied to its original source fingerprint and
adapter bytes. Growth fixes include unsafe DOM text handling, special object keys,
invalid timer edits, malformed saved-data recovery and sandbox-compatible actions.
Dashboard Chart.js 2.8.0 had GHSA-h68q-55jf-x68w; the adapter uses 2.9.4 and versioned
CDN JavaScript has SHA-384 integrity attributes. OSV queries cover the seven actual
CDN package/version pairs; no known matches remain in the final selected versions
at query time. The dependency-free projects have no package/CDN advisory set.

## Integration evidence

- Real production source downloader matches all twelve migrated CLI outputs.
- A complete fresh Agency installation uses actual public pinned adapter/original
  source downloads, pinned project-local Node and the production first-launch check
  (7.058s). Only directory selection and test listing eligibility are supplied by
  the harness; installation/preparation/downloader behavior is real.
- All 33 deterministic ZIPs pass their recorded archive hashes, production
  extraction, retained MIT notices and exact public-source parity with hosted demos.
- Desktop Marketplace: 58 passed and one unchanged POSIX-only Windows skip.
  App Marketplace: 57 unit cases. Five renderer browser cases and twelve feed/
  marketing/starter cases pass. Desktop types and main compilation pass.
- The real gallery passes wide/compact layout, all images, search/zero-results/
  recovery and source URL copy feedback/fallback. Clipboard success is simulated;
  selected-input fallback is real. All screenshots were reviewed.
- Architecture pass is reused from the migration's unchanged module boundaries.

The running Lyre ledger retains earlier concurrent-work provenance and app-type
failures, fixes and later integrated results separately. Focused Marketplace passes
never establish an aggregate release or installed-device gate.

## Publication and limits

The coordinator verified committed live feed/site bytes, all 36 demo responses, all 33
ready-to-use release ZIP hashes and immutable adapter bytes after publication.
The rebuilt Electron bridge reads the live 36-entry v3 catalog and eligible recipes
and retains foreign-window denial. All 33 actual public demos load in the unchanged
web sandbox, with four representative hosted functional interactions (12.267s). Publication/deletion receipts live with the Lyre
implementation evidence; `node verify.mjs --online` rechecks public artifacts.

Twelve duplicate repositories have verified central replacements and preserved
git bundles/metadata. Authorized retirement was attempted once; all twelve GitHub
DELETE requests returned HTTP 403 for missing `delete_repo` scope. Zero were deleted. Existing local work and the three
original browser-app repositories are preserved. Historical standalone repository
URLs are replaced by central previews/downloads and original upstream source links.

No signed/installed Lyre binary, native directory-picker acceptance, physical
device, complete dependency audit, production authentication/email/checkout or
vulnerability-free certification is claimed. The marketplace origin is shared;
storage namespaces prevent collisions, not same-origin access by modified code.
New guided recipes require a Lyre app build containing the compiled pins.

## Original three apps: basic review and existing limits

Exact pinned archives for [Stockroom](reviews/stockroom.md),
[Project Desk](reviews/project-desk.md) and [Daybook](reviews/daybook.md) were acquired
and hash-checked. Fifteen existing model tests, public-byte/private-path/method
denials and focused browser input/import/storage checks pass. The CSS-only
`@tabler/core` 1.5.1 artifact has a scoped OSV no-match receipt; this does not audit
the excluded upstream build tree or infer an unstamped Bootstrap component version.

No critical/high issue was identified. Existing findings remain disclosed: native
Save and confirmation actions fail in Lyre's restricted web iframe; an allowed
filename replaced locally by a symlink could expose its target through the development
server; storage/backups are plaintext and explicit HOST override can expose the static
server. No symlinks or remote write endpoints occur in the reviewed archives. Sources
and sandbox permissions remain unchanged. Standalone/local checks are not promoted to
restricted-preview usability. The 33 prepared projects' functional acceptance is separate.
