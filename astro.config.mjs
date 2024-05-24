import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'no', 'de'],
    routing: {
      prefixDefaultLocale: true,
    }
  },
  site: 'https://emilianobregains.xyz/'
});