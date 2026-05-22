# Academic Distinctions Portal

Static dashboard for organizing academic distinctions, fellowships, academies, funding-body honors, association recognition, and editorial or conference leadership.

## Open

Open `index.html` in a browser.

## Edit Definitions

Definitions and criteria live in `app.js` inside the `categories` array. Replace the draft `definition` text for each institution group when final wording is available.

## Edit Recognition Lists

The built-in academies, awards, fellowships, funding bodies, and leadership roles also live in `app.js` inside each institution group's `items` array.

## Logos

Institution logos are rendered from the website domains listed on each item, with custom logo overrides where needed. Generic grouped entries use a small stack of related site icons.

## Tier Tags

Recognition types are tagged as Tier 1, Tier 2, or Tier 3 using the tier system in `app.js`. Institution cards show all tiers represented by the recognition types inside that body.

## Recognition Detail Pages

Inside each institution group, cards represent the organization or awarding body, such as `Nobel Foundation` or `IEEE`. Click a body to view its organization-level profile and recognition types, then click a specific recognition, such as `Nobel Prize` or `IEEE Fellow`, to open a six-part criteria profile:

- Basic Information
- Organization and Governance
- Scope and Reach
- Selection and Application
- Award Details
- Impact and Prestige

## Sections

- Leading National Academies
- Other National Academies
- Professional and Scholarly Associations
- Private Foundations
- Government and Philanthropic Funding Bodies
- International Bodies
- Editorial and Conference Leadership
