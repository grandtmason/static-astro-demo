import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://southafricanbotanical.org.za',
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  }
});
