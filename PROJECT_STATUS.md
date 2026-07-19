# SABR Project Status

Living snapshot of where the South African Botanical Registry project stands. Read this alongside SOURCE_POLICY.md (the rules) and SCRAPER_BOT_SPEC_NOTES.md (the edge-case log) to resume work in a new conversation with full context.

Last updated: 2026-07-19

---

## Site architecture — current state

- **Static Astro site**, deployed via GitHub → Cloudflare Pages, direct commits to `main` (no PR workflow used).
- **Key files:**
  - `src/pages/index.astro` — homepage, plant grid, sticky mobile hero, "Join Our Community" CTA bar (placeholder, not functional), remembers last-viewed plant via sessionStorage
  - `src/pages/species/[id].astro` — the main species page template. Large file, rebuilt several times tonight after a mid-session truncation bug. **Always verify the file ends with `})();` then `</script>` then `</Layout>` before committing, nothing after.**
  - `src/layouts/Layout.astro` — shared layout, has its own small `<script is:inline>` (tab-click/modal-close handlers), separate from `[id].astro`'s script
  - `src/utils/constants.ts` — TABS array; `ik` tab label is `"IK & Heritage"`
  - `src/data/plant_registry.json` — audited structured facts (native region, stats, protection), provenance-wrapped with `source`/`verified_at`/`history` per field
  - `src/data/common_names.json` — common names per plant per language
  - `src/data/pillars/[slug].json` — one file per plant, one array per category (wellness, innovation, ik, people, agronomy, legislation, projects, intelligence), each array holding article objects with `title`, `teaser`, `body`, `badge`, `tier`, `verified_by`, `verified_at`, `source_urls`, `updated_at`
  - `src/components/NewMap.astro` — province map component; colors provinces per palette, draws farm markers per type (commercial/small-scale/organic/wild-harvest); **still blocked on real `za-provinces.topojson` data** (currently a 1-byte placeholder)
  - `public/data/farms.json`, `public/data/za-provinces.topojson` (empty placeholder)
  - `SOURCE_POLICY.md`, `SCRAPER_BOT_SPEC_NOTES.md`, `PLANT_REGISTRY_UPDATES.md` — all in repo root

## Feature status

