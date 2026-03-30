import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import vedamitSitemap from "./integrations/vedamit-sitemap.mjs";

/** Set `GITHUB_PAGES=true` (see `npm run build:pages`) for GitHub Pages. */
const githubPages = process.env.GITHUB_PAGES === "true";

/** From package.json `"config"`; npm exposes these as `npm_package_config_*` when using npm scripts. */
const ghpSite =
  process.env.npm_package_config_ghpages_site ??
  "https://suhasvedamit.github.io";
const ghpBase = process.env.npm_package_config_ghpages_base ?? "vedamit";

// https://astro.build/config
export default defineConfig({
  site: githubPages ? ghpSite : "https://vedamit.com",
  base: githubPages ? `/${ghpBase}/` : "/",
  trailingSlash: "never",
  integrations: [react(), vedamitSitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
