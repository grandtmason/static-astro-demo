import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  output: 'static',
  integrations: [sitemap()],
  // This explicitly sets the build mode to ignore the request header warning
  build: {
    inlineStylesheets: 'always',
    format: 'directory'
  },
  vite: {
    ssr: {
      // This forces the build to ignore server-only objects during static build
      external: ['Astro']
    }
  }
});
