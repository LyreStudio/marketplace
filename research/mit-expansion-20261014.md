# Additional MIT projects — 2026-10-14

This batch admits **21 functional browser projects** from original upstream repositories through central adapters. There are no new per-project forks. The coordinator owns catalog integration, compiled recipes, ZIP publication and hosted verification. This record covers the growth worker's selected source, patches, local output and browser evidence.

The discovery starting point remains [the earlier primary-source report](free-template-sources-20261014.md). Its larger framework, commerce and native candidates remain research, not admitted entries. An aggregator's license is never applied to linked projects.

## Original sources and notices

- [Frontend Mini Challenges](https://github.com/sadanandpai/frontend-mini-challenges/tree/a66d0068af09db3d3adf262a5dca92ca502bb822), pinned `a66d0068af09db3d3adf262a5dca92ca502bb822`: sixteen standalone JavaScript projects. The [actual MIT license](https://github.com/sadanandpai/frontend-mini-challenges/blob/a66d0068af09db3d3adf262a5dca92ca502bb822/LICENSE), copyright 2023 Sadanand Pai, is retained. Its tree has no nested license override. Shared collection navigation, Nx/Vite workspaces and Husky prepare lifecycle are excluded; none were executed. The memory game includes the reviewed parent DOM helper under the same grant.
- [50 Projects in 50 Days](https://github.com/bradtraversy/50projects50days/tree/c92b0bc3a87fc95d44b89552b7b6a2eeb36ca481), pinned `c92b0bc3a87fc95d44b89552b7b6a2eeb36ca481`: four additional projects. The [actual MIT license](https://github.com/bradtraversy/50projects50days/blob/c92b0bc3a87fc95d44b89552b7b6a2eeb36ca481/LICENSE), copyright 2022 Brad Traversy, and exact root README with its Traversy Media notice are retained. There is no nested license override. Optional Google Fonts imports are removed. To-do and Drawing pad remain owned by the migration worker.
- [Domenic's Kanban board](https://github.com/dcode-youtube/kanban-board/tree/fceec91ac13631c8ac2f0788d3835346f4ebf349), pinned `fceec91ac13631c8ac2f0788d3835346f4ebf349`: all browser source plus [MIT license](https://github.com/dcode-youtube/kanban-board/blob/fceec91ac13631c8ac2f0788d3835346f4ebf349/LICENSE), copyright 2021 Domenic. No library, API or build dependency is added.

Every adapter at `adapters/community/<id>/adapter.json` names selected original paths, exact byte lengths and SHA-256 hashes. Base64 byte patches bind before/after hashes; overlays add only the standalone launcher, allowlist, docs and integration helpers. The shared materializer downloads raw files by original commit, then verifies and applies these records. Original project source is not mirrored in the marketplace. Prepared ZIPs and demos are generated outputs for the coordinator to publish.

## Accepted projects

| ID | Project | Category | Practical limits |
| --- | --- | --- | --- |
| `basic-calculator` | Calculator | Personal Productivity | Floating-point arithmetic; not accounting software. |
| `bill-splitter` | Bill splitter | Personal Productivity | Session-only; currency label is rupees; no payment service. |
| `finance-tracker` | Finance tracker | Personal Productivity | Session-only; no saved transactions or bank connection. |
| `countdown-timer` | Countdown timer | Personal Productivity | Runs while the page is active; browser background timing can drift. |
| `text-transformer` | Text transformer | Personal Productivity | Local text utility; no persistence or translation. |
| `typing-practice` | Typing practice | Education | Local practice sentences; letter count rather than standardized WPM. |
| `tic-tac-toe` | Tic-tac-toe | Education | Two players on this device; no AI or online multiplayer. |
| `connect-four` | Four in a row | Education | Two players on this device; no online multiplayer. |
| `memory-pairs` | Memory pairs | Education | Local game; results are not saved. |
| `color-spotter` | Color spotter | Education | Color-perception game; not suitable as a vision test. |
| `pixel-art` | Pixel art | Prototypes | Session-only artwork; no export or saved gallery. |
| `focus-clock` | Focus clock | Personal Productivity | Silent timer; browser background timing can drift; no notifications. |
| `date-picker` | Calendar date picker | Personal Productivity | A date picker starter; no events, scheduling or persistence. |
| `json-builder` | JSON builder | Prototypes | String values only; no file import, export or server connection. |
| `number-guess` | Number guessing game | Education | Local browser game; no saved scores. |
| `phone-formatter` | Phone number formatter | Prototypes | Fixed demonstration format; no calling, country lookup or telecom validation. |
| `web-quiz` | Web basics quiz | Education | Fixed sample questions; no question service or saved results. |
| `choice-picker` | Choice picker | Personal Productivity | For casual choices; not cryptographic or audited random selection. |
| `water-tracker` | Water tracker | Personal Productivity | Session-only; edit the sample goal in the source. |
| `keyboard-inspector` | Keyboard event inspector | Prototypes | Page-local keyboard events only; no background key capture or storage. |
| `kanban-board` | Kanban board | Operations | Stored on this browser only; no accounts, cloud sync or collaboration. |

## Adaptations and basic security review

All 21 prepared projects have no imported npm, CDN or remote-service dependencies and execute no upstream package lifecycle scripts. Dependency advisory querying is therefore N/A for the output; it would not audit the browser or Node runtime. No API key or account is required. Collection root build manifests were inspected and excluded. The full selected original files, patched browser files, adapter bytes and materialized output were fingerprinted. Each project has a public adjacent `SECURITY-REVIEW.md` and the same review in its prepared output. Detailed matches/findings and scan limits are recorded per project in the evidence manifest.

Concrete corrections include keyboard key/code HTML interpolation replaced by text nodes; Kanban's native confirm replaced by inline Cancel/Delete controls; plaintext-only task input, explicit move controls and invalid-drop guards; namespaced validated storage with malformed-data preservation for Kanban and Color spotter; monotonic task IDs; memory-game same-tile/restart timing fixes; exact number validation and sandbox-safe form events; finance positive-finite validation and inline recovery; calculator division-by-zero feedback; bounded Color spotter grids; null-prototype JSON objects; Calendar's missing helper default and short-month selection; and keyboard inspector's upstream missing stylesheet reference. Focus clock's externally hosted icon/audio assets are removed for a silent local timer. Fonts use system fallbacks. There are no bundled third-party photos or illustrations in this batch.

The Node server serves only `public-files.json`, rejects POST and unlisted/private paths, checks real paths against its project root, and supports a first-launch `--check`. It is a development server, not an OS sandbox. Static demos share a Pages origin: storage namespaces prevent accidental collisions but do not create an origin security boundary against modified scripts. The projects store no credentials. No host authority, admin gate, source-integrity policy or preview sandbox permission is changed.

## Verification and reuse

Evidence root: `LyreStudio/output/marketplace-upstream-20261014/growth/`. Machine-readable accepted-only listing: `accepted.json`. `verification-summary.json` records commands, durations, input hashes, failures, final receipts, limits and the coordinator ledger handoff.

- `python .../growth/scan.py`: final 21-project exact source/patch/output, syntax, script/dependency, resource and reviewed-DOM scan passed in **4.215 seconds**. Every imported source hash and final adapter hash is recorded.
- `node .../growth/materialize-check.cjs`: initial 21 real CLI prepares passed with original immutable raw downloads, byte parity, source/license retention, public/private/method denial tests, fixed preview config, real first launch and existing-folder preservation. The final pass prepared four changed adapters in **3.376 seconds** and reused seventeen exact unchanged outputs. `materialization.json` and `materialization-current.json` retain both records and all per-file output hashes.
- Browser checks use the actual prepared app within `allow-scripts allow-same-origin allow-downloads`, at **1440×1000** and **390×844**, with no recorded page errors, failed requests, external resources or document overflow on final inputs. The final affected-six pass and remaining-fifteen canonical-pin pass cover every accepted project. Tests exercise arithmetic/zero/reset, bill and finance validation, timers and pause/reset, text transformations/literal rendering, typing, game wins/draws/reset, memory matching, score storage, pixel mouse/keyboard/emulated touch, dates/leap-year, nested JSON, input bounds, quiz results, choice selection, water progress, synthetic keyboard markup, and Kanban edit/move/Cancel/Delete/native drag reorder/reload. Malformed storage is preserved during subsequent edits.
- `node .../growth/states.cjs`: ten relevant empty/invalid/storage-error state captures passed in addition to the normal desktop/compact screenshots. Normal screenshots use clean sample data; security payload assertions remain in the checks. Contact sheets and affected full-size screenshots were visually inspected for settled layout and contrast.

Earlier browser attempts remain visible: invalid countdown edits were initially normalized silently, a generated Four-in-a-row helper had a variable typo, and Keyboard inspector referenced absent `style.css` while its source supplied `dark-style.css`. These were corrected before qualification. The first exploratory run was mutable debugging evidence and is not the final acceptance record. Canonical adapter-path correction changed provenance bytes; final browser passes were bound to final adapter hashes. Relevant source changes invalidated the growth suites in the coordinator's ledger; this worker did not edit the shared ledger.

This establishes local browser and source/materialization behavior on Windows with Node **v24.19.0**, Python **3.14.7** and Playwright Chromium. It does not establish a signed/installed Lyre release, physical phone input, production service behavior or published availability. Basic manual/pattern review and these tests are not a comprehensive audit or a guarantee of no vulnerabilities. The coordinator must verify final publication and compiled installer boundaries separately.

## Reviewed holds and deferred candidates

| Candidate | Disposition |
| --- | --- |
| 50 Projects Notes app | Held: obsolete Marked 1.2.2, raw Markdown-to-HTML rendering and CDN dependency/license review needed. No unsafe Markdown handler is admitted. |
| 50 Projects Theme clock | Held from this batch: source references a Stack Overflow range-mapping snippet and external design inspiration; clarify or replace those elements and test before admission. |
| 50 Projects Simple timer | Deferred: duplicates the admitted countdown tool, loads Tailwind CDN/Font Awesome, and its interval is cleared permanently on completion. No dependency/advisory acceptance performed. |
| 50 Projects Password generator | Deferred: security-sensitive random generation warrants dedicated cryptographic/input review. Not admitted as a secure credential generator. |
| Other 50 Projects animations, photo galleries and API demos | Not admitted: prioritize useful working tools; external art/service dependencies need independent review. Root MIT does not relicense those resources. |
| Mini Challenges Word counter | Held: explicit Stack Overflow algorithm attribution requires review or a clean replacement before an MIT-only output claim. |
| Mini Challenges Hangman / Rock-paper-scissors | Held: bundled GIF/image provenance is unverified; do not copy the sample art automatically. |
| Mini Challenges Password strength | Deferred: simple composition scoring and plain-text input need product/security review; no password-security claim made. |
| Mini Challenges BMI calculator | Deferred: zero/nonpositive input and native alert/form handling need a dedicated adapted behavior pass. |
| Mini Challenges Sorting visualizer | Deferred: nine-bar teaching demo is lower priority than the admitted functional set; it was read but not qualified. |
| Mini Challenges online weather/movie/currency/typeahead projects | Not admitted: API, credential, service and asset prerequisites were not qualified. |
| Remaining Start Bootstrap templates | Deferred in this worker: concentrate on functional breadth while migration worker owns existing Start Bootstrap outputs. No additional untested listing created. |
| Larger sources in the earlier 29-candidate report | Remain research only: framework/native/backend installs, transitive assets and licensing holds retain their original conditions. No admission inferred from an aggregator or an MIT badge. |

No code was committed or pushed by this worker. No additional agents or per-project repositories were created, and none of the prior twelve repositories were deleted. Those operations remain with the coordinator after replacement verification.
