import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  output: 'static', // Explicitly set to static
  integrations: [sitemap()],
});
