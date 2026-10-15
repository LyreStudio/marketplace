# Lyre Marketplace

[Browse and preview projects](https://lyrestudio.github.io/marketplace/).

The current catalog contains **36 projects**: three original browser apps and
33 MIT projects prepared from their original upstream sources. The shared
`adapters/` directory holds Lyre configuration, reviewed patches, local preview
tools and owned sample assets. A separate repository per template is unnecessary.
Prepared source is generated for demos and ZIP downloads; it is not an upstream fork.

## Start a project

1. Choose a project and download its ZIP.
2. Extract the ZIP and add that folder in Lyre.
3. Start its preview service. Manual preview needs Node 22 or newer and `npm start`.

Prepared projects need no npm package installation, account, API key or database.
Ten website/UI layouts use online fonts or UI libraries; their setup guides explain
the backend features and network access they need. The other 23 functional browser
projects use local resources. Source MIT notices and separate dependency terms remain.

A Lyre desktop build containing the reviewed recipes can prepare the project-local
Node runtime through **Choose folder & install**. Already installed versions can
download a ZIP and add its folder. A feed refresh does not add compiled install recipes.
Explicit Supabase feeds remain separately administered.

## Prepare directly from upstream

```sh
git clone https://github.com/LyreStudio/marketplace.git
cd marketplace
node adapters/runtime.mjs prepare basic-calculator ../my-calculator
cd ../my-calculator
npm start
```

The command downloads selected original files from the reviewed commit, verifies
their sizes and SHA-256 hashes, applies the matching adapter, and generates
`lyre.json`. It creates a new folder exclusively; it does not modify an existing
clone or merge into user work. Original-source links expose the full upstream
repository; ZIPs and the preparation command provide the ready-to-use Lyre project.
See [adapter format and boundaries](adapters/FORMAT.md).

## MIT starters

| Project preview | Original source | Download, setup and basic scan |
| --- | --- | --- |
| [Agency website](https://lyrestudio.github.io/marketplace/demos/agency-site/) | [StartBootstrap/startbootstrap-agency](https://github.com/StartBootstrap/startbootstrap-agency) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/agency-site.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/agency-site/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/agency-site/SECURITY-REVIEW.md) |
| [Freelancer portfolio](https://lyrestudio.github.io/marketplace/demos/freelancer-portfolio/) | [StartBootstrap/startbootstrap-freelancer](https://github.com/StartBootstrap/startbootstrap-freelancer) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/freelancer-portfolio.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/freelancer-portfolio/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/freelancer-portfolio/SECURITY-REVIEW.md) |
| [Creative studio website](https://lyrestudio.github.io/marketplace/demos/creative-site/) | [StartBootstrap/startbootstrap-creative](https://github.com/StartBootstrap/startbootstrap-creative) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/creative-site.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/creative-site/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/creative-site/SECURITY-REVIEW.md) |
| [Resume website](https://lyrestudio.github.io/marketplace/demos/resume-site/) | [StartBootstrap/startbootstrap-resume](https://github.com/StartBootstrap/startbootstrap-resume) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/resume-site.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/resume-site/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/resume-site/SECURITY-REVIEW.md) |
| [Clean Blog](https://lyrestudio.github.io/marketplace/demos/clean-blog/) | [StartBootstrap/startbootstrap-clean-blog](https://github.com/StartBootstrap/startbootstrap-clean-blog) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/clean-blog.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/clean-blog/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/clean-blog/SECURITY-REVIEW.md) |
| [Business website](https://lyrestudio.github.io/marketplace/demos/business-frontpage/) | [StartBootstrap/startbootstrap-business-frontpage](https://github.com/StartBootstrap/startbootstrap-business-frontpage) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/business-frontpage.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/business-frontpage/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/business-frontpage/SECURITY-REVIEW.md) |
| [Shop storefront](https://lyrestudio.github.io/marketplace/demos/shop-homepage/) | [StartBootstrap/startbootstrap-shop-homepage](https://github.com/StartBootstrap/startbootstrap-shop-homepage) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/shop-homepage.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/shop-homepage/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/shop-homepage/SECURITY-REVIEW.md) |
| [Admin dashboard](https://lyrestudio.github.io/marketplace/demos/admin-dashboard/) | [StartBootstrap/startbootstrap-sb-admin](https://github.com/StartBootstrap/startbootstrap-sb-admin) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/admin-dashboard.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/admin-dashboard/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/admin-dashboard/SECURITY-REVIEW.md) |
| [Product landing page](https://lyrestudio.github.io/marketplace/demos/landing-page/) | [StartBootstrap/startbootstrap-landing-page](https://github.com/StartBootstrap/startbootstrap-landing-page) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/landing-page.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/landing-page/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/landing-page/SECURITY-REVIEW.md) |
| [Grayscale website](https://lyrestudio.github.io/marketplace/demos/grayscale-site/) | [StartBootstrap/startbootstrap-grayscale](https://github.com/StartBootstrap/startbootstrap-grayscale) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/grayscale-site.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/grayscale-site/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/grayscale-site/SECURITY-REVIEW.md) |
| [To-do list](https://lyrestudio.github.io/marketplace/demos/todo-list/) | [bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/todo-list.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/todo-list/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/todo-list/SECURITY-REVIEW.md) |
| [Drawing pad](https://lyrestudio.github.io/marketplace/demos/drawing-app/) | [bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/drawing-app.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/drawing-app/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/templates/drawing-app/SECURITY-REVIEW.md) |
| [Calculator](https://lyrestudio.github.io/marketplace/demos/basic-calculator/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/basic-calculator.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/basic-calculator/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/basic-calculator/SECURITY-REVIEW.md) |
| [Bill splitter](https://lyrestudio.github.io/marketplace/demos/bill-splitter/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/bill-splitter.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/bill-splitter/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/bill-splitter/SECURITY-REVIEW.md) |
| [Finance tracker](https://lyrestudio.github.io/marketplace/demos/finance-tracker/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/finance-tracker.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/finance-tracker/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/finance-tracker/SECURITY-REVIEW.md) |
| [Countdown timer](https://lyrestudio.github.io/marketplace/demos/countdown-timer/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/countdown-timer.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/countdown-timer/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/countdown-timer/SECURITY-REVIEW.md) |
| [Text transformer](https://lyrestudio.github.io/marketplace/demos/text-transformer/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/text-transformer.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/text-transformer/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/text-transformer/SECURITY-REVIEW.md) |
| [Typing practice](https://lyrestudio.github.io/marketplace/demos/typing-practice/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/typing-practice.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/typing-practice/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/typing-practice/SECURITY-REVIEW.md) |
| [Tic-tac-toe](https://lyrestudio.github.io/marketplace/demos/tic-tac-toe/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/tic-tac-toe.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/tic-tac-toe/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/tic-tac-toe/SECURITY-REVIEW.md) |
| [Four in a row](https://lyrestudio.github.io/marketplace/demos/connect-four/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/connect-four.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/connect-four/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/connect-four/SECURITY-REVIEW.md) |
| [Memory pairs](https://lyrestudio.github.io/marketplace/demos/memory-pairs/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/memory-pairs.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/memory-pairs/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/memory-pairs/SECURITY-REVIEW.md) |
| [Color spotter](https://lyrestudio.github.io/marketplace/demos/color-spotter/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/color-spotter.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/color-spotter/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/color-spotter/SECURITY-REVIEW.md) |
| [Pixel art](https://lyrestudio.github.io/marketplace/demos/pixel-art/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/pixel-art.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/pixel-art/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/pixel-art/SECURITY-REVIEW.md) |
| [Focus clock](https://lyrestudio.github.io/marketplace/demos/focus-clock/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/focus-clock.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/focus-clock/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/focus-clock/SECURITY-REVIEW.md) |
| [Calendar date picker](https://lyrestudio.github.io/marketplace/demos/date-picker/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/date-picker.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/date-picker/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/date-picker/SECURITY-REVIEW.md) |
| [JSON builder](https://lyrestudio.github.io/marketplace/demos/json-builder/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/json-builder.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/json-builder/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/json-builder/SECURITY-REVIEW.md) |
| [Number guessing game](https://lyrestudio.github.io/marketplace/demos/number-guess/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/number-guess.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/number-guess/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/number-guess/SECURITY-REVIEW.md) |
| [Phone number formatter](https://lyrestudio.github.io/marketplace/demos/phone-formatter/) | [sadanandpai/frontend-mini-challenges](https://github.com/sadanandpai/frontend-mini-challenges) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/phone-formatter.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/phone-formatter/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/phone-formatter/SECURITY-REVIEW.md) |
| [Web basics quiz](https://lyrestudio.github.io/marketplace/demos/web-quiz/) | [bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/web-quiz.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/web-quiz/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/web-quiz/SECURITY-REVIEW.md) |
| [Choice picker](https://lyrestudio.github.io/marketplace/demos/choice-picker/) | [bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/choice-picker.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/choice-picker/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/choice-picker/SECURITY-REVIEW.md) |
| [Water tracker](https://lyrestudio.github.io/marketplace/demos/water-tracker/) | [bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/water-tracker.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/water-tracker/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/water-tracker/SECURITY-REVIEW.md) |
| [Keyboard event inspector](https://lyrestudio.github.io/marketplace/demos/keyboard-inspector/) | [bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/keyboard-inspector.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/keyboard-inspector/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/keyboard-inspector/SECURITY-REVIEW.md) |
| [Kanban board](https://lyrestudio.github.io/marketplace/demos/kanban-board/) | [dcode-youtube/kanban-board](https://github.com/dcode-youtube/kanban-board) | [ZIP](https://github.com/LyreStudio/marketplace/releases/download/templates-20261014.1/kanban-board.zip) · [Setup](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/kanban-board/README.md) · [Review](https://github.com/LyreStudio/marketplace/blob/172321eac6e018088d98160a21996435247c1638/adapters/community/kanban-board/SECURITY-REVIEW.md) |

The gallery also retains its existing browser apps and mobile-source/store links.
Mobile screenshots and source availability do not establish Lyre physical-device acceptance.

## Security review and publication

All 36 listed projects have source-bound basic security reviews. Each of the 33
prepared projects links its adapter review. Reviews
cover applicable licenses, source integrity, executable setup, dependencies,
outbound requests, unsafe input/DOM patterns, storage/credentials and public-file
boundaries. Findings and mitigations are linked per project. Chart.js 2.8.0 in the
dashboard was updated to 2.9.4 for
[CVE-2020-7746](https://github.com/advisories/GHSA-h68q-55jf-x68w), and versioned CDN
scripts carry integrity hashes. Current scanned CDN versions have no remaining
known OSV matches at the recorded query time. Fonts and other external resources,
future dependency vulnerabilities and Node updates retain their own risks.
These basic scans are not comprehensive security audits or guarantees.

`catalog-v3.json` carries all 36 current listings at revision `2026101403`.
Compatible `catalog-v1.json` and `catalog-v2.json` retain Stockroom, Project Desk and
Daybook with their existing URL shapes. New readers fall back only on authentic
missing-endpoint responses. The publication never supplies executable setup.

`templates.json` records upstream files, immutable adapter pins and ready-to-use
archive hashes. [Release ZIPs](https://github.com/LyreStudio/marketplace/releases/tag/templates-20261014.1)
are generated from the verified source plus adapters; [validation](VALIDATION.md)
separates local, hosted and installed-release evidence. Run `node verify.mjs` for
local records or `node verify.mjs --online` for live demos, adapter bytes and ZIPs.

Research: [initial source review](research/free-template-sources-20261014.md) and
[21-project expansion, fixes and holds](research/mit-expansion-20261014.md).

## Original browser app reviews

[Stockroom](reviews/stockroom.md), [Project Desk](reviews/project-desk.md) and
[Daybook](reviews/daybook.md) were reviewed against their exact compiled source
archives. No critical or high issue was identified by the basic checks. Their
vendored Tabler 1.5.1 CSS has a separate scoped advisory record.

These three original apps have an existing limitation in Lyre's web iframe: Save
uses native form submission and destructive actions use native confirmation, which
the unchanged sandbox blocks. Open their standalone browser sites for those actions.
The reviews also record conditional development-server symlink hardening and
plaintext browser/backups. No source was changed; these limits do not qualify as
functional sandbox passes. The 33 prepared projects have their own functional checks.

The twelve duplicate source repositories have verified backups and published
central replacements. Retirement was attempted after cutover; all twelve DELETE
requests returned GitHub HTTP 403, missing `delete_repo` scope. **Zero repositories
were deleted.** The current links use original upstream sources and central assets.
