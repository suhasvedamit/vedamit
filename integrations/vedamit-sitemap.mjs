// @ts-check
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

/** @param {string} s */
function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Writes `sitemap.xml` after static build.
 * (@astrojs/sitemap relies on `astro:routes:resolved`, which is not available in Astro 4.16.)
 */
export default function vedamitSitemap() {
  /** @type {string} */
  let siteHref = "https://vedamit.com";

  return {
    name: "vedamit-sitemap",
    hooks: {
      /** @param {{ config: { site?: URL | string } }} args */
      "astro:config:done": ({ config }) => {
        if (config.site)
          siteHref =
            typeof config.site === "string" ? config.site : config.site.href;
        siteHref = siteHref.replace(/\/$/, "");
      },
      /** @param {{ dir: URL; pages: { pathname: string }[]; logger: { info: (m: string) => void } }} args */
      "astro:build:done": async ({ dir, pages, logger }) => {
        const site = `${siteHref}/`;
        /** @type {Set<string>} */
        const urls = new Set();

        for (const { pathname } of pages) {
          if (pathname === "404" || pathname.startsWith("404")) continue;
          const path = pathname === "" ? "/" : `/${pathname}`;
          urls.add(new URL(path, site).href);
        }

        const sorted = [...urls].sort();
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sorted.map((loc) => `  <url><loc>${escapeXml(loc)}</loc></url>`).join("\n")}
</urlset>
`;

        const outDir = fileURLToPath(dir);
        await writeFile(`${outDir}/sitemap.xml`, body, "utf8");
        logger.info(
          `vedamit-sitemap: wrote sitemap.xml (${sorted.length} URLs)`,
        );
      },
    },
  };
}
