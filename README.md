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

## Level Tags

Recognition types are tagged using the MBZUAI hybrid internal levels in `app.js`: Level 1A, Level 1B, Level 1C, Level 2, Level 3, and Level 4. Institution cards show all levels represented by the recognition types inside that body.

## Recognition Detail Pages

The Institutions tab lists organizations and awarding bodies, such as `Nobel Foundation` or `IEEE`. Click a body to view its organization-level profile and recognition types, then click a specific recognition, such as `Nobel Prize` or `IEEE Fellow`, to open a six-part criteria profile. The Recognitions tab lists the recognition types directly.

- Basic Information
- Organization and Governance
- Scope and Reach
- Selection and Application
- Award Details
- Impact and Prestige

## Faculty

The Faculty tab lists faculty-held distinctions with public-facing hybrid category, internal level, and notable status. Each recognition links directly to its criteria profile page.

## Sections

- Leading National Academies
- Other National Academies
- Professional and Scholarly Associations
- Private Foundations
- Government and Philanthropic Funding Bodies
- International Bodies
- Editorial and Conference Leadership
