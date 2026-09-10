# Business storefront and marketplace starting points

Reviewed September 10, 2026. These are upstream design/code references, not additional
installed Lyre apps or verified production deployments. Pick the business model first.

| Starting point | Best fit | Useful design patterns | Source and license |
| --- | --- | --- | --- |
| Medusa DTC Starter | A single retail business selling its products | Product/variant browsing, cart, checkout, customer accounts and order history | [Source](https://github.com/medusajs/dtc-starter), MIT |
| Medusa B2B Starter | Wholesale or trade catalogs | Company purchasing workflows and business-oriented product ordering | [Source](https://github.com/medusajs/b2b-starter), MIT |
| Vendure TanStack Storefront | A searchable business product catalog or store | Faceted search, sorting, collections, galleries, variants and localization | [Source](https://github.com/vendurehq/tanstack-starter-vendure), MIT; [visual demo](https://tanstack.vendure.io/) |
| Mercur Core | Multiple independent sellers in one marketplace | Seller onboarding, vendor catalogs, seller/admin dashboards and marketplace orders | [Source](https://github.com/mercurjs/mercur), MIT core; [demo](https://demo.mercurjs.com/) |

For Lyre's next business starter, a single-business product catalog is the smallest useful
scope: good photos, categories, filters, product specifications and an inquiry/quote action.
Add checkout only when the business needs online purchases. A multi-vendor marketplace
needs seller operations and payment/payout decisions beyond the visual template.

## Selection notes

- Medusa DTC is the maintained replacement linked from the archived
  [Next.js Medusa starter](https://github.com/medusajs/nextjs-starter-medusa). Do not start a
  new app on that archived repository merely because it has more stars.
- These are official starters or maintained core projects, but the individual DTC/B2B/Vendure
  starters are relatively young. At review: DTC 119 stars, B2B 49, Vendure TanStack 6,
  Mercur 1,757. This is selection context, not proof of reliability.
- The [Vendure announcement](https://vendure.io/blog/tanstack-start-storefront-starter)
  documents its demo and MIT storefront license. The backend and its dependencies have
  their own licensing and hosting requirements.
- Medusa starters require a backend/database. Vendure requires a running Shop API.
  Mercur requires commerce infrastructure; its paid Enterprise modules are not included
  in the MIT core. Public demos may show features outside the free core.
- Each business must supply its own branding/product data and review image/font/dependency
  rights. An open-source code license does not automatically license every demo asset.
- No templates were installed, forked, connected to payment services or runtime-tested by
  this research pass. Existing six Lyre marketplace app listings remain distinct.

Community extensions use the separate [Lyre extensions registry](https://github.com/LyreStudio/extensions).
Authors submit public source/license metadata by PR and retain ownership of their code.
