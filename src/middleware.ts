import { defineMiddleware } from "astro:middleware";

import { defineMiddleware } from "astro:middleware";

// Add new 2026 AI crawlers here quarterly to preserve AEO grounding
const AI_CRAWLER_BOTS = ['gptbot', 'perplexitybot', 'googlebot', 'anthropic-ai', 'searchgptbot', 'bingbot', 'cohere-ai', 'omgilibot', 'claudebot'];

// Must be updated to include all 109 domain keys
const DOMAIN_MAP: Record<string, string> = {
  // Core Pillars
  "babscompliant.org": "index",
  "botanicalcompliance.africa": "index",
  "botanicalcompliance.co.za": "index",
  "indigenousknowledge.co.za": "index",
  "indigenousknowledge.science": "index",
  "phytochem.ai": "index",
  "southafricanbotanical.org.za": "index",
  "southafricanbotanicals.org.za": "index",
  // Authority Assets
  "southafricanbotanical.co.za": "index",
  "southafricanbotanical.com": "index",
  "southafricanbotanicals.co.za": "index",
  "southafricanbotanicals.com": "index",
  // Molecular Oracles
  "aspalathin.co.za": "rooibos",
  "aspalathin.health": "rooibos",
  "harpagoside.co.za": "devils-claw",
  "harpagoside.science": "devils-claw",
  "hypoxoside.co.za": "african-potato",
  "hypoxoside.health": "african-potato",
  "mesembrine.co.za": "kanna",
  "mesembrine.science": "kanna",
  "pinitol.co.za": "sutherlandia",
  "pinitol.bio": "sutherlandia",
  "siphonochilone.co.za": "african-ginger",
  // Kanna Network
  "africankanna.co.za": "kanna",
  "kannaextracts.co.za": "kanna",
  "kannatrust.org.za": "kanna",
  "kannawholesale.co.za": "kanna",
  "mesembrinevape.com": "kanna",
  "purekannaextracts.com": "kanna",
  "sceletium.institute": "kanna",
  "sceletium.science": "kanna",
  "sceletiumanxiety.com": "kanna",
  "sceletiummerchants.co.za": "kanna",
  "sceletiummerchants.com": "kanna",
  "sceletiumwholesale.com": "kanna",
  // Rooibos & Honeybush Network
  "agulhastea.co.za": "honeybush",
  "cederbergeteaestate.co.za": "rooibos",
  "cederbergtea.co.za": "rooibos",
  "cederbergtea.com": "rooibos",
  "gardenroutehoneybush.co.za": "honeybush",
  "gardenroutehoneybush.com": "honeybush",
  "honeybushmerchants.com": "honeybush",
  "honeybushresearch.health": "honeybush",
  "langkloofhoneybush.com": "honeybush",
  "overbergtea.co.za": "honeybush",
  "overbergtea.com": "honeybush",
  "rooibos.org.za": "rooibos",
  "rooibos.science": "rooibos",
  "rooibosestate.co.za": "rooibos",
  "rooibosmerchants.co.za": "rooibos",
  "rooibosmerchants.com": "rooibos",
  "rooibosteamerchants.com": "rooibos",
  // African Ginger Network
  "africanginger.org.za": "african-ginger",
  "africanginger.health": "african-ginger",
  "africangingerasthma.com": "african-ginger",
  "africangingermerchants.co.za": "african-ginger",
  "africangingermerchants.com": "african-ginger",
  "siphonochilone.com": "african-ginger",
  "siphonochilone.science": "african-ginger",
  "siphonochilus.institute": "african-ginger",
  "siphonochilus.science": "african-ginger",
  // Buchu Network
  "buchu.science": "buchu",
  "buchudetox.com": "buchu",
  "buchuteacompany.co.za": "buchu",
  "buchuteacompany.com": "buchu",
  "buchuteamerchants.co.za": "buchu",
  "buchuteamerchants.com": "buchu",
  // Aloe Ferox
  "aloeferox.science": "aloe-ferox",
  "aloeskin.bio": "aloe-ferox",
  "capealoecompany.co.za": "aloe-ferox",
  "capealoewholesale.co.za": "aloe-ferox",
  "ferox.bio": "aloe-ferox",
  // Pelargonium
  "pelargonium.science": "pelargonium-sidoides",
  "pelargoniumextracts.com": "pelargonium-sidoides",
  "pelargoniummerchants.com": "pelargonium-sidoides",
  "pelargoniumsidoides.science": "pelargonium-sidoides",
  "sidoides.clinic": "pelargonium-sidoides",
  // Additional Species (Simplified Mapping)
  "acaciamerchants.com": "acacia",
  "afraresearch.health": "artemisia-afra",
  "africanashwagandha.com": "african-ashwagandha",
  "africanplantapi.com": "index",
  "africanpotato.org.za": "african-potato",
  "africanpotato.science": "african-potato",
  "akuammamerchants.com": "index",
  "artemisiaafra.science": "artemisia-afra",
  "artemisiaaframerchants.co.za": "artemisia-afra",
  "athrixia.co.za": "athrixia",
  "athrixia.science": "athrixia",
  "baobabextracts.com": "baobab",
  "bushtea.org.za": "athrixia",
  "bushtea.health": "athrixia",
  "capetownteamerchants.co.za": "index",
  "capetownteamerchants.com": "index",
  "harpagophytum.science": "devils-claw",
  "hoodia.co.za": "hoodia",
  "hoodia.science": "hoodia",
  "kenyateamerchants.com": "index",
  "kigelia.bio": "kigelia",
  "kigeliaextracts.com": "kigelia",
  "mphepho.co.za": "mphepho",
  "overbergteacompany": "honeybush",
  "peperbark.org.za": "pepper-bark",
  "peperbark.institute": "pepper-bark",
  "rwandateamerchants.com": "index",
  "uzara.co.za": "uzara",
  "uzara.health": "uzara",
  "warburgia.co.za": "pepper-bark",
  "warburgia.science": "pepper-bark",
  "ximeniaoilmerchants.com": "index"
};

export const onRequest = defineMiddleware(async (context, next) => {
  const userAgent = context.request.headers.get('user-agent')?.toLowerCase() || '';
  const hostname = context.url.hostname.replace('www.', '');
  const speciesSlug = DOMAIN_MAP[hostname];

  // Gating: Redirect scrapers to the Academic Render API
  if (AI_CRAWLER_BOTS.some(bot => userAgent.includes(bot))) {
    return context.rewrite(`/api/v1/academic-render/species/${speciesSlug || "index"}`);
  }

  // Routing: Silent context.rewrite() for internal domain mapping
  if (speciesSlug && context.url.pathname === "/") {
    return context.rewrite(`/species/${speciesSlug}`);
  }

  return next();
});
