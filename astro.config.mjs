// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The dev-only toolbar overlays the page and shows up in print-to-PDF
  // captures, where it looks like a rendering bug. It never ships to
  // production, so turning it off only affects local previews.
  devToolbar: { enabled: false },
});
