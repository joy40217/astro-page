// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://joy40217.github.io',
  base: 'astro-page',
  integrations: [preact()]
});