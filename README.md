# Personal portfolio (Astro)

Static site with a Markdown-driven project list, home bio, resume page, and contact links.

## Develop

Requires Node 22+.

```bash
npm install
npm run dev
```

Edit copy in `src/config/site.ts` and add projects as `.md` files under `src/content/projects/`. See existing samples for frontmatter fields (`title`, `shortDescription`, `date`, `tags`, `featured`, `links.github`, `links.demo`, `links.report`, etc.).

Put `resume.pdf` in `public/resume.pdf` for the resume viewer and download button.

## Production URL

Set the real site URL so canonical links and the sitemap are correct:

- **Local / default:** `SITE_URL` defaults to `https://example.com` in `astro.config.mjs`. Override when building:

  ```bash
  SITE_URL=https://your.domain npm run build
  ```

- **Vercel / Netlify:** Add an environment variable `SITE_URL` matching your production URL.

- **GitHub Pages:** In the repo, add variable `SITE_URL` (Settings → Secrets and variables → Actions → Variables), e.g. `https://username.github.io/repo-name/`. If the site is not at the domain root, also set Astro’s `base` in `astro.config.mjs` to `'/repo-name/'` and redeploy.

## Deploy

| Host | Notes |
|------|--------|
| **Vercel** | Connect the repo; framework auto-detects Astro. Set `SITE_URL`. |
| **Netlify** | Uses `netlify.toml` (`npm run build`, publish `dist`). Set `SITE_URL`. |
| **GitHub Pages** | Enable Pages with “GitHub Actions”. Workflow: `.github/workflows/deploy-github-pages.yml`. Configure `SITE_URL` as above. |

After deployment, update `public/robots.txt` with your sitemap URL if you want crawlers to discover it explicitly (the sitemap is still emitted at `/sitemap-index.xml`).
