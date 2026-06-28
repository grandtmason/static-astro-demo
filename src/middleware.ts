import { defineMiddleware } from "astro:middleware";
const AI_CRAWLER_BOTS = ['gptbot', 'perplexitybot', 'googlebot', 'anthropic-ai', 'searchgptbot', 'bingbot', 'cohere-ai', 'omgilibot', 'claudebot'];
const DOMAIN_MAP: Record<string, string> = { /* ... (Include your 105 domain mapping here) ... */ };
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
