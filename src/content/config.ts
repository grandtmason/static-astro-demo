import { defineCollection, z } from 'astro:content';

const species = defineCollection({
  type: 'content',
  // By using z.any(), we tell Astro to stop complaining about 
  // differences between your Markdown files and the schema.
  schema: z.any(), 
});

export const collections = { species };
