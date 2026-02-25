import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const species = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/species" }),
  schema: z.object({
    name: z.string(),
    scientific_name: z.string(),
    image: z.string(),
    description: z.string(),
    quadrants: z.object({
      innovation: z.string(),
      agronomy: z.string(),
      news: z.string(),
      heritage: z.string(),
    }),
  }),
});

export const collections = { species };
