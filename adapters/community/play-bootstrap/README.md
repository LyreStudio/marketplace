# Play Bootstrap website

An editable startup/SaaS static site with eight pages: landing, about, pricing, contact, blog, article, login and 404. Contact/login/newsletter controls demonstrate local sample feedback. No actual account, email, subscription or payment backend is included. No fields are sent or saved.

Download the prepared ZIP from this Lyre Marketplace listing, extract it into a new folder, and open that folder as a project in Lyre. With Node 22 or newer, `npm start` opens the local preview at http://127.0.0.1:4173. No package install, account or API key is required.

To prepare from original pinned source:

```sh
git clone https://github.com/LyreStudio/marketplace.git
cd marketplace
node adapters/runtime.mjs prepare play-bootstrap ./play-bootstrap
cd play-bootstrap
npm start
```

Use a new destination; existing folders are preserved. The runtime verifies exact original source and adapter patches, then writes a fixed preview configuration. [Original MIT source](https://github.com/uideck/play-bootstrap/tree/96e57206252039b92ea5bfe84c71fbfd0c29a19c) · [LICENCE](https://github.com/uideck/play-bootstrap/blob/96e57206252039b92ea5bfe84c71fbfd0c29a19c/LICENCE) · [adapter](adapter.json) · [basic security review](SECURITY-REVIEW.md).

The layout and eight-page navigation retain UIdeck's Play design. Unclear bundled imagery/marks/icon fonts are replaced by original SVG samples; Bootstrap 5.1.0 CSS and its MIT notice remain. Google Fonts and unused legacy JS/reveal libraries are excluded. Browser checks do not establish production services, a signed Lyre install or physical-device acceptance.
