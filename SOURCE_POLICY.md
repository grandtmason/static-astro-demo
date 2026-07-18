# SABR Source-of-Truth Policy
## Source Hierarchy (highest wins on conflict)
1. **SANBI PlantZAfrica** (pza.sanbi.org) — authoritative for common names, family, distribution/native range
2. **Peer-reviewed journals** (Scholar-indexed) — chemistry, clinical, pharmacological claims. Note citation count when available.
3. **Government/regulatory bodies** (.gov.za, EMA, WIPO, DFFE) — GI, BSA, legal/conservation status
4. **Internal dossier / editorial content** — used only when 1–3 are silent. Always marked `"source": "internal"` in provenance metadata, never presented as independently verified.

## Rules
- Every structured fact in `plant_registry.json` must carry `source` and `verified_at`.
- If no source can be found, the field is marked `"unverified"` — never filled with plausible-sounding but unchecked text.
- When a fact changes, the old value moves to a `history` array. Nothing is silently overwritten.
- The scraper bot follows this same hierarchy for all pillar content and must write `source_urls` and `verified_at` on every entry.
- `24 Plants_audited.docx` is the human-readable decision ledger — the "why." The JSON files are the machine source — the "what." They are never merged into one file.

## Editorial Writing Constraints (Pillar Articles)

To keep articles reading as genuinely human-written rather than detectably AI-generated, every pillar article must follow these rules:

1. **No em dashes (—), ever.** Use a comma, a period and new sentence, or parentheses instead.
2. **No "not just X, but Y" constructions.**
3. **No triplet lists used as a rhetorical device** (e.g. "X, Y, and Z" repeated as a stylistic pattern rather than because three specific things are genuinely being listed).
4. **No throat-clearing transitions**: "It's worth noting that," "Importantly," "That said," "Taken together," "Read together."
5. **No vague intensifiers as filler**: "significantly," "substantially," "genuinely," "meaningfully" — only use these words when tied to an actual number, comparison, or specific claim.
6. **Paragraphs do not need a tidy summary sentence at the end.** Stop when the point is made.
7. **No over-signposting structure** ("The first study... The second study... Together, these...").
8. **Vary sentence length and rhythm deliberately** — avoid long runs of similarly-structured, similarly-balanced sentences.
9. **Vary paragraph openers across articles** — don't start every article's first sentence with the same grammatical shape.
10. **Hedging words** ("may suggest," "could indicate," "appears to") should be used only when the source itself is genuinely uncertain, not as a reflexive softening pattern.

These rules apply to every article added to any `pillars/[slug].json` file, checked by re-reading the draft against this list before finalizing.

## Language Standard

All pillar articles, and all site copy generally, must be written in UK English (South African usage). This means:
- "colour," "favour," "organisation," "recognise," "centre," "programme," "analyse," "modelling" (not the US "color," "favor," "organization," "recognize," "center," "program," "analyze," "modeling")
- "-ise" endings preferred over "-ize" (e.g. "recognise," "characterise," "prioritise")
- South African-specific terms retained where relevant and accurate (e.g. "veld," "fynbos," "muti," "township," provincial names)
- Dates in day-month-year order (e.g. "18 July 2026," not "July 18, 2026")

## Per-Category Guidelines

**Health and Wellness**
- Describe what studies found, not what the plant "does" or "treats." Use "research examined," "found evidence for," never "cures," "treats," "proven to."
- Every article must include a line noting this is not medical advice, and that individuals should consult a healthcare professional before using any plant medicinally.
- Refresh priority: high. Check for newer research every 3-4 months given how fast clinical literature moves.

**Innovation**
- Focus on process and mechanism (what was actually done, what stage of development it represents), not speculative future claims ("could revolutionize...").
- Distinguish clearly between in vitro/preclinical findings and human clinical trials. Never blur the two.
- Refresh priority: medium, every 4-6 months.

