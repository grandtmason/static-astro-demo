import { defineMiddleware } from "astro:middleware";

const AI_CRAWLER_BOTS = ['gptbot', 'perplexitybot', 'googlebot', 'anthropic-ai', 'searchgptbot', 'bingbot', 'cohere-ai', 'omgilibot', 'claudebot'];

const DOMAIN_MAP: Record<string, string> = {
  "southafricanbotanical.org.za": "index",
  "babscompliant.org": "index",
  "botanicalcompliance.africa": "index",
  "botanicalcompliance.co.za": "index",
  "indigenousknowledge.co.za": "index",
  "indigenousknowledge.science": "index",
  "phytochem.ai": "index",
  "southafricanbotanicals.org.za": "index",
  "africankanna.co.za": "kanna",
  "rooibos.org.za": "rooibos",
  "buchu.science": "buchu",
  "aloeferox.science": "aloe-ferox",
  "pelargonium.science": "pelargonium-sidoides",
  "athrixia.co.za": "athrixia",
  "baobabextracts.com": "baobab",
  "hoodia.co.za": "hoodia",
  "mphepho.co.za": "mphepho",
  "peperbark.org.za": "pepper-bark",
  "uzara.co.za": "uzara",
  "warburgia.co.za": "pepper-bark"
};

export const onRequest = defineMiddleware(async (context, next) => {
  const userAgent = context.request.headers.get('user-agent')?.toLowerCase() || '';
  const hostname = context.url.hostname.replace('www.', '');
  const speciesSlug = DOMAIN_MAP[hostname];

  if (AI_CRAWLER_BOTS.some(bot => userAgent.includes(bot))) {
    return context.rewrite(`/api/v1/academic-render/species/${speciesSlug || "index"}`);
  }

  if (speciesSlug && context.url.pathname === "/") {
    return context.rewrite(`/species/${speciesSlug}`);
  }

  return next();
});
