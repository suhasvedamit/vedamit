import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import vedamitSitemap from "./integrations/vedamit-sitemap.mjs";

/** Set `GITHUB_PAGES=true` (see `npm run build:pages`) for GitHub Pages. */
const githubPages = process.env.GITHUB_PAGES === "true";

/** From package.json `"config"`; npm exposes these as `npm_package_config_*` when using npm scripts. */
const ghpSite =
  process.env.npm_package_config_ghpages_site ?? "https://vedamit.com";

/**
 * GitHub **project** Pages default URL is /repo/ on github.io. Assets must use that base or links go to /_astro/… (404).
 * After Custom domain is enabled in the repo, GitHub serves the site at the domain root → use `build:pages` (+ GHPAGES_NO_BASE).
 */
const ghpRepoSegment = (
  process.env.npm_package_config_ghpages_base ?? "vedamit"
).replace(/^\/+|\/+$/g, "");
const useDomainRoot =
  githubPages && process.env.GHPAGES_NO_BASE === "true";
const base =
  githubPages && !useDomainRoot && ghpRepoSegment
    ? `/${ghpRepoSegment}/`
    : "/";

// https://astro.build/config
export default defineConfig({
  site: githubPages ? ghpSite : "https://vedamit.com",
  base,
  trailingSlash: "never",
  integrations: [react(), vedamitSitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
