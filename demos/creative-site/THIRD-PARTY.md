# Attribution and dependencies

## Template code

[StartBootstrap/startbootstrap-creative](https://github.com/StartBootstrap/startbootstrap-creative/tree/b1762d8c690a2379c078c776dc0830bdd81c6f55) at `b1762d8c690a2379c078c776dc0830bdd81c6f55`, MIT. The upstream LICENSE and code-header notices are retained. [TEMPLATE.json](TEMPLATE.json) records the downloaded archive SHA-256 and adaptations. UPSTREAM-README.md is the original guide, retained for attribution; its build/service instructions describe upstream, not this prepared project.

## Artwork

All bundled upstream photography, logos, illustrations and favicons were replaced with original SVG sample artwork authored for Lyre, MIT. No brand endorsement is implied. The original asset names and replacements are recorded in TEMPLATE.json. Replace sample artwork with your own licensed content before launch.

## Remote resources

The HTML retains versioned upstream CDN URLs for Bootstrap 5.2.3 (MIT), and, where used, Bootstrap Icons (MIT), SimpleLightbox (MIT), Simple-DataTables (MIT), Chart.js 2.9.4 (MIT), and Font Awesome Free 6.3 (icons CC BY 4.0, fonts SIL OFL 1.1, code MIT). Google Fonts retain the individual font families' licenses and are loaded remotely. These are separate third-party terms, not relicensed as Lyre code.

Sources: [Bootstrap license](https://github.com/twbs/bootstrap/blob/v5.2.3/LICENSE), [Bootstrap Icons license](https://github.com/twbs/icons/blob/main/LICENSE), [SimpleLightbox license](https://github.com/andreknieriem/simplelightbox/blob/master/LICENSE), [Simple-DataTables license](https://github.com/fiduswriter/simple-datatables/blob/main/LICENSE), [Chart.js license](https://github.com/chartjs/Chart.js/blob/v2.9.4/LICENSE.md), [Font Awesome license](https://fontawesome.com/license/free), [Google Fonts licensing](https://developers.google.com/fonts/faq).

CDNs receive ordinary browser resource requests. Source pinning and a local file allowlist do not certify these remote bytes or establish a full dependency security audit. These samples are starting points; assess dependencies and service requirements before production use.


## Basic known-advisory review (2026-10-14)

Exact imported versions were queried against OSV: Bootstrap 5.2.3, Bootstrap Icons 1.4.1/1.5.0, SimpleLightbox 2.1.0, Simple-DataTables 7.1.2, Font Awesome Free 6.3.0 and Chart.js 2.9.4. The database returned no known advisories for these versions at query time; absence of a result is not a guarantee of safety. The former Chart.js 2.8.0 had HIGH prototype pollution CVE-2020-7746 / GHSA-h68q-55jf-x68w and was replaced by compatible fixed 2.9.4 in the dashboard. See https://github.com/advisories/GHSA-h68q-55jf-x68w.

Versioned external JavaScript now has reviewed SHA-384 Subresource Integrity and anonymous CORS. Optional remote styles/fonts and their subresources remain outside the source pins. CDN availability remains required. Public SECURITY-REVIEW.md beside the adapter records findings and limits.
