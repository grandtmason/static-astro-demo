// src/content.config.ts
import { defineCollection, z } from 'astro:content';

// 1. Definition of the Species Metadata Structure
const speciesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().optional(),
    scientific_name: z.string().optional(),
    family: z.string().optional(),
    native_region: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      credit: z.string()
    })).optional(),
    introduction: z.string().optional(),
    description: z.string().optional(),
    naming_origins: z.string().optional(),
    
    // Nested Traditional Medicinal Array Validation Elements
    medicinal_properties: z.object({
      active_compounds: z.array(z.string()).optional(),
      traditional_uses: z.array(z.string()).optional(),
      clinically_validated: z.array(z.string()).optional(),
    }).optional(),
    
    // Nested Agricultural Sub-Matrix Records
    cultivation: z.object({
      climate: z.string().optional(),
      regions: z.string().optional(),
      commercial: z.string().optional(),
    }).optional(),
    
    // Workspace Gating Content Quadrants 
    quadrants: z.record(z.string()).optional(),
    
    // Regional Language Common Name Strings
    common_names: z.record(z.string()).optional(),
  }),
});

// 2. Clear Registration Export Node
export const collections = {
  'species': speciesCollection,
};
