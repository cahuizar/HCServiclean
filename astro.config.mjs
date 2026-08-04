import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://hcserviclean.com',
  trailingSlash: 'always',
  redirects: {
    '/home':  '/',
    '/home/': '/',
    '/referrals':  '/estimate/',
    '/referrals/': '/estimate/',
  },
  integrations: [
    tailwind(),
    react(),
    sitemap({
      // Confirmation page is noindex and only reachable via Jobber's
      // post-submit redirect — keep it out of the sitemap too.
      filter: (page) => !page.includes('/estimate/thank-you'),
    }),
    icon(),
  ],
  build: {
    assets: '_assets',
  },
});
