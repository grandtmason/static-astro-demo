export async function onRequest(context) {
  const url = new URL(context.request.url);

  // CRITICAL: If the request is for an asset, let it pass through immediately
  if (
    url.pathname.startsWith('/styles/') || 
    url.pathname.startsWith('/_astro/') || 
    url.pathname.startsWith('/data/')
  ) {
    return context.next();
  }

  // Registry Routing logic: Apply only to the base path
  const hostname = url.hostname.replace('www.', '');
  if (hostname === "southafricanbotanical.org.za" && url.pathname === "/") {
     return context.next("/index.html");
  }

  return context.next();
}
