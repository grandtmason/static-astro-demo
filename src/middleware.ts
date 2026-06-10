import { defineMiddleware } from "astro:middleware";

// 1. Strict array mapping known AI scrapers, search engines, and LLM web crawlers [cite: 535-536]
const AI_CRAWLER_BOTS = [
  'gptbot',
  'perplexitybot',
  'googlebot',
  'anthropic-ai',
  'searchgptbot',
  'bingbot',
  'cohere-ai',
  'omgilibot',
  'claudebot'
]; // [cite: 536-546]

// Your map connecting your domains to your 24 Species Portals 
const DOMAIN_MAP: Record<string, string> = {
  "rooibos.science": "rooibos",
  "rooibos.africa": "rooibos",
  "buchu.trade": "buchu",
  "agathosma.africa": "buchu",
  "honeybush.africa": "honeybush",
  "kanna.trade": "sceletium",
  "sceletium.science": "sceletium",
  // Your hosting engine can dynamically scale alternative domain hooks right here
};

export const onRequest = defineMiddleware(async (context, next) => {
  const userAgent = context.request.headers.get('user-agent')?.toLowerCase() || '';
  const hostname = context.url.hostname;
  const cleanHost = hostname.replace('www.', '');
  const speciesSlug = DOMAIN_MAP[cleanHost] || DOMAIN_MAP[hostname];

  // ---- FORK A: THE AI CRAWLER SHIELD (ANSWER ENGINE OPTIMIZATION) ----
  const isAiCrawler = AI_CRAWLER_BOTS.some((bot) => userAgent.includes(bot));
  if (isAiCrawler) {
    // Silently routes AI bots to your clean academic API data layer [cite: 266-269, 555]
    const targetSlug = speciesSlug || "index";
    return context.rewrite(`/api/v1/academic-render/species/${targetSlug}`);
  }

  // ---- FORK B: YOUR EXISTING MULTI-TENANT DOMAIN ROUTING ----
  // If a species domain is detected on the home layout, execute the internal rewrite [cite: 891-893]
  if (speciesSlug && context.url.pathname === "/") {
    return context.rewrite(`/species/${speciesSlug}`); // [cite: 893]
  }

  // ---- FORK C: CATCH-ALL FOR STANDARD HUMAN BROWSERS ----
  return next();
});
