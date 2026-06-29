import { defineMiddleware } from "astro:middleware";

// Convert to Set for faster lookups (O(1) complexity)
const AI_CRAWLER_BOTS = new Set(['gptbot', 'perplexitybot', 'googlebot', 'anthropic-ai', 'searchgptbot', 'bingbot', 'cohere-ai', 'omgilibot', 'claudebot']);

const DOMAIN_MAP: Record<string, string> = { /* ... 105 domains ... */ };

export const onRequest = defineMiddleware(async (context, next) => {
  const userAgent = (context.request.headers.get('user-agent') || '').toLowerCase();
  
  // Quick check: if the UA contains any of the bots, run the check
  const isBot = Array.from(AI_CRAWLER_BOTS).some(bot => userAgent.includes(bot));

  const hostname = context.url.hostname.replace('www.', '');
  const speciesSlug = DOMAIN_MAP[hostname];

  // Logic 1: Bot Handling
  if (isBot) {
    return context.rewrite(`/api/v1/academic-render/species/${speciesSlug || "index"}`);
  }

  // Logic 2: Domain Routing
  if (speciesSlug && context.url.pathname === "/") {
    return context.rewrite(`/species/${speciesSlug}`);
  }

  return next();
});
