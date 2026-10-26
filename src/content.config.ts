import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['live', 'in use', 'pilot', 'in development']),
    role: z.string(),
    year: z.number(),
    order: z.number(),
  }),
});

export const collections = { work };
