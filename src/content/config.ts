import { defineCollection } from 'astro:content';

// This disables the strict schema check entirely. 
// It tells Astro to just read the files as they are.
const species = defineCollection({
  type: 'content',
});

export const collections = { species };
