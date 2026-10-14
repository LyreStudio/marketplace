# Basic security review — 2026-10-14

Source: `bradtraversy/50projects50days` at `c92b0bc3a87fc95d44b89552b7b6a2eeb36ca481`.
Adapter SHA-256: `b9ba627a51d1e3b8c72d10a47af908da13e34efb3f4b5c50d56d24a6e129226f`.

- Exact original pinned upstream files and full adapter bytes were SHA-256 verified. Original parent MIT LICENSE is preserved unchanged.
- Only selected static distribution/app source is imported. Upstream package/build/lifecycle scripts are excluded and never executed. Prepared package has no dependencies and only reviewed start/test scripts.
- Dependency-free local server uses an explicit public-files allowlist, GET/HEAD only, realpath boundary, and 404 for private/config/traversal/write requests; server denial tests and browser checks are separately required.
- Tasks are rendered using textContent and saved under a namespaced browser-local key. Malformed stored data is preserved and storage failures are shown. No account or sync service. Local browser data is accessible to scripts on the same origin.
- Prepared app has no external font/library requests; functional browser checks verify offline resource behavior.
- No imported runtime npm/CDN packages to query. No known-advisory absence claim is made for handwritten app/server code.
- No credentials or executable environment files are imported. Pattern matches for password/secret may describe demonstration account UI or documentation; this static review does not prove absence of all secrets.
- Limits: static/manual basic security review and targeted local functional checks, not a full dependency vulnerability audit, penetration test, OS sandbox, installed Lyre acceptance or physical-device verification.

Exact source/artifact inventory and static pattern findings are recorded in the task evidence. These checks make no guarantee that vulnerabilities are absent.
