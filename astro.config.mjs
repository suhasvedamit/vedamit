import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import vedamitSitemap from "./integrations/vedamit-sitemap.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://vedamit.com",
  trailingSlash: "never",
  integrations: [react(), vedamitSitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
