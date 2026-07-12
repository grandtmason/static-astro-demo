import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always'
  }
});
