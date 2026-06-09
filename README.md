# Altamirage

The personal blog of **Markus A. Dahlem** — physicist and migraine researcher.
A quiet, type-led, near-monochrome editorial site, built with [Astro](https://astro.build/)
and deployed to GitHub Pages at **[altamirage.de](https://altamirage.de)**.

## Stack

- **Astro** static site generator (zero JS shipped by default).
- **Markdown** content collections — write posts as `.md` files in folders.
- **LaTeX** via `remark-math` + `rehype-katex` (KaTeX).
- Self-hosted fonts (**Spectral**, **Spline Sans Mono**) via `@fontsource`.
- Light/dark theme, filterable archive — vanilla JS in `src/layouts/Base.astro`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Writing a post

Create a Markdown file under the section folder:

```
src/content/posts/<section>/<slug>.md
```

where `<section>` is one of `graue-substanz`, `allgemeines`, `migraenegehirn`,
`gray-matters`. Frontmatter:

```yaml
---
title: Mein Beitrag
description: Kurzbeschreibung für Listen und SEO.
pubDate: 2026-06-09          # sort key; omit for undated drafts
section: allgemeines
lang: de                     # de | en  (en shows an "EN" pill)
slug: mein-beitrag           # optional — preserves an old URL; defaults to filename
readingTime: ≈ 5 Min. Lesezeit
standfirst: Optionaler kursiver Einleitungsabsatz.
eyebrowDot: afferent         # optional small dot: grey-matter | afferent | efferent
draft: false
---

Body in Markdown. Inline math like $E = mc^2$, display math:

$$
\frac{\partial u}{\partial t} = D\,\nabla^2 u
$$

Footnotes work too.[^1]

![Bildunterschrift als Alt-Text](./_mein-bild.png)

[^1]: Eine Fußnote.
```

- **Images:** co-locate them next to the post (`./_name.png`); Astro optimizes them.
- **Numbered-taxonomy layout:** set `layout: variations` and provide a `variations:`
  array in frontmatter (see `die-vier-variationen-des-gluecks.md`).

The home page lists the five newest posts automatically. The archive
(`src/pages/archiv.astro`) is currently a curated list — swap a row's `href` to the
real path as each legacy post is migrated.

## Content migration

The original Blot.im export lives in `legacy-source/` as a migration reference
(not built). Four representative posts have been migrated so far; the rest are
converted incrementally by copying the Markdown, rewriting the frontmatter to the
schema above, fixing image paths to `./_name.png`, and converting inline `$$…$$`
to `$…$` where appropriate.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and deploys to GitHub Pages.

**One-time GitHub setup:** repo **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

**Custom domain (`altamirage.de`):** `public/CNAME` already contains the domain.
Configure DNS at your registrar:

| Type  | Host  | Value                          |
| ----- | ----- | ------------------------------ |
| A     | `@`   | `185.199.108.153`              |
| A     | `@`   | `185.199.109.153`              |
| A     | `@`   | `185.199.110.153`              |
| A     | `@`   | `185.199.111.153`              |
| AAAA  | `@`   | `2606:50c0:8000::153`          |
| AAAA  | `@`   | `2606:50c0:8001::153`          |
| AAAA  | `@`   | `2606:50c0:8002::153`          |
| AAAA  | `@`   | `2606:50c0:8003::153`          |
| CNAME | `www` | `markusadahlem.github.io.`      |

Then in **Settings → Pages**, set the custom domain to `altamirage.de` and enable
**Enforce HTTPS** once the certificate is issued.
