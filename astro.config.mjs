import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Changing format to 'file' ensures each route becomes a specific .html file
    // This often resolves issues where deployment crawlers 'prune' directories
    format: 'file',
    inlineStylesheets: 'always'
  },
  // Ensure the deployment platform treats the root as the source of truth
  base: '/'
});
