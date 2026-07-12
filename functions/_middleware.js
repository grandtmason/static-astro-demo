export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // 1. Force correct CSS content type so the browser applies it
  if (url.pathname.endsWith('.css')) {
    const response = await next();
    // Clone the response to modify headers
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Content-Type', 'text/css');
    return newResponse;
  }

  // 2. Simple Routing for your main domain
  const hostname = url.hostname.replace('www.', '');
  
  if (hostname === "southafricanbotanical.org.za" && url.pathname === "/") {
     return context.next("/index.html");
  }

  // 3. Fallback for everything else
  return next();
}
