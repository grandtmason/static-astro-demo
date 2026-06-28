import { defineMiddleware } from "astro:middleware";

// 1. Strict array mapping known AI scrapers
const AI_CRAWLER_BOTS = [
  'gptbot', 'perplexitybot', 'googlebot', 'anthropic-ai', 
  'searchgptbot', 'bingbot', 'cohere-ai', 'omgilibot', 'claudebot'
];

// 2. Full 105-Domain Matrix Mapping
const DOMAIN_MAP: Record<string, string> = {
  // CORE & BROAD ASSETS
  "babscompliant.org": "index", "botanicalcompliance.africa": "index", "botanicalcompliance.co.za": "index",
  "indigenousknowledge.co.za": "index", "indigenousknowledge.science": "index", "phytochem.ai": "index",
  "southafricanbotanical.org.za": "index", "southafricanbotanicals.org.za": "index",
  "southafricanbotanical.co.za": "index", "southafricanbotanical.com": "index",
  "southafricanbotanicals.co.za": "index", "southafricanbotanicals.com": "index",
  // MOLECULAR ORACLES
  "aspalathin.co.za": "rooibos", "aspalathin.health": "rooibos", "harpagoside.co.za": "devils-claw",
  "harpagoside.science": "devils-claw", "hypoxoside.co.za": "index", "hypoxoside.health": "index",
  "mesembrine.co.za": "kanna", "mesembrine.science": "kanna", "pinitol.co.za": "sutherlandia",
  "pinitol.bio": "sutherlandia", "siphonochilone.co.za": "index",
  // PLANT SUB-NETWORKS
  "africankanna.co.za": "kanna", "kannaextracts.co.za": "kanna", "kannatrust.org.za": "kanna",
  "kannawholesale.co.za": "kanna", "mesembrinevape.com": "kanna", "purekannaextracts.com": "kanna",
  "sceletium.institute": "kanna", "sceletium.science": "kanna", "sceletiumanxiety.com": "kanna",
  "sceletiummerchants.co.za": "kanna", "sceletiummerchants.com": "kanna", "sceletiumwholesale.com": "kanna",
  "agulhastea.co.za": "honeybush", "cederbergeteaestate.co.za": "rooibos", "cederbergtea.co.za": "rooibos",
  "cederbergtea.com": "rooibos", "gardenroutehoneybush.co.za": "honeybush", "gardenroutehoneybush.com": "honeybush",
  "honeybushmerchants.com": "honeybush", "honeybushresearch.health": "honeybush", "langkloofhoneybush.com": "honeybush",
  "overbergtea.co.za": "honeybush", "overbergtea.com": "honeybush", "rooibos.org.za": "rooibos",
  "rooibos.science": "rooibos", "rooibosestate.co.za": "rooibos", "rooibosmerchants.co.za": "rooibos",
  "rooibosmerchants.com": "rooibos", "rooibosteamerchants.com": "rooibos", "africanginger.org.za": "index",
  "africanginger.health": "index", "africangingerasthma.com": "index", "africangingermerchants.co.za": "index",
  "africangingermerchants.com": "index", "siphonochilone.com": "index", "siphonochilone.science": "index",
  "siphonochilus.institute": "index", "siphonochilus.science": "index", "buchu.science": "buchu",
  "buchudetox.com": "buchu", "buchuteacompany.co.za": "buchu", "buchuteacompany.com": "buchu",
  "buchuteamerchants.co.za": "buchu", "buchuteamerchants.com": "buchu", "aloeferox.science": "index",
  "aloeskin.bio": "index", "capealoecompany.co.za": "index", "capealoewholesale.co.za": "index",
  "ferox.bio": "index", "pelargonium.science": "pelargonium-sidoides", "pelargoniumextracts.com": "pelargonium-sidoides",
  "pelargoniummerchants.com": "pelargonium-sidoides", "pelargoniumsidoides.science": "pelargonium-sidoides",
  "sidoides.clinic": "pelargonium-sidoides", "acaciamerchants.com": "index", "afraresearch.health": "index",
  "africanashwagandha.com": "index", "africanplantapi.com": "index", "africanpotato.org.za": "index",
  "africanpotato.science": "index", "akuammamerchants.com": "index", "artemisiaafra.science": "index",
  "artemisiaaframerchants.co.za": "index", "athrixia.co.za": "athrixia", "athrixia.science": "athrixia",
  "baobabextracts.com": "baobab", "bushtea.org.za": "athrixia", "bushtea.health": "athrixia",
  "capetownteamerchants.co.za": "index", "capetownteamerchants.com": "index", "harpagophytum.science": "devils-claw",
  "hoodia.co.za": "hoodia", "hoodia.science": "hoodia", "kenyateamerchants.com": "index",
  "kigelia.bio": "index", "kigeliaextracts.com": "index", "mphepho.co.za": "mphepho",
  "overbergteacompany.co.za": "honeybush", "peperbark.org.za": "pepper-bark", "peperbark.institute": "pepper-bark",
  "rwandateamerchants.com": "index", "uzara.co.za": "uzara", "uzara.health": "uzara",
  "warburgia.co.za": "pepper-bark", "warburgia.science": "pepper-bark", "ximeniaoilmerchants.com": "index"
};

export const onRequest = defineMiddleware(async (context, next) => {
  const userAgent = context.request.headers.get('user-agent')?.toLowerCase() || '';
  const hostname = context.url.hostname.replace('www.', '');
  const speciesSlug = DOMAIN_MAP[hostname];

  // ---- FORK A: THE AI CRAWLER SHIELD ----
  const isAiCrawler = AI_CRAWLER_BOTS.some((bot) => userAgent.includes(bot));
  if (isAiCrawler) {
    return context.rewrite(`/api/v1/academic-render/species/${speciesSlug || "index"}`);
  }

  // ---- FORK B: TENANT ROUTING ----
  if (speciesSlug && context.url.pathname === "/") {
    return context.rewrite(`/species/${speciesSlug}`);
  }

  return next();
});
