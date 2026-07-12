import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  // REMOVE THE OUTPUT LINE ENTIRELY
  adapter: cloudflare({
    mode: 'directory',
  }),
  integrations: [sitemap()],
});
