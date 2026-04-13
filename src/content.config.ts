import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    date: z.coerce.date(),
    dateRange: z.string().optional(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    /** Path under /public or absolute URL */
    thumbnail: z.string().optional(),
    /** Lower sorts first when listing */
    order: z.number().optional(),
    links: z
      .object({
        /** Empty YAML strings are treated as “no link” so entries don’t fail validation */
        github: z.preprocess(
          (v) => (v === "" || v == null ? undefined : v),
          z.string().url().optional(),
        ),
        demo: z.preprocess(
          (v) => (v === "" || v == null ? undefined : v),
          z.string().url().optional(),
        ),
        /** PDF URL or path e.g. /reports/paper.pdf */
        report: z.preprocess(
          (v) => (v === "" || v == null ? undefined : v),
          z.string().optional(),
        ),
        /** Letter of recommendation PDF (path under /public or full URL) */
        recommendation: z.preprocess(
          (v) => (v === "" || v == null ? undefined : v),
          z.string().optional(),
        ),
        /** Jupyter notebook path under /public or full URL (e.g. nbviewer) */
        notebook: z.preprocess(
          (v) => (v === "" || v == null ? undefined : v),
          z.string().optional(),
        ),
      })
      .default({}),
  }),
});

export const collections = { projects };
