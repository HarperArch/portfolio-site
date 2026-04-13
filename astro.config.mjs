import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/** Set in CI or `.env` when building: `SITE_URL=https://you.dev` */
const site = process.env.SITE_URL || "https://example.com";
/** GitHub project pages: `/<repo>/`. Local dev: leave unset or `/` */
const baseRaw = process.env.ASTRO_BASE_PATH || "/";
const base =
  baseRaw === "/" ? "/" : baseRaw.endsWith("/") ? baseRaw : `${baseRaw}/`;

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
