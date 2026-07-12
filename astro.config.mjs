import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [sitemap()],
  build: {
    format: 'file',
    inlineStylesheets: 'always'
  },
  base: '/'
});
