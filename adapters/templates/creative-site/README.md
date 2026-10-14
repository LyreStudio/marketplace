# Creative studio website

This Lyre template combines selected original MIT source from
[StartBootstrap/startbootstrap-creative](https://github.com/StartBootstrap/startbootstrap-creative/tree/b1762d8c690a2379c078c776dc0830bdd81c6f55) at `b1762d8c690a2379c078c776dc0830bdd81c6f55` with reviewed
central patches, configuration and original SVG sample artwork. The prepared
project retains the original parent LICENSE and third-party notices. See the
[source license](https://github.com/StartBootstrap/startbootstrap-creative/blob/b1762d8c690a2379c078c776dc0830bdd81c6f55/LICENSE).

Download the prepared ZIP from the [Lyre marketplace](https://lyrestudio.github.io/marketplace/),
extract it into a new folder, and use Lyre's Add project action to add that folder.
No per-template repository is needed. In a current Lyre desktop build containing
this reviewed recipe, Marketplace also offers Choose folder & install.

For manual preparation with Node 22 or newer:

```sh
git clone https://github.com/LyreStudio/marketplace.git
cd marketplace
node adapters/runtime.mjs prepare creative-site ../creative-site
cd ../creative-site
npm start
```

Preparation downloads pinned files from the original upstream, verifies hashes,
applies the [reviewed adapter](adapter.json), and generates a fixed `lyre.json`
preview service. There are no npm dependencies to install. The template's own
README explains editing, public-file serving, retained behavior and service limits.

Read the [basic security review and limits](SECURITY-REVIEW.md) before use.
These are starting points; browser checks and source pins do not guarantee that
vulnerabilities are absent or establish production readiness. Desktop installer
authority comes from compiled recipes, independently of listing metadata.
