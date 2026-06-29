import { defineCollection, z } from 'astro:content';

const species = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().optional(),
    scientific_name: z.string().optional(),
    family: z.string().optional(),
    native_region: z.string().optional(),
    image: z.string().optional(),
    images: z.any().optional(), // Relaxed to any to prevent crashing
    description: z.string().optional(),
    introduction: z.string().optional(),
    conservation_status: z.string().optional(),
    naming_origins: z.string().optional(),
    common_names: z.any().optional(), // Relaxed
    medicinal_properties: z.any().optional(), // Relaxed
    cultivation: z.any().optional(), // Relaxed
    indigenous_knowledge: z.string().optional(),
    quadrants: z.any().optional(), // Relaxed
    stats: z.any().optional(), // Added to capture your stats field
    provinces: z.any().optional(), // Added to capture your provinces field
    protection: z.any().optional(), // Added to capture your protection field
  }),
});

export const collections = { species };
