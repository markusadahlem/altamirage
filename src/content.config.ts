import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Sort key. Posts without a real date (e.g. "in Arbeit") may omit it.
    pubDate: z.coerce.date().optional(),
    // Optional display override for the date column ("in Arbeit", "2023", …).
    dateLabel: z.string().optional(),
    section: z.enum(['graue-substanz', 'allgemeines', 'migraenegehirn', 'gray-matters']),
    lang: z.enum(['de', 'en']).default('de'),
    // Preserve the old Blot.im `Link:` slug to keep existing URLs alive.
    slug: z.string().optional(),
    author: z.string().default('Markus A. Dahlem'),
    readingTime: z.string().optional(),
    // Italic intro paragraph rendered above the body (the design's .standfirst).
    standfirst: z.string().optional(),
    // Small coloured square before the section eyebrow in the article head.
    eyebrowDot: z.enum(['grey-matter', 'afferent', 'efferent']).optional(),
    // 'variations' renders the numbered-taxonomy layout instead of .prose.
    layout: z.enum(['article', 'variations']).default('article'),
    // Data for the numbered-taxonomy layout. The accent (red) is applied to
    // the last item's number automatically (`.var:last-child .num`).
    variations: z
      .array(
        z.object({
          num: z.string(),
          title: z.string(),
          titleAccent: z.string().optional(),
          body: z.string(),
          traitsLabel: z.string().optional(),
          traits: z.string().optional(),
        })
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
