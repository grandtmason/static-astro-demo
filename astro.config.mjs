import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node'; // Add this adapter

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  output: 'server', // Changed from 'static' to 'server'
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  }
});
