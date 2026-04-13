import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/** Set in CI or `.env` when building: `SITE_URL=https://you.dev` */
const site = process.env.SITE_URL || "https://example.com";

export default defineConfig({
  site,
  integrations: [sitemap()],
});
