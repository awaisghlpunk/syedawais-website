// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/*
  `site` is the production origin. Canonical URLs, Open Graph URLs and the
  sitemap are all built from it, so it has to be correct before launch.
  If the site ships on a different domain, change it here and nothing else.
*/
export default defineConfig({
  site: 'https://syedawais.com',
  integrations: [sitemap()],

  // The dev-only toolbar overlays the page and shows up in print-to-PDF
  // captures, where it looks like a rendering bug. It never ships to
  // production, so turning it off only affects local previews.
  devToolbar: { enabled: false },
});
