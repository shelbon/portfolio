import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const hero = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/hero",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    introduction: z.string(),
    role: z.string(),
    ctaLabel: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    coverImage: z.string(),
    images: z.array(z.string()).default([]),
    technologies: z.array(z.string()),
    description: z.string(),
    repoLink: z.string().url().optional(),
    demoLink: z.string().url().optional(),
    moreInfo: z.boolean().default(true),
    locale: z.enum(["fr", "en"]),
  }),
});

export const collections = { hero, projects };