| Feature | Status |
|---|---|
| Species page layout (carousel, datasheet, protection badges, province map key) | ✅ Working |
| 9-tab navigation (Data Sheet + 8 pillar categories) with per-category colors | ✅ Working |
| Mobile Explore dropdown (glassmorphic pills, gold-border-when-locked) | ✅ Working |
| Mobile sticky nav band showing current category name | ✅ Working |
| Read/Hide toggle per article, localStorage read-tracking | ✅ Working (only marks "read" for ungated articles or once `community-member` class exists) |
| Gate/blur overlay on gated categories (legislation, intelligence, projects, wellness, innovation, ik) | ✅ Working, shows "Join the community to unlock all categories" |
| Lock indicators (gold border/box-shadow, not emoji — emoji can't be recolored) | ✅ Working, desktop tabs + mobile pills + mobile nav band |
| Knowledge-equity badges (traditional/industry/indigenous/peer-reviewed) shown per article | ✅ Working |
| Badge legend row | ❌ Removed per user request (redundant with per-article badges) |
| "Join Our Community" actual signup form/modal | ❌ **Not built.** Currently only a placeholder `alert()`. This is real outstanding work — needs: email required, name/org/interests optional fields, a way to set `community-member` class on `<body>` and persist it (localStorage), and ideally a proper Formspree-style submission |
| Footer buyer/supplier modals | ✅ Working (Formspree), labelled "I am a Buyer" / "I am a Supplier" |
| Province map rendering real boundaries | ❌ Blocked — `za-provinces.topojson` still empty, needs real SA province boundary data sourced (SANBI/GADM/mapshaper.org) |
| Domain redirect strategy (105 domains → species pages) | Designed, not yet implemented — safe 301-redirect + canonical approach agreed, cloaking/doorway pattern explicitly rejected |

## Content status — pillar articles (8 categories each)

**Priority order** (based on dedicated domain investment, see Domains_9June_2026.docx):

| Plant | Status |
|---|---|
| Rooibos | ✅ Complete, redone at full depth with badges |
| Honeybush | ✅ Complete, redone at full depth with badges |
| Kanna | ✅ Complete |
| African Ginger | ✅ Complete |
| Buchu | ✅ Complete |
| Pelargonium Sidoides | ✅ Complete |
| Aloe Ferox | ✅ Complete |
| Devil's Claw | ✅ Complete |
| African Potato | ✅ Complete |
| **Pepper Bark** | ❌ Not yet started — next in queue |
| Bulbine | ❌ Not started |
| Acacia | ❌ Not started |
| African Ashwagandha | ❌ Not started |
| Artemisia Afra | ❌ Not started |
| Athrixia | ❌ Not started |
| Baobab | ❌ Not started |
| Hoodia | ❌ Not started |
| Mphepho | ❌ Not started |
| Uzara | ❌ Not started |
| Sutherlandia | ❌ Not started (no dedicated domain) |
| Wild Olive | ❌ Not started (no dedicated domain) |
| Wild Sage | ❌ Not started (no dedicated domain) |
| Cape Chamomile | ❌ Not started (no dedicated domain) |
| Marula | ❌ Not started (no dedicated domain) |

**All 22 placeholder pillar JSON files** (`{}`) were pre-created in `src/data/pillars/` early on, so remaining plants just need their placeholder replaced with real content, no new-file creation needed.

## How to continue plant content (the working protocol)

Trigger phrase: **"Write all 8 category articles for [Plant Name]"** or simply **"proceed"** once a plant is named.

Process per plant, every time:
1. Live-browser research (Claude in Chrome, connected) per category, following SOURCE_POLICY.md's Source Hierarchy (SANBI first, then peer-reviewed journals, then government/regulatory, internal dossier last resort)
2. Apply Editorial Writing Constraints (no em dashes, no "not just X but Y," no throat-clearing transitions, vary sentence rhythm — full list in SOURCE_POLICY.md)
3. Apply Cross-Plant Repetition Check — must check previous plants' articles in the same category for repeated opening structures/phrases before writing
4. Apply Per-Category Guidelines (Wellness needs non-medical-advice disclaimer; Legislation needs precise legal tense; Intelligence must avoid investment-advice framing; etc.)
5. Assign correct badge (`traditional`, `industry`, `indigenous`, `peer-reviewed`) per Knowledge Equity rules — no hierarchy between traditional/indigenous/peer-reviewed knowledge, ever
6. UK/South African English throughout
7. Flag any `plant_registry.json` corrections discovered along the way using the exact block format already established (see PLANT_REGISTRY_UPDATES.md for the format and existing entries for Kanna, African Ginger, Pelargonium Sidoides, Aloe Ferox)
8. Deliver the complete `pillars/[slug].json` file for that plant, all 8 categories

**Realistic pace:** roughly 2-3 well-verified articles per category per plant per session is honest; rushing to hit a volume target risks the exact quality problems already caught and fixed once tonight (repetition, missing depth, unverified claims).

## Open decisions, not yet resolved

1. **Kigelia (Sausage Tree)** — user owns 2 dedicated domains (`kigelia.bio`, `kigeliaextracts.com`) but it isn't one of the 24 registered species. Real commercial/cosmetic relevance confirmed. Decision to add as species #25 was explicitly deferred ("no, let's stay focused") — revisit once the 24 are further along.
2. **Pinitol domains** (`pinitol.co.za`/`.bio`) — resolved, mapped to Bulbine.
3. **Join Community modal/form** — fields agreed in concept (email required; name/org/interest-category checkboxes optional; Role/Sector dropdown), actual build not started.
4. **When to link up the 105 domains** — agreed: after pillar content exists on the destination pages, prioritised by domain-investment order above, not before.
5. **`map-config.json`** — exists in `public/data/` but contains raw JS, not JSON; nothing currently reads it; low priority cleanup.

## Known outstanding technical debt

- `za-provinces.topojson` still empty — map won't visually render province shapes until real geographic data is sourced (mapshaper.org + GADM/SANBI boundary data was the suggested path)
- `PLANT_REGISTRY_UPDATES.md` has several pending entries (Kanna, African Ginger, Pelargonium Sidoides, Aloe Ferox) not yet manually applied to `plant_registry.json`
- Several plants' `common_names.json` entries may still have minor SANBI-vs-current naming discrepancies flagged during the original 24-plant audit (see `24-plants-audited.md` in repo) not all fully applied
