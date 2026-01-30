import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        longDescription: z.string().optional(),
        icon: z.string(),
        image: z.string().nullable(),
        badge: z.string().optional(),
        tags: z.array(z.string()).default([]),
        stats: z.array(z.object({
            value: z.string(),
            label: z.string()
        })).optional(),
        featuredProducts: z.array(z.object({
            title: z.string(),
            specs: z.array(z.object({
                icon: z.string(),
                text: z.string()
            })),
            image: z.string(),
            badge: z.string().nullable()
        })).optional()
    })
});

export const collections = { products };
