/** Root-relative URL including Astro `base` (e.g. GitHub Pages project sites). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path === "/" || path === "") return base;
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${p}`;
}

/** `href` for site paths; leaves `http(s)` URLs unchanged (GitHub, mailto, etc.). */
export function resolveLink(url: string): string {
  if (!url || /^https?:\/\//i.test(url) || url.startsWith("mailto:")) return url;
  if (url.startsWith("/")) return href(url);
  return href(`/${url}`);
}
