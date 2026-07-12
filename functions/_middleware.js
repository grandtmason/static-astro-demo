// functions/[[path]].js
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const hostname = url.hostname.replace('www.', '');
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  
  // Your Domain Mapping (keep this updated for all 109 domains)
  const DOMAIN_MAP = {
    "southafricanbotanical.org.za": "index",
    "africankanna.co.za": "kanna",
    // ... add all 109 domains here
  };

  const speciesSlug = DOMAIN_MAP[hostname];
  const AI_CRAWLER_BOTS = ['gptbot', 'googlebot', 'bingbot']; // etc

  // 1. Bot Gating: Redirect scrapers to academic render
  if (AI_CRAWLER_BOTS.some(bot => userAgent.includes(bot))) {
    const target = speciesSlug === "index" 
      ? "/index.html" 
      : `/api/v1/academic-render/species/${speciesSlug}`;
    return fetch(new URL(target, request.url));
  }

  // 2. Domain Routing: Rewrite root to species page
  if (speciesSlug && speciesSlug !== "index" && url.pathname === "/") {
    return fetch(new URL(`/species/${speciesSlug}/index.html`, request.url));
  }

  return next();
}
