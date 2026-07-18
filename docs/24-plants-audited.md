# 24 Plants — Audit Ledger

**Purpose:** This is the human-readable decision record for the South African Botanical Registry's 24 species. It captures *why* each fact in `plant_registry.json` and `common_names.json` is what it is — sources checked, corrections made, and open items still needing a decision. The JSON files are the machine source ("what"); this document is the reasoning trail ("why"), per `SOURCE_POLICY.md`.

**Audit method:** Live web verification via Claude in Chrome, cross-referencing internal dossier content (`24_Plants.docx`, `24_plants_ik_knowledge.docx`, `SUMMARY_FOR_WEBSITE_24_PLANTS.docx`) against SANBI PlantZAfrica, Google Scholar-indexed peer-reviewed sources, and government/regulatory sources, per the hierarchy in `SOURCE_POLICY.md`.

**Date of audit:** 2026-07-18
**Auditor:** G. Mason, with Claude (live browser verification)

---

## 1. Acacia (Vachellia karroo)
**Sources checked:** SANBI (`pza.sanbi.org/vachellia-karroo`); MDPI *Plants* 2025 (Msimango et al.); ScienceDirect 2026 (More et al.)
**Confirmed:** Family Fabaceae; "Cape Gum"/gum-arabic-substitute history (direct SANBI confirmation); antimicrobial activity vs. *S. aureus* (two real peer-reviewed sources).
**Corrections made:** Native region rewritten using SANBI's exact distribution wording. GI/BSA status corrected — was "Protected"/"N/A", now accurately reflects "no formal GI or BSA; NEMBA/BABS framework applies to commercial extracts." Organic status corrected from "Yes" to "No certified organic production."
**Open flag:** SANBI lists Zulu name as "umuNga," current site uses "umNgcamplazi" — decision made to defer to SANBI per source policy (not yet applied to `common_names.json`).

## 2. African Ashwagandha (Withania somnifera)
**Sources checked:** SANBI (`pza.sanbi.org/withania-somnifera`); NIH/PMC review 2021 (Speers et al., 363 citations); MDPI *Nutrients* 2024 RCT (Pandit et al.)
**Confirmed:** Family Solanaceae; cortisol/withanolide clinical claims strongly supported.
**Corrections made:** Native region softened — SANBI is explicit the species is *not* South-Africa-exclusive; range spans Mediterranean through tropical Africa to India/China. Wording updated to reflect this honestly.
**Open flag:** Add Xhosa name "ubuvuma" (SANBI-confirmed, not currently in `common_names.json`).

## 3. African Ginger (Siphonochilus aethiopicus)
**Sources checked:** SANBI (`pza.sanbi.org/siphonochilus-aethiopicus`); Adebayo et al., *J. Ethnopharmacology* 2021 (38 citations); Fouché & van Rooyen 2025
**Confirmed:** Family Zingiberaceae; Zulu names "indungulo, isiphephetho" exact match; anti-inflammatory activity peer-reviewed.
**Corrections made:** Conservation wording strengthened to match SANBI's own stark phrasing ("harvested to a point just short of total extinction").

## 4. African Potato (Hypoxis hemerocallidea)
**Sources checked:** SANBI (`pza.sanbi.org/hypoxis-hemerocallidea`); Drewes et al. 2008 (94 citations); Csikós et al., *Molecules* 2021 (174 citations)
**Confirmed:** Family Hypoxidaceae; hypoxoside→rooperol/BPH clinical relevance strongly supported.
**Decision made:** SANBI states the common name is a botanical misnomer ("wrongly called African potato"). **Decision: retain "African Potato" as primary name** for commercial/market-recognition reasons; added a transparency note (`naming_note` field) acknowledging the correction rather than hiding it.

## 5. Aloe Ferox
**Sources checked:** SANBI (`pza.sanbi.org/aloe-ferox`); Knapp, TRAFFIC 2006 (16 citations); Brendler 2023; EMA herbal monograph (2006/2016)
**Confirmed:** Family Asphodelaceae; gum/export trade well-documented.
**Corrections made:** "European Pharmacopoeia monograph holder" claim corrected — it is in fact an **EU Herbal Monograph via the European Medicines Agency (EMA)**, not the European Pharmacopoeia specifically. Wording updated with real citation.

## 6. Artemisia Afra
**Sources checked:** SANBI (`pza.sanbi.org/artemisia-afra`); Viljoen et al. 2006 (75 citations)
**Confirmed:** Family Asteraceae; Xhosa "umhlonyane," Zulu "mhlonyane," Tswana "lengana" all exact matches. Antimicrobial/respiratory traditional use confirmed. No corrections needed.

## 7. Athrixia (Bush Tea)
**Sources checked:** SANBI (`pza.sanbi.org/athrixia-phylicoides`); Mavundza et al. 2007; Tshivhandekano et al. 2014
**Confirmed:** Antioxidant/antimicrobial activity peer-reviewed.
**Major open flag — largest mismatch found in the audit:** SANBI's common name is "**Bushman's Tea**" (Boesmanstee), with isiZulu names "**Icholocholo, itshelo, umthsanelo**" — entirely different from the site's current "Bush Tea"/"Magoebaskloof Tea" and Zulu "isihaqa." **Not yet resolved** — flagged for deliberate editorial decision, SANBI naming not yet applied.

