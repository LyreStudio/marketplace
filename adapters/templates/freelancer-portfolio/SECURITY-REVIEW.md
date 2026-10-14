# Basic security review — 2026-10-14

Source: `StartBootstrap/startbootstrap-freelancer` at `5bc65b4bd01e4ab63186395d5f95c7fdaa26216d`.
Adapter SHA-256: `fef9b09b6fe65e76e31393fa8f620d0ed2e55a2ed02ae34333b98b1308a21b86`.

- Exact original pinned upstream files and full adapter bytes were SHA-256 verified. Original parent MIT LICENSE is preserved unchanged.
- Only selected static distribution/app source is imported. Upstream package/build/lifecycle scripts are excluded and never executed. Prepared package has no dependencies and only reviewed start/test scripts.
- Dependency-free local server uses an explicit public-files allowlist, GET/HEAD only, realpath boundary, and 404 for private/config/traversal/write requests; server denial tests and browser checks are separately required.
- Contact/signup forms are sample-only with visible feedback. SB Forms execution was removed; no email/signup service or form POST is supplied. Commerce/account pages remain demonstration UI.
- Versioned external JavaScript uses SHA-384 Subresource Integrity with anonymous CORS. Optional remote fonts/styles and their subresources remain outside source pins; CDN availability remains required. Existing terms are retained in THIRD-PARTY.md.
- Known-advisory lookup: OSV exact-version queries for Bootstrap 5.2.3, Bootstrap Icons 1.4.1/1.5.0, SimpleLightbox 2.1.0, Simple-DataTables 7.1.2, Font Awesome Free 6.3.0 and Chart.js 2.9.4 returned no known advisories at review time. Initial Chart.js 2.8.0 had HIGH prototype-pollution CVE-2020-7746 (GHSA-h68q-55jf-x68w), remediated by dashboard adapter upgrade to fixed compatible 2.9.4. See https://github.com/advisories/GHSA-h68q-55jf-x68w . This database query is not a guarantee of safety.
- No credentials or executable environment files are imported. Pattern matches for password/secret may describe demonstration account UI or documentation; this static review does not prove absence of all secrets.
- Limits: static/manual basic security review and targeted local functional checks, not a full dependency vulnerability audit, penetration test, OS sandbox, installed Lyre acceptance or physical-device verification.

Exact source/artifact inventory and static pattern findings are recorded in the task evidence. These checks make no guarantee that vulnerabilities are absent.