**Indigenous Knowledge**
- Never claim ownership of traditional knowledge on behalf of the registry or any commercial entity. Attribute to specific named communities where documented, not a generic "indigenous peoples."
- Do not casually describe sacred, ceremonial, or restricted-knowledge uses in the same tone as general folk-medicine facts. If a source signals something is sensitive, treat it with more caution, not less.
- Refresh priority: low. This content is historically stable; refresh mainly when new academic documentation emerges, not on a fixed schedule.

**People**
- Centre real, named places and communities where documented. Avoid generic phrases like "local communities" when a specific town, region, or cooperative is known.
- Do not romanticise hardship or poverty. State economic facts plainly (income figures, employment numbers) without embellishing the human-interest angle.
- Refresh priority: low-medium, every 6 months.

**Agronomy**
- Be specific about growing conditions, cycles, and regions. Avoid vague claims like "grows well in South Africa."
- Distinguish wild harvest from cultivation clearly every time, since this affects both sustainability and commercial framing.
- Refresh priority: low. Agronomic facts change slowly; refresh mainly when new cultivation research is published.

**Legislation**
- Always distinguish between what is legally enacted/in force versus what is proposed, pending, or aspirational. Use precise tense ("has secured," not "is set to secure" unless genuinely future).
- Name the specific legal instrument or agreement (Act, EPA, GI registration) rather than vague references to "protections."
- Refresh priority: high, every 3 months, since legal status can change and outdated legal claims carry real reputational risk.

**Projects**
- Only include projects with a verifiable, dated source. Avoid describing internal SABR initiatives here unless factually distinct from third-party industry projects.
- Refresh priority: medium-high, every 3-4 months.

**Intelligence**
- Frame market/trade findings as observations from named sources, not as investment advice or predictions. Avoid language that could be read as a recommendation to buy, sell, or invest.
- Refresh priority: highest, every 2-3 months, since trade and tariff conditions shift quickly.

## Knowledge Equity & Badge System

The registry does not rank knowledge systems. Peer-reviewed science, natural/traditional medicine practice, and indigenous community knowledge are treated as equally legitimate, differently-sourced forms of truth. No article may imply traditional or indigenous knowledge is "unproven" pending scientific validation, nor imply peer-reviewed findings are inherently superior.

Every factual claim in an article carries one badge, denoting its source type, not its credibility:
- 🟢 Natural / traditional medicine practice
- 🟡 Industry, trade, or regulatory fact
- 🟠 Indigenous knowledge
- 🩵 Peer-reviewed / clinical research

Writing rules:
- Describe traditional and indigenous knowledge using practice language ("has long been used for," "traditional healers apply this to"), not efficacy language ("this treats," "this cures"), regardless of how well-established the practice is.
- Describe clinical findings using measured-outcome language ("a trial found," "research demonstrated"), and never imply this makes the finding more "true" than a traditional counterpart, only more specifically evidenced in that particular way.
- Never frame traditional or indigenous knowledge as something science is now "discovering," "confirming," or "catching up to." State both as parallel, independently valid observations.
- Big Pharma, multinational pharmaceutical framing, or "the West/science is only now realising what traditional healers always knew" narratives are both to be avoided. Neither elevates one system by diminishing the other implicitly.

## Knowledge Equity & Badge System — Colour Reference

- 🟢 Natural / traditional medicine practice: #1A3A2A (dark green, matches Data Sheet/Health and Wellness tab)
- 🟡 Industry, trade, or regulatory fact: #C7A96E (gold, matches Projects tab)
- 🟠 Indigenous knowledge: #CC6600 (burnt orange, matches Small-scale farm marker on the province map)
- 🩵 Peer-reviewed / clinical research: #C3D6CC (mint, matches People tab)

## Article Generation Protocol

Trigger: "Write all 8 category articles for [Plant Name]."

Process: check existing pillars/[slug].json for duplicates, research each of the 8 categories via live verification per the Source Hierarchy, write each article applying the Editorial Writing Constraints, Per-Category Guidelines, Knowledge Equity rules, and UK/SA English standard, assign the correct badge, output as a complete pillars/[slug].json file ready to paste in.