## 8. Baobab (Adansonia digitata)
**Sources checked:** SANBI (`pza.sanbi.org/adansonia-digitata`); Kamatou et al. 2011 (400 citations); Buchmann et al. 2010 (251 citations)
**Confirmed:** Family Malvaceae; Venda "muvhuyu" exact match; **EU Novel Food approval date (27 June 2008) precisely confirmed**, matching internal dossier exactly. No corrections needed beyond adding the citation.

## 9. Buchu (Agathosma betulina)
**Sources checked:** SANBI (`pza.sanbi.org/agathosma-crenulata`, `/information-library/agathosma-betulina`); Biénabe et al. (WIPO 2009); Docrat et al. 2024; SA Government media statement 2021; DFFE Gazette; Elsenburg Annual Report 2024/2025
**Confirmed:** Khoi origin of the word "buchu" itself; traditional kidney/UTI/rheumatism uses.
**Correction made — resolved via extended search:** GI status was overstated as "GI Pending." Multiple government/institutional sources confirm **no GI currently exists** — a 2021 Western Cape Premier statement frames it as a future aspiration only, and 2026 funding reports show Buchu Association activity with no GI reference. Status corrected to reflect this clearly.

## 10. Bulbine (Bulbine frutescens)
**Sources checked:** SANBI (`pza.sanbi.org/bulbine-frutescens`); Pather et al. 2011 & 2012 (60 and 36 citations)
**Confirmed:** Family Asphodelaceae; wound-healing/burn-jelly claims strongly confirmed in vivo.
**Open flag:** Additional Zulu name "ingelwane" found in a 2011 study, not currently in `common_names.json` — candidate addition, not a replacement.

## 11. Cape Chamomile (Eriocephalus punctulatus)
**Sources checked:** Sandasi et al. 2023 (*SA Herbal Pharmacopoeia*); Mierendorff & Stahl-Biskup 2003 (dedicated blue-oil chemistry paper). No dedicated SANBI page found for this specific species.
**Confirmed:** Deep-blue essential oil / aromatherapy chemistry genuinely well-documented. No corrections needed.

## 12. Devil's Claw (Harpagophytum procumbens)
**Sources checked:** SANBI (`pza.sanbi.org/harpagophytum-procumbens`); Strohbach & Cole 2007; Lavelle 2023
**Confirmed:** Setswana "sengaparile" exact match.
**Correction made:** CITES Appendix II status softened — sources found frame this as an **ongoing advocacy position**, not a confirmed current listing.
**Addition made:** Real San names found and added — "//x'aatataba, tloutaxaba" (previously "not documented").

## 13. Honeybush (Cyclopia genistoides)
**Sources checked:** SANBI (`pza.sanbi.org/cyclopia-genistoides`); McGregor 2024; Karsen et al. 2022
**Confirmed:** Family Fabaceae. Important nuance confirmed: the **Rooibos Benefit Sharing Agreement (RBSA, 2019) is Rooibos-specific** — no separate Honeybush BSA exists, which actually *supports* the site's existing "no formal agreement" wording rather than contradicting it.

## 14. Hoodia (Hoodia gordonii)
**Sources checked:** SANBI (`pza.sanbi.org/hoodia-gordonii`); Wynberg 2010; Vermeylen & Walker 2011
**Confirmed:** Family Apocynaceae. The 2003 CSIR-San Benefit-Sharing Agreement and P57 patent history **strongly and specifically confirmed**, including CSIR's 2003 withdrawal — matches internal dossier closely.

## 15. Kanna (Sceletium tortuosum)
**Sources checked:** SANBI (`pza.sanbi.org/sceletium-tortuosum`); Brendler et al. 2021 (38 citations)
**Confirmed:** Family Aizoaceae; Khoi "kanna" exact match; 17th-century colonial documentation confirmed.
**Correction made:** "SAHPRA regulatory guidance (2013)" claim could not be confirmed as stated. Real regulatory pathway found: standard SAHPRA drug registration procedure, per Brendler et al. Wording softened accordingly.

## 16. Marula (Sclerocarya birrea)
**Sources checked:** SANBI (`pza.sanbi.org/sclerocarya-birrea`); Wynberg et al. 2002 (82 and 18 citations)
**Confirmed:** Family Anacardiaceae; Venda "mufula" exact match. Amarula commercialization/benefit-sharing concerns strongly confirmed, matching dossier framing closely. Minor dialect note: Tsonga "ukanyi" (SANBI) vs. "nkanyi" (site) — not a real conflict.

