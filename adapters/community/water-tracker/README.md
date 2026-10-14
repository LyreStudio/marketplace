# Water tracker

Mark 250 ml glasses and see progress against a sample two-liter goal.

Session-only; edit the sample goal in the source.

Download the prepared ZIP linked from this project's Lyre Marketplace listing, extract it into a new folder, and open that folder as a project in Lyre. The ZIP contains the original selected source plus this reviewed adapter. It is not a separate project fork. You can also run `npm start` in the extracted folder with Node 22 or newer. No dependency installation, account or API key is needed.

To prepare directly from the original pinned upstream source:

```sh
git clone https://github.com/LyreStudio/marketplace.git
cd marketplace
node adapters/runtime.mjs prepare water-tracker ./water-tracker
cd water-tracker
npm start
```

The destination must be new; existing folders are never merged or replaced. Preparation downloads only pinned source files, verifies their sizes and SHA-256 hashes, applies reviewed patches, and writes a fixed local preview configuration. Upstream npm/build scripts are not run. The preview opens at `http://127.0.0.1:4173` by default. The generated README and source record explain the editable files.

Original source: [bradtraversy/50projects50days at `c92b0bc3a87fc95d44b89552b7b6a2eeb36ca481`](https://github.com/bradtraversy/50projects50days/tree/c92b0bc3a87fc95d44b89552b7b6a2eeb36ca481/drink-water). [MIT license](https://github.com/bradtraversy/50projects50days/blob/c92b0bc3a87fc95d44b89552b7b6a2eeb36ca481/LICENSE) is retained in every output. No external art, font, API or package dependency is required by the prepared browser project.

See the [exact adapter](adapter.json), [basic security review](SECURITY-REVIEW.md) and [batch source/validation record](../../../research/mit-expansion-20261014.md). Browser checks cover actual project behavior in Lyre's unchanged preview sandbox at desktop and compact sizes. They do not establish physical-device or installed Lyre release acceptance.
