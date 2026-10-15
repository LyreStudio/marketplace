# Basic security review: Stockroom

Reviewed 2026-10-14 against the exact existing compiled recipe and visible catalog pin. **No critical or high issue was identified by this basic review.** The medium item below is an existing preview compatibility limitation. This is not a comprehensive audit or a guarantee of no vulnerabilities.

## Reviewed immutable input

- Repository: [LyreStudio/stockroom](https://github.com/LyreStudio/stockroom).
- Commit: [`9968817aa46e6ec06201252bbd035c4c821eef4a`](https://github.com/LyreStudio/stockroom/tree/9968817aa46e6ec06201252bbd035c4c821eef4a).
- Original ZIP: [pinned archive](https://codeload.github.com/LyreStudio/stockroom/zip/9968817aa46e6ec06201252bbd035c4c821eef4a), **234962 bytes**, SHA-256 `b5f6751159b08c4d78f3732e60507f4ea4c11b0b3dad99c09fb1bd9cf93d3bcd`.
- Selected-file source fingerprint: `b8df3ee410a2bc1577b2719e7a2910fb441ba41108453cf0ceb630de740a1adf`. All 19 archive files were fingerprinted; ordinary-file entries and extraction paths were checked. No matching archive existed in the searched prior evidence, so this public pinned ZIP was fetched and verified. No package scripts were run during acquisition or inspection.
- Compiled recipe and catalog v3 revision `2026101403` agree on the repository/source pin. Catalog screenshot URLs name this same commit. Neither source nor any adapter was modified.

## License, dependencies and advisories

The application retains its [MIT license](https://github.com/LyreStudio/stockroom/blob/9968817aa46e6ec06201252bbd035c4c821eef4a/LICENSE), copyright 2026 Jonathan Bakhit. `vendor/LICENSE-tabler.txt` and `vendor/LICENSE-bootstrap.txt` retain the Tabler and Bootstrap MIT notices. `TEMPLATE.md` records Tabler v1.5.1 at upstream commit `0ff4043ba699bbc23639421147953481019caaf1`. The vendored stylesheet fingerprint is `f30225b371c49e84afe1411c51597acf05ec7ae9e0b8336e49f76c4ed2e87987`, matching the declared provenance. No third-party photography, font download or paid asset was found in the selected files.

`package.json` declares no npm dependencies or devDependencies. The only commands are `start: node server.mjs` and `test: node --test model.test.mjs`; no install/prepare/pre/post lifecycle hooks or shell commands are present. There is no install step and no npm lockfile to audit. The server imports only Node built-ins. Tests were executed directly through Node after inspection, with unrelated environment variables removed.

There **is** a third-party vendored stylesheet, so it was not treated as zero third-party code. On 2026-10-14 the [OSV API](https://api.osv.dev/v1/querybatch) query for npm `@tabler/core` **1.5.1** returned no advisory matches. The exact request/response is retained in the evidence. Official [npm version metadata](https://registry.npmjs.org/@tabler%2Fcore/1.5.1) and the [pinned Tabler repository manifest](https://github.com/tabler/tabler/blob/0ff4043ba699bbc23639421147953481019caaf1/package.json) were read. Their build/demo packages, Popper, ApexCharts and other JavaScript components are **not included or installed** in these apps; a CSS-only subset does not acquire the full package's runtime tree. Bootstrap's notice is retained, but a precise Bootstrap component version is not stamped in the selected CSS, so this review does not claim a separate exact-version Bootstrap advisory result. No Bootstrap/Tabler JavaScript is shipped. The Node/browser runtime and excluded upstream build tree were not dependency-audited. A no-match advisory response is not proof that no vulnerability exists.

## Network, input, storage and exposed files

No automatic outbound fetch, API, WebSocket, telemetry, credential handling, dynamic evaluation or command execution was found in the app source. Stylesheet URLs are embedded data resources; there are no remote CSS resource URLs. The visible external Source & help link is an explicit navigation to the project's GitHub page with `noopener noreferrer`. Browser security smoke checks observed no external resource requests.

Rendered records use created DOM elements and `textContent`, not user-supplied HTML. No Markdown renderer is present. JSON backups are limited to 2 MiB before reading; schema/app identity, record count (2,000), duplicate IDs, unknown fields, lengths, finite bounded numbers, configured enums and real dates are validated. Literal markup, cross-app imports and oversized inputs were exercised. Storage uses the per-app key `lyre-stockroom-v1`; invalid stored data is preserved and can be exported without rewriting it. Save/commit updates state only after storage succeeds. Quota failure retained the existing saved data and editor draft in the executed check.

The Node development server serves only `index.html`, `app.css`, `app.mjs`, `model.mjs`, `config.mjs` and `vendor/tabler.min.css`. Source modules/configuration are intentionally public and contain sample data, not credentials. It sends `nosniff`, allows GET/HEAD, and denies unlisted/private files and write methods. Eleven private/encoded paths and POST/PUT/DELETE/OPTIONS were tested. No environment/credential files or symlink entries are present in the reviewed ZIP. The server has no backend data or privileged Lyre RPC owner.

## Findings and dispositions

| Severity | Finding | Status and disposition |
| --- | --- | --- |
| Medium, functional | Native Save submission and native Delete confirmation are blocked in `allow-scripts allow-same-origin allow-downloads`. Save did not commit and the editor stayed open; Delete left the record count unchanged. Start empty/Import use the same native confirmation pattern in inspected source. | Existing limitation reported to coordinator. Not a security failure or permission to broaden the sandbox. No source fix was made. Standalone behavior does not establish restricted-preview usability. |
| Low, conditional | An allowed public filename replaced locally with a symlink would be followed by `readFile`; there is no realpath containment check. | No such link in the exact archive; no remote write capability. Requires local source modification. Record as development-server hardening, not a demonstrated remote exploit. |
| Informational | Data and exported backups are plaintext in this browser/origin. | Existing documented scope; no account, vault, cloud synchronization or encryption claim. Invalid-storage/export and quota/draft preservation checks pass. |
| Informational | Explicit HOST override can expose the unauthenticated static development server. | Loopback is the tested default. Use existing authorized Lyre delivery for remote access; this template adds no host permission. |

## Executed checks and limits

Evidence is retained by Lyre under `output/marketplace-upstream-20261014/growth/original-apps/`. `acquisition.json`, `scan.json`, `dependency-provenance.json`, `advisory-request.json`, `advisory-response.json` and `verification.json` record commands, immutable input hashes, measured durations and outcomes. Per-app `source.json` and `checks.log` retain exact file hashes and model output.

- Existing `node --test model.test.mjs`: **5/5 pass**, 0.158 seconds for this app.
- Exact-byte public responses, private-path/method denial and HEAD behavior: pass, 0.445 seconds including server startup.
- Browser security smoke: literal markup remains text, wrong-app/oversized imports rejected, malformed storage preserved and raw-exportable, quota failure preserves draft/saved state, zero external resources: pass.
- Restricted preview observation: **existing limitation**, as recorded above. Full per-app check duration: 1.687 seconds; three-app verification process: 6.089 seconds.

Platform: Windows, Node v24.19.0 and Playwright Chromium browser emulation. An initial supplemental fixture selected its outer frame and timed out; that fixture error is retained in the attempt record and was corrected without a project source change. No historical standalone functional pass is promoted to current sandbox acceptance. Full UI parity, physical device, installed Lyre binary, published-site immutability, fuzzing, exhaustive static analysis and runtime vulnerability audits are outside this review. Source fingerprint checks passed again after execution; the reviewed tree remains unchanged.

## File fingerprints

| File | Bytes | SHA-256 |
| --- | --- | --- |
| `.gitattributes` | 12 | `e753774a5c6c845d5b43db5e4e133c8b7308c233f036517be1e2ae01cb068790` |
| `.gitignore` | 36 | `97c6e0d55ab7ec521acaf05a8a5798812906f3979fae964e3d80b525423a0bd8` |
| `LICENSE` | 1072 | `5436bc2a190e1c11fd4f304668a09bd0968a817645224044f2a980273ef4bcea` |
| `README.md` | 2059 | `e2c77de25f820333101095e54169ce946f4b8790a52e0f01bad489be0003a5ee` |
| `TEMPLATE.md` | 903 | `a28cdfc44a3e11b941ae2aae6706808ee0afff7adbcbb9847e0f173334dc0658` |
| `VALIDATION.md` | 513 | `bd92c58b47a05469608744be75ae0443f00f3996d98bf1883ce83ca82b7af387` |
| `app.css` | 9113 | `21046086b3fbd68ffcfa7789db698804d4d23102b5e454c7252fce66bfc4ab61` |
| `app.mjs` | 9760 | `31810966d0d772c78543d8ad10a9af3f626d438cda9db76fd66dea3fcdafef04` |
| `config.mjs` | 1663 | `db890f5ecc6388df165534bd8289d4140e0e76de87f0af91bf8e570a1a5b2a28` |
| `index.html` | 2670 | `343fbf886c43bafb6f4be9b6b60f96430271fe2ba6294850567f0eadef05cd36` |
| `model.mjs` | 2948 | `eed32db005d2b55d24ac003d1c6e9e35323756bfe366e029babae320c6b843d3` |
| `model.test.mjs` | 2114 | `b815253b6c34454c0459cf20d6bdc681576c3d8d35348d98ba2d7f30ccc3b605` |
| `package.json` | 250 | `fab1a41fd08500beaf6c4bd8d9342842b8d1a5de19846f066a5bcd66ac1241a7` |
| `screenshots/desktop.png` | 93702 | `af9ab0129c243bf9e06b8207ae42fa51859eaa6e4b42bd4e1de891ef396ad690` |
| `screenshots/phone.png` | 54190 | `7866522c5dfac34476210ea0dad202e251b5436eccbc2e1c914740fd343287fd` |
| `server.mjs` | 1190 | `be984a28063a821651af54aa00fbcb5f17f304e6f8cc12f264bd039b943a5a7f` |
| `vendor/LICENSE-bootstrap.txt` | 1093 | `4620c84ad5ce8602ff65640ed6b7c8b78ebb9e036584f0ebc1ccc88206a4bb51` |
| `vendor/LICENSE-tabler.txt` | 1090 | `4f88a82d13be3c5c63a12c5631eae914aa4381b6dc17641bf1ab85f3f8f6c8a5` |
| `vendor/tabler.min.css` | 693737 | `f30225b371c49e84afe1411c51597acf05ec7ae9e0b8336e49f76c4ed2e87987` |
