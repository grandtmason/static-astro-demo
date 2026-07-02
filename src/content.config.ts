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
    
    // New: Stats block for Trade Engine integration [cite: 102]
    stats: z.object({
      production: z.string().optional(),
      revenue: z.string().optional(),
      markets: z.string().optional(),
      livelihoods: z.string().optional(),
    }).optional(),

    // New: Protection block for Compliance/BSA [cite: 134]
    protection: z.object({
      gi_year: z.string().optional(),
      gi_status: z.string().optional(),
      bsa_year: z.string().optional(),
      bsa_status: z.string().optional(),
      organic: z.string().optional(),
      wild_harvest: z.string().optional(),
    }).optional(),

    medicinal_properties: z.object({
      active_compounds: z.array(z.string()).optional(),
      traditional_uses: z.array(z.string()).optional(),
      clinically_validated: z.array(z.string()).optional(),
    }).optional(),

    cultivation: z.object({
      climate: z.string().optional(),
      regions: z.union([z.string(), z.array(z.string())]).optional(),
      commercial: z.string().optional(),
    }).optional(),

    indigenous_knowledge: z.string().optional(),

    // Updated: Now follows the 8-pillar framework 
    pillar_data: z.object({
      wellness: z.string().optional(),
      innovation: z.string().optional(),
      ik: z.string().optional(),
      people: z.string().optional(),
      agronomy: z.string().optional(),
      legislation: z.string().optional(),
      projects: z.string().optional(),
      intelligence: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { species };
