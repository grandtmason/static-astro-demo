import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  base: '/', // Try '/' first. If it fails, change this to '/static-astro-demo/'
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  }
});
