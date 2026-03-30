/** Normalize trailing slash except for root. */
export function normalizePath(p: string): string {
  if (p !== "/" && p.endsWith("/")) return p.slice(0, -1);
  return p;
}

/** Root-relative href including Astro `base` (e.g. `/vedamit/contact`). */
export function sitePath(path: string): string {
  const raw = import.meta.env.BASE_URL;
  const base = raw.endsWith("/") ? raw : `${raw}/`;
  if (!path || path === "/") return base;
  return `${base}${path.replace(/^\/+/, "")}`;
}

/** Strip deploy `base` from pathname so active nav matches logical routes. */
export function logicalPathname(pathname: string): string {
  const seg = import.meta.env.BASE_URL.replace(/^\/+|\/+$/g, "");
  if (!seg) return normalizePath(pathname);
  const prefix = `/${seg}`;
  if (pathname === prefix || pathname === `${prefix}/`)
    return normalizePath("/");
  if (pathname.startsWith(`${prefix}/`))
    return normalizePath(pathname.slice(prefix.length) || "/");
  return normalizePath(pathname);
}
