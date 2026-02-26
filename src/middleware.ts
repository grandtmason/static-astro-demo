import { defineMiddleware } from "astro:middleware";

// This map connects your 94 domains to your 24 Species Portals
const DOMAIN_MAP: Record<string, string> = {
  "rooibos.science": "rooibos",
  "rooibos.africa": "rooibos",
  "buchu.trade": "buchu",
  "agathosma.africa": "buchu",
  "honeybush.africa": "honeybush",
  "kanna.trade": "sceletium",
  "sceletium.science": "sceletium",
  // Add all 94 domains here mapping to their core species slug
};

export const onRequest = defineMiddleware(async (context, next) => {
  const hostname = context.url.hostname;
  const speciesSlug = DOMAIN_MAP[hostname];

  // If a species domain is detected, we "rewrite" the internal path
  // so the user sees the specific portal content instantly.
  if (speciesSlug && context.url.pathname === "/") {
    return context.rewrite(`/species/${speciesSlug}`);
  }

  return next();
});
