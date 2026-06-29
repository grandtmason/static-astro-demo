import { defineCollection, z } from 'astro:content';

const species = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().optional(),
    scientific_name: z.string().optional(),
    family: z.string().optional(),
    native_region: z.string().optional(),
    image: z.string().optional(),
    images: z.any().optional(),
    description: z.string().optional(),
    introduction: z.string().optional(),
    conservation_status: z.string().optional(),
    naming_origins: z.string().optional(),
    common_names: z.any().optional(),
    medicinal_properties: z.any().optional(),
    cultivation: z.object({
      climate: z.string().optional(),
      regions: z.union([z.string(), z.array(z.string())]).optional(),
      commercial: z.string().optional(),
    }).optional(),
    indigenous_knowledge: z.string().optional(),
    quadrants: z.any().optional(),
    stats: z.any().optional(),
    provinces: z.any().optional(),
    protection: z.any().optional(),
  }),
});

export const collections = { species };
