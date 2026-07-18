# Plant Registry Updates — Pending Review

Facts discovered during pillar article research that should be reviewed and applied to plant_registry.json. Each entry stays here until manually confirmed and moved into the registry, then is marked applied.

---

## [ ] Kanna — Protection
**Discovered:** 2026-07-19, during Wellness/Legislation article research
**Current registry value:** gi_status/bsa_status marked unconfirmed
**New finding:** SANBI explicitly states "tremendous conservation pressure on wild harvesting." US patent US12059404B2 exists covering mesembrenol/mesembranol with no visible benefit-sharing confirmation.
**Suggested update:** Add conservation-pressure language to protection.wild_harvest field; flag bsa_status as still unconfirmed pending patent benefit-sharing review.
**Source:** SANBI PlantZAfrica; Google Patents US12059404B2

---

## [ ] African Ginger — Protection
**Discovered:** 2026-07-19, during Agronomy/Legislation article research
**Current registry value:** Conservation status described in general internal-sourced terms
**New finding:** SANBI's Red List of South African Plants formally assesses Siphonochilus aethiopicus as Critically Endangered "under criterion A." DFFE has issued at least one confirmed bioprospecting permit specifically authorising cultivation and trade to local and international markets, plus a separate Environmental and Social Impact Assessment dated 30 May 2025 addressing wild harvesting and cultivation regulation.
**Suggested update:** Update protection.wild_harvest or a conservation-status field with the precise "Critically Endangered (SANBI Red List, criterion A)" language rather than general phrasing. Add DFFE permit and EIA references to the gi_status or bsa_status fields, since these represent formal government regulatory documents rather than internal-sourced text.
**Source:** SANBI Red List of South African Plants, redlist.sanbi.org; Department of Forestry, Fisheries and the Environment, bioprospecting permits and Environmental and Social Impact Assessment (30 May 2025)

---
