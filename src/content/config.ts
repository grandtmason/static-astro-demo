import { defineCollection, z } from 'astro:content';

const species = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().optional(),
    scientific_name: z.string().optional(),
    family: z.string().optional(),
    native_region: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      credit: z.string().default(''),
    })).optional(),
    description: z.string().optional(),
    introduction: z.string().optional(),
    conservation_status: z.string().optional(),
    naming_origins: z.string().optional(),
    common_names: z.record(z.string()).optional(),
    medicinal_properties: z.object({
      active_compounds: z.array(z.string()).optional(),
      traditional_uses: z.array(z.string()).optional(),
      clinically_validated: z.array(z.string()).optional(),
    }).optional(),
    cultivation: z.object({
      climate: z.string().optional(),
      regions: z.string().optional(),
      commercial: z.string().optional(),
    }).optional(),
    indigenous_knowledge: z.string().optional(),
    quadrants: z.object({
      wellness: z.string().optional(),
      innovation: z.string().optional(),
      ik: z.string().optional(),
      culture: z.string().optional(),
      agronomy: z.string().optional(),
      legislation: z.string().optional(),
      projects: z.string().optional(),
      intelligence: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { species };
