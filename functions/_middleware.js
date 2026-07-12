export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // 1. CRITICAL: Bypass routing for static assets
  // If the request is for a file in /styles/, /_astro/, or /data/, 
  // just serve the file directly.
  if (
    url.pathname.startsWith('/styles/') || 
    url.pathname.startsWith('/_astro/') || 
    url.pathname.startsWith('/data/')
  ) {
    return next();
  }

  // 2. Registry Routing logic
  const hostname = url.hostname.replace('www.', '');
  
  if (hostname === "southafricanbotanical.org.za" && url.pathname === "/") {
     return context.next("/index.html");
  }

  return next();
}
