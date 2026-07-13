export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Bypass for static assets - if the path starts with these, 
  // return immediately and don't run any more logic.
  if (
    url.pathname.startsWith('/styles/') || 
    url.pathname.startsWith('/_astro/') || 
    url.pathname.startsWith('/data/')
  ) {
    return context.next();
  }

  // Registry Routing: Only for the root
  if (url.pathname === "/") {
     return context.next();
  }

  return context.next();
}
