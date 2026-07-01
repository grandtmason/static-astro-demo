import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Your routing logic remains here, decoupled from UI rendering
  return next();
});
