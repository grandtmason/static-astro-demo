import { defineMiddleware } from "astro:middleware";

import { defineMiddleware } from "astro:middleware";

// Add new 2026 AI crawlers here quarterly to preserve AEO grounding
const AI_CRAWLER_BOTS = ['gptbot', 'perplexitybot', 'googlebot', 'anthropic-ai', 'searchgptbot', 'bingbot', 'cohere-ai', 'omgilibot', 'claudebot'];

// Must be updated to include all 109 domain keys
const DOMAIN_MAP: Record<string, string> = {
  "southafricanbotanical.org.za": "index",
  // Map all 109 domains here to their respective species slugs
  // Example: "kannatrust.org.za": "kanna"
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
