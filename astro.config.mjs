import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  output: 'hybrid', // Hybrid mode allows static generation + server features
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always'
  }
});
