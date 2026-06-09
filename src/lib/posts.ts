import { getCollection, type CollectionEntry } from 'astro:content';

export type Section = 'graue-substanz' | 'allgemeines' | 'migraenegehirn' | 'gray-matters';

export const SECTION_LABEL: Record<Section, string> = {
  'graue-substanz': 'Graue Substanz',
  'allgemeines': 'Allgemeines',
  'migraenegehirn': 'Migränegehirn',
  'gray-matters': 'Gray Matters',
};

/** The URL for a post: its old Blot.im `Link:` slug when present, else the file id. */
export function postPath(post: CollectionEntry<'posts'>): string {
  const slug = post.data.slug ?? post.id;
  return '/' + slug.replace(/^\/+/, '');
}

/** German short date for the entry/meta rows; `dateLabel` overrides it. */
export function dateLabel(post: CollectionEntry<'posts'>): string {
  if (post.data.dateLabel) return post.data.dateLabel;
  if (!post.data.pubDate) return '';
  return post.data.pubDate.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/** Long German date for the article header. */
export function longDate(post: CollectionEntry<'posts'>): string {
  if (!post.data.pubDate) return post.data.dateLabel ?? '';
  return post.data.pubDate.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Published posts (drafts excluded), newest first. */
export async function getPublishedPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => {
    const ta = a.data.pubDate?.getTime() ?? 0;
    const tb = b.data.pubDate?.getTime() ?? 0;
    return tb - ta;
  });
}
