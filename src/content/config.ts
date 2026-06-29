import { defineCollection, z } from 'astro:content';

const species = defineCollection({
  type: 'content',
  schema: z.object({
    // ... (keep your existing fields above here)
    cultivation: z.object({
      climate: z.string().optional(),
      // UPDATING THIS LINE: This allows your code to accept both 
      // single strings AND lists of regions, preventing the build crash.
      regions: z.union([z.string(), z.array(z.string())]).optional(),
      commercial: z.string().optional(),
    }).optional(),
    // ... (rest of your existing schema)
  }),
});

export const collections = { species };
