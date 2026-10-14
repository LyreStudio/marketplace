# Validation — 2026-10-14

The current publication prepares twelve new MIT projects and retains the three
existing browser apps. The source repositories and their Pages demos were
published before the listings. Exact source commits, download URLs, archive
SHA-256 and upstream provenance are in [templates.json](templates.json).

## Verified preparation

- Ten Start Bootstrap templates: actual MIT licenses and pinned upstream archive
  digests checked. Bundled upstream imagery/logos replaced by original MIT SVG
  sample artwork. Original code notices are retained. SB Forms runtime removed;
  sample forms do not send data. Remote CDN libraries/fonts retain separate terms.
- Two functional apps: `todo-list` and `drawing-app` from
  `bradtraversy/50projects50days` at
  `c92b0bc3a87fc95d44b89552b7b6a2eeb36ca481`. Exact upstream files and root MIT
  license checked; both original copyright notices retained. Remote font imports
  removed. The prepared apps make no external resource requests.
- All twelve exact published archives passed Lyre's production extraction
  validator, preserving licenses and the public source that was exercised.
  All twelve dependency-free Node server checks pass: public assets load;
  private source/config, `.env`, `.git`, `.lyre`, traversal and writes are denied.

## Real browser and installer evidence

Windows x64, Node 24.19.0 and Playwright Chromium:

- All 25 HTML pages checked at 1440×1000 and 390×844. No settled horizontal
  document overflow, script errors or failed resource requests. Screenshots were
  captured from the running projects and inspected separately.
- To-do list: add, reload persistence, completion, keyboard deletion, literal-text
  rendering and malformed-storage preservation pass.
- Drawing pad: mouse/touch drawing, bounded pen size, PNG export and cancelled /
  accepted clear confirmation pass. Touch here is Chromium emulation.
- Gallery: twelve preview/source/ZIP/clone entries, retained six older website
  cards, all screenshots, desktop/compact layout, readable selected-URL fallback
  and copy-success feedback pass. Clipboard success uses a simulated API; the
  fallback uses the actual input selection.
- Production `MarketplaceInstaller` and `prepareProject` completed a Windows
  `agency-site` installation with the real pinned project-local Node runtime,
  preview configuration and first-launch HTML/script check in 5.827 seconds.
  The native directory picker was injected. The common browser preparation owner
  is qualified once; other projects reuse individual source/browser/server checks.

## Lyre integration checks

The source integration has 48 passing desktop Marketplace tests and one unchanged
POSIX-only skip on Windows; 54 unique app Marketplace unit cases and five browser
cases pass through current and input-valid reused results. Four feed preparation
and seven retained marketing/starter checks pass. Desktop types, focused main
build, scoped lint/format, architecture and source-provenance checks pass.

Initial failures remain in the local running ledger: notice placement intercepted
a mobile menu, an unsettled chart resize was measured too early, expected recipe
counts needed updating, a VM-array assertion needed normalization, a source-byte
comparison needed CRLF normalization, and one demo returned a transient HTTP 503.
Corrected affected checks pass. Production archive hashes and denial checks were
not relaxed.

## Feed compatibility and limits

Data revision `2026101401` prepares fifteen v2 listings and three v1 listings.
Prepared SHA-256:

| Artifact | SHA-256 |
| --- | --- |
| catalog-v1.json | `a8c6524a1021a4ea1bcacaed721478a5c34942a266b0dab814a0c26b8854f4e6` |
| catalog-v2.json | `af899d42a394afd1f21ded51b9c9c74e6a51beea8ff5c7ac51ba21855cd2d861` |

Run `node verify.mjs` for local publication records, or `node verify.mjs --online`
to recheck live project demos and archive hashes. Lyre's independent feed
preparation also validates both artifacts against the production catalog parser.
The publisher checks live feed bytes after pushing this publication.

This is not a signed Lyre release or installed Electron/iOS/Android acceptance.
New guided install recipes require a Lyre build containing them; existing releases
can use Add project → Clone repository or add an extracted ZIP. Explicit Supabase
catalogs retain their separately administered publication. No authentication,
checkout, email service or production security certification is inferred from a
website/UI layout, and the drawing canvas is not autosaved.
