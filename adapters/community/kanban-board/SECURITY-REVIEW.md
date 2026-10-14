# Basic security review — Kanban board

Reviewed 2026-10-14. Original MIT source `dcode-youtube/kanban-board@fceec91ac13631c8ac2f0788d3835346f4ebf349`. Source fingerprint: `5fbc131e864ee68bd1775d01b1702a92545f0d28569325c4e4acacb572310c17`. Exact individual source digests are in SOURCE.json; adapter before/after hashes bind the modifications.

No imported lifecycle scripts, packages, CDN dependencies, outbound endpoints or credential handling. Collection build tooling is excluded. Dependency advisory audit is not applicable to this zero-package output; Node runtime updates remain the user’s responsibility. Reviewed DOM sinks, input/storage, native forms/dialogs and exposed-file allowlist.

- medium: Unguarded shared storage and native confirmation Namespace/validate/preserve storage; use inline Cancel/Delete guard and explicit move control.
- medium: Contenteditable HTML paste and untrusted drop IDs Plaintext-only editor; reject absent/non-integer drop target IDs.
- low: Random numeric task IDs can collide Allocate monotonic numeric IDs from existing items.

Basic manual/pattern review and browser behavior evidence are not a comprehensive audit or a guarantee of no vulnerabilities. Browser checks do not establish physical-device or installed Lyre acceptance.
