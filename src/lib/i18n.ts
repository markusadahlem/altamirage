// Lightweight bilingual chrome (nav + footer). German is the default locale at
// `/`; English lives at `/en/`. Only the home page and the surrounding chrome
// are translated for now — subpages (Vita, Was ist Altamirage?, Impressum,
// Archiv) stay German, so English nav/footer links point at those German pages.

export type Locale = 'de' | 'en';

export const homeHref: Record<Locale, string> = { de: '/', en: '/en/' };
export const otherLocale = (l: Locale): Locale => (l === 'de' ? 'en' : 'de');

type NavItem = { key: string; href: string; label: string };

export const nav: Record<Locale, NavItem[]> = {
  de: [
    { key: 'start', href: '/', label: 'Start' },
    { key: 'archiv', href: '/archiv', label: 'Archiv' },
    { key: 'was-ist-altamirage', href: '/was-ist-altamirage', label: 'Was ist Altamirage?' },
    { key: 'vita', href: '/vita', label: 'Vita' },
  ],
  en: [
    { key: 'start', href: '/en/', label: 'Home' },
    { key: 'archiv', href: '/archiv', label: 'Archive' },
    { key: 'was-ist-altamirage', href: '/was-ist-altamirage', label: 'About' },
    { key: 'vita', href: '/vita', label: 'Vita' },
  ],
};

type FootLink = { href: string; label: string; external?: boolean };

export const footer: Record<Locale, {
  blurb: string;
  sectionsHeading: string;
  moreHeading: string;
  sections: FootLink[];
  more: FootLink[];
  baselineRight: string;
}> = {
  de: {
    blurb: 'Serendipität ist, wenn der Zufall das Leben prägt. Altamirage ist, wenn das Leben den Zufall prägt.',
    sectionsHeading: 'Bereiche',
    moreHeading: 'Mehr',
    sections: [
      { href: '/archiv#graue-substanz', label: 'Graue Substanz' },
      { href: '/archiv#allgemeines', label: 'Allgemeines' },
      { href: '/archiv', label: 'Archiv' },
    ],
    more: [
      { href: '/vita', label: 'Vita' },
      { href: '/was-ist-altamirage', label: 'Was ist Altamirage?' },
      { href: '/impressum', label: 'Impressum' },
      { href: 'https://scholar.google.com/citations?hl=en&user=1ioM-GYAAAAJ', label: 'Google Scholar ↗', external: true },
      { href: 'https://www.linkedin.com/in/markusdahlem/', label: 'LinkedIn ↗', external: true },
    ],
    baselineRight: 'Migräne Aura Stiftung · gegr. 2004',
  },
  en: {
    blurb: 'Serendipity is when chance shapes a life. Altamirage is when a life shapes chance.',
    sectionsHeading: 'Sections',
    moreHeading: 'More',
    sections: [
      { href: '/archiv#graue-substanz', label: 'Graue Substanz' },
      { href: '/archiv#allgemeines', label: 'Allgemeines' },
      { href: '/archiv#en', label: 'Archive (English)' },
    ],
    more: [
      { href: '/vita', label: 'Vita' },
      { href: '/was-ist-altamirage', label: 'About' },
      { href: '/impressum', label: 'Imprint' },
      { href: 'https://scholar.google.com/citations?hl=en&user=1ioM-GYAAAAJ', label: 'Google Scholar ↗', external: true },
      { href: 'https://www.linkedin.com/in/markusdahlem/', label: 'LinkedIn ↗', external: true },
    ],
    baselineRight: 'Migräne Aura Stiftung · est. 2004',
  },
};