## 17. Mphepho (Helichrysum odoratissimum)
**Sources checked:** SANBI (`pza.sanbi.org/helichrysum-odoratissimum`); Hutchings, *Alternation* 2007 (38 citations)
**Confirmed:** Family Asteraceae; Xhosa/Zulu "imphepho" exact match. Spiritual/ancestor/purification use strongly confirmed academically. No corrections needed.

## 18. Pelargonium Sidoides
**Sources checked:** SANBI (`pza.sanbi.org/pelargonium-sidoides`); van Niekerk & Wynberg 2012 (43 citations)
**Confirmed:** Family Geraniaceae. African Centre for Biosafety patent challenge against Schwabe's Umckaloabo process **directly and precisely confirmed**.
**Correction made:** "umckaloabo" was incorrectly listed as a Xhosa name — SANBI confirms it is the **German** trade name. Real Xhosa names ("ikubalo, iyeza lesikhali") identified and substituted.

## 19. Pepper Bark (Warburgia salutaris)
**Sources checked:** SANBI (`pza.sanbi.org/warburgia-salutaris`); Senkoro et al., *Scientific Reports* (Nature) 2020 (27 citations); Rasethe et al. 2019 (94 citations)
**Confirmed:** Family Canellaceae; Zulu "isibhaha" exact match. IUCN Red List "Endangered" status precisely confirmed via a Nature-journal source. No corrections needed.

## 20. Rooibos (Aspalathus linearis)
**Sources checked:** SANBI (`pza.sanbi.org/aspalathus-linearis`); Meyer & Naicker, *Research Policy* 2023 (36 citations)
**Confirmed:** Family Fabaceae. GI (2021) and Benefit-Sharing Agreement (2019) status strongly confirmed — genuinely the model case for ethical botanical trade, exactly as the internal dossier framed it. No corrections needed.

## 21. Sutherlandia (Lessertia frutescens)
**Sources checked:** Ndjoubi et al., *Plants* (MDPI) 2025; *SA Herbal Pharmacopoeia* 2023
**Confirmed:** Current accepted name is *Lessertia frutescens* (synonym: *Sutherlandia frutescens*). "Cancer bush"/adaptogenic/immune-modulation claims genuinely well-documented. No corrections needed beyond noting current taxonomy.

## 22. Uzara (Xysmalobium undulatum)
**Sources checked:** SANBI (`pza.sanbi.org/xysmalobium-undulatum`); Sosnowski & Melzig, *Zeitschrift für Phytotherapie* 2017
**Confirmed:** Family Apocynaceae. German Commission E monograph (1990) precisely confirmed via a dedicated academic paper on this exact plant.
**Open flag:** SANBI's primary Zulu name is "iShongwane" — worth checking against current `common_names.json` entry, not yet cross-verified against the live file.

## 23. Wild Olive (Olea europaea subsp. africana)
**Sources checked:** Long, Tilney & Van Wyk, *SA J. Botany* 2010 (72 citations); Msomi & Simelane 2017
**Confirmed:** Oleuropein content and leaf-extract pharmacognosy directly confirmed via dedicated study. No corrections needed.

## 24. Wild Sage (Salvia africana-lutea)
**Sources checked:** SANBI (`pza.sanbi.org/salvia-africana-lutea`); Kamatou et al. 2008 (444 citations); Ezema et al. (dedicated ethnobotany review)
**Confirmed:** Family Lamiaceae.
**Open flag:** SANBI states this species **"is now called Salvia aurea"** — a taxonomic reclassification not yet reflected on-site. Decision needed: update scientific name shown, or note as synonym alongside existing name.

---

## Cross-cutting decisions made during this audit

1. **Source hierarchy adopted:** SANBI PlantZAfrica > peer-reviewed journals > government/regulatory bodies > internal dossier (see `SOURCE_POLICY.md`).
2. **Provenance wrapper adopted** for all `plant_registry.json` fields (`value`/`source`/`source_url`/`verified_at`/`history`) so every fact is traceable and updatable without silent overwrites.
3. **`plant_registry.json` scope clarified:** holds only stable, audited structured facts (native region, stats, protection). Scraper-generated pillar content lives separately, one file per plant, in `src/data/pillars/[slug].json` — deliberately not consolidated into one file, to keep build performance and git history manageable as the scraper's output grows.
4. **African Potato naming:** retained commercially, misnomer transparently footnoted rather than corrected away.

## Outstanding items requiring a decision (not yet applied to live JSON files)

- [ ] Athrixia — full common-name/naming-origin replacement per SANBI (biggest discrepancy found)
- [ ] Acacia — Zulu name SANBI correction ("umuNga")
- [ ] African Ashwagandha — add Xhosa "ubuvuma"
- [ ] Bulbine — add Zulu "ingelwane"
- [ ] Uzara — verify Zulu name against SANBI's "iShongwane"
- [ ] Wild Sage — decide on *Salvia aurea* taxonomic update
- [ ] Kigelia — confirm whether this becomes species #25 (appeared in domain/file-tree docs but not in the current 24-species set)

---
*This document should be updated whenever `plant_registry.json` is materially revised, so the "why" stays in sync with the "what."*
