import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://hcserviclean.com',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    icon(),
  ],
  build: {
    assets: '_assets',
  },
});
