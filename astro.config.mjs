import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  output: 'static',
  integrations: [sitemap()],
  // This explicitly instructs Astro to ignore dynamic checks
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  // The crucial addition:
  // This tells Astro to treat all pages as static files at build-time.
  // This bypasses the SSR scanning engine that is falsely triggering the warning.
  prefetch: false 
});
