import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  integrations: [sitemap()],
  output: 'static', // Explicitly set to static
  build: {
    inlineStylesheets: 'always',
    format: 'directory' // Ensures index.html paths are correct
  },
  // Add this to prevent the build from aborting on header warnings
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'CIRCULAR_DEPENDENCY') return;
          warn(warning);
        }
      }
    }
  }
});
