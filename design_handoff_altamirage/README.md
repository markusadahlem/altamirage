# Handoff: Altamirage — personal blog redesign

## Overview
Altamirage is the personal blog of **Markus A. Dahlem** — physicist and migraine researcher. The
design is a quiet, type-led, near-monochrome editorial site (a redesign of a site previously built
on the generic "Forty" HTML5 UP template). It covers four content areas — *Graue Substanz*,
*Allgemeines*, *Migränegehirn*, *Gray Matters* — plus an About/Vita and individual articles.

The site is mostly German, with one English archive section ("Gray Matters").

## About the Design Files
The files in this bundle are **design references created in plain HTML/CSS/JS** — prototypes that
show the intended look, typography, spacing and behaviour. They are **not meant to be shipped as-is**.
The task is to **recreate these designs in the target codebase's environment**, using its established
patterns and component library. If there is no existing app yet, pick the most appropriate stack
(this content is a static, content-driven blog, so a static-site generator such as **Astro**,
**Eleventy**, **Hugo**, or **Next.js** static export is the natural fit) and implement the design there.

The HTML is intentionally simple and semantic, so it maps cleanly onto components (a `Masthead`,
`Footer`, `EntryRow`, `AreaRow`, `Article`, `Timeline`, etc.).

## Fidelity
**High-fidelity.** Final colours, typography, spacing, and interactions are all defined. Recreate the
UI faithfully. All design tokens are CSS custom properties in `altamirage.css` (`:root` for light,
`[data-theme="slate"]` for dark) — port these into the target system's token layer.

---

## Global structure

Every page shares three pieces:

### Masthead (sticky, translucent)
- Sticky top bar, height **72px**, horizontal padding `clamp(1.5rem, 6vw, 4rem)`, max content width **64rem**, centered.
- Background: `color-mix(in oklab, var(--paper) 84%, transparent)` with `backdrop-filter: saturate(1.3) blur(14px)`. No bottom border.
- Left: **wordmark** "Altamirage" — Spectral, weight 300, 1.28rem, letter-spacing −0.014em. **Plain text, no logo/icon.** `margin-right:auto`.
- Center/right: **nav** — Spline Sans Mono, 0.72rem, letter-spacing 0.1em, uppercase, color `--ink-faint`; current/hover → `--ink`. Items: Start · Archiv · Was ist Altamirage? · Vita. Gap 1.7rem.
- Far right: **light/dark toggle** — a single `<button class="theme-toggle">`, mono 0.7rem, uppercase, `--ink-faint` → `--ink` on hover. Label is the *target* mode: shows "Dunkel" in light mode, "Hell" in dark mode.
- Below 560px: nav collapses behind a "Menü" text button (`.nav-toggle`) that toggles a stacked dropdown.

### Footer
- Top hairline (`1px var(--rule)`), large top margin `clamp(5rem,11vw,9rem)`.
- 3-column grid (`1.6fr 1fr 1fr`, collapses to 2 then 1 col): wordmark + italic blurb · "Bereiche" links · "Mehr" links.
- Column headings: mono 0.68rem, letter-spacing 0.16em, uppercase, `--ink-faint`.
- Links: serif 0.95rem, `--ink-soft` → `--ink` on hover, block display.
- Baseline row: top hairline, mono 0.66rem `--ink-faint`, space-between: copyright · "Migräne Aura Stiftung · gegr. 2004".

### Theme behaviour (`altamirage.js`)
- Two themes only: **light** (default, no attribute) and **dark** (`<html data-theme="slate">`).
- Persisted in `localStorage` under key `altamirage-theme` (`"paper"` | `"slate"`). Applied before paint to avoid flash. Toggling updates all `.theme-toggle` labels.

---

## Screens / Views

### 1. Home — `index.html`
- **Purpose**: Entry point; states the concept, lists the four areas and recent posts, introduces the author.
- **Hero** (`.hero`, padding-top `clamp(4.5rem,13vw,9rem)`):
  - `h1` "Altamirage" — Spectral 300, `clamp(3.4rem, 13vw, 8rem)`, line-height 0.98, letter-spacing −0.02em. **No eyebrow/kicker above it.**
  - `.lede` — Spectral 300, `clamp(1.25rem,2.3vw,1.7rem)`, max-width 26ch: "Das Glück, das man erfährt, wenn man sich ein eigenes *Terra incognita* erst selbst erschafft — und dann auch eintritt." (*Terra incognita* in italic.)
  - `.couplet-line` — two stacked italic lines, mono-free, `--ink-soft` then `--ink`: "Serendipität ist, wenn der Zufall das Leben prägt." / "Altamirage ist, wenn das Leben den Zufall prägt."
- **Four areas** (`.area-list`): a hairline-ruled list (top + between rows, `1px var(--rule)`). Each `.area` is a 3-col grid `14rem 1fr auto`, padding `1.9rem 0`:
  - `.area-title` — Spectral 300, 1.7rem; **italic on hover**.
  - `.area-desc` — `--ink-soft`, 1rem, max-width 44ch.
  - `.area-when` — mono 0.7rem `--ink-faint`, right-aligned ("2009–2015", "seit 2023", "in Arbeit", "English").
  - Rows: Graue Substanz, Allgemeines, Migränegehirn, Gray Matters. Each links to `archiv.html#<section>`.
- **Recent posts** (`.entries`): hairline-ruled list, each `.entry` a 3-col grid `6.5rem 1fr 9rem`, padding `1.6rem 0`:
  - `.date` — mono 0.7rem `--ink-faint`.
  - `.title` — Spectral 300, 1.4rem; italic on hover. Optional `.desc` (`--ink-soft`, 0.97rem).
  - `.sect` — mono 0.66rem uppercase `--ink-faint`, right-aligned (section name).
- **Author strip** (`.author`): 2-col grid `1fr 1fr`, image right (collapses to stacked, image first on mobile). Heading Spectral 300; body `--ink-soft`; three understated link-buttons (`.btn`). Image: `assets/vorlesung-tafel.jpg` with mono caption.
- **Section headers** (`.section-head`): a small mono label (`h2`, 0.72rem, letter-spacing 0.2em, uppercase, `--ink-faint`) on the left and a mono "→" meta link on the right ("Alle Beiträge →", "Archiv →").

### 2. Archive — `archiv.html`
- **Purpose**: Full, filterable index of posts across the four sections.
- Hero: small eyebrow "Vollständiges Verzeichnis", `h1` "Archiv", short lede.
- **Filter bar** (`.filterbar`): text-only mono buttons (no chips/dots), gap 1.4rem. Active button → `--ink` with a `1px` bottom border; others `--ink-faint`. Options: Alle · Graue Substanz · Allgemeines · Migränegehirn · Gray Matters.
- A live count line (`[data-count]`, mono uppercase `--ink-faint`) updates to "NN Beiträge" when filtered.
- 27 `.entry` rows (same component as home, but with `data-section` attribute). Filtering toggles `hidden` on non-matching rows. A `#section` hash in the URL auto-applies the matching filter on load.
- English ("Gray Matters") entries carry a small `.lang-pill` "EN" badge after the title (mono 0.58rem, 1px `--rule` border, radius 2px).

### 3. Article — `was-ist-altamirage.html`, `physik-der-migraene.html`
- **Purpose**: Reading view for a single post. Single centered column, `--measure` (36rem).
- `.article-head`: small mono section eyebrow, `h1` Spectral 300 `clamp(2.2rem,5.4vw,3.4rem)`, `.article-meta` row (mono 0.7rem `--ink-faint`: date · author · reading time).
- `.prose`:
  - `.standfirst` — Spectral, **italic**, 1.3rem, the bold intro paragraph.
  - `p` — Spectral 1.16rem, line-height 1.78.
  - `h2` — Spectral 300, 1.7rem; `h3` — mono 0.74rem uppercase `--ink-faint`.
  - `a.link` — ink text, underline with `--ink-faint` underline-color → `--ink` on hover (links are **not** coloured).
  - `blockquote` — borderless, Spectral **italic**, 1.4rem; `cite` in mono 0.7rem `--ink-faint`.
  - `ul/li` — custom "—" marker (em dash, `--ink-faint`) via `li::before`; no bullets.
- `figure.wide` (max 52rem) with full-bleed image and mono `figcaption` (`--ink-faint`).
- `.footnotes`: top hairline; mono uppercase heading; `<ol>` of references, `--ink-soft` 0.95rem.
- Prev/next nav row of `.btn` links at the bottom.

### 4. The Four Variations — `die-vier-variationen-des-gluecks.html`
- A variant article with a distinctive **numbered taxonomy** instead of `.prose` body.
- `.variations` list; each `.var` is a 2-col grid `4.5rem 1fr`, padding `2rem 0`, hairline divider.
  - `.num` — Spectral 300, 3rem, `--ink-faint`. **Exception:** the last item's number (`.var:last-child .num`) is `var(--efferent)` — the single red accent on the page.
  - `h2` Spectral 300 1.6rem; `p` 1.1rem.
  - `.traits` — mono 0.76rem `--ink-faint`, top hairline; with a small uppercase mono label "Notwendige Persönlichkeitsmerkmale" (`.traits b`).

### 5. Vita — `vita.html`
- **Purpose**: About the author + tabular CV.
- Top: `.article-head` + `.prose` narrative bio with two `figure.wide` photos (`assets/vorlesung-tafel.jpg`, `assets/innovation-politik.jpg`).
- **Timeline** (`.timeline`): hairline-ruled rows, each `.tl-row` a 2-col grid `9rem 1fr`:
  - `.when` — mono 0.72rem `--ink-faint` (year range).
  - `.what h3` — Spectral 500, 1.18rem (role); `.org` — `--ink-soft` (institution); `.where` — mono 0.7rem `--ink-faint` (location).
  - Two groups, each preceded by a mono uppercase subheading: "Beruflicher Werdegang" and "Ausbildung".

---

## Interactions & Behavior
- **Light/dark toggle**: flips `html[data-theme]`, persisted to localStorage; body transitions `background-color`/`color` over 0.5s ease.
- **Archive filter**: client-side; toggles `[hidden]` on rows by `data-section`; updates the count; respects `#section` hash on load.
- **Hover states**: titles (`.area-title`, `.entry .title`) go **italic** on hover (no background fills, no movement); nav/links shift colour `--ink-faint`/`--ink-soft` → `--ink`.
- **Scroll reveal**: elements with `.reveal` start at `opacity:0; translateY(12px)` and animate to visible via IntersectionObserver (`.in` class), 0.8s ease. Gate behind `prefers-reduced-motion: no-preference` (already done) — make sure server-rendered/no-JS output shows content (treat visible as the base state in the target implementation).
- **Mobile nav**: `.nav-toggle` ("Menü") toggles `.nav.open` (stacked dropdown) below 560px.
- **Placeholder links**: `a[href="#"]` (not-yet-built posts) call `preventDefault()`.

## State Management
Minimal, all client-side:
- `theme`: `"paper" | "slate"` in `localStorage["altamirage-theme"]`.
- `activeFilter`: current archive section (`all` + 4 sections); derived from clicks or URL hash.
- No data fetching — content is static. In a real build, posts would come from Markdown/CMS; the
  original content lives in the author's `.md` files (front-matter: `Date`, `Link`, optional `Bibliography`).

## Design Tokens
All tokens are CSS custom properties. **OKLCH** values (port directly; or convert to hex/your format).

**Light (`:root`)**
| Token | Value | Use |
|---|---|---|
| `--paper` | `oklch(0.986 0.004 90)` | page background (warm near-white) |
| `--paper-2` | `oklch(0.967 0.005 88)` | figure/placeholder background |
| `--ink` | `oklch(0.255 0.010 70)` | primary text |
| `--ink-soft` | `oklch(0.500 0.010 72)` | secondary text |
| `--ink-faint` | `oklch(0.680 0.008 76)` | labels, meta, captions |
| `--rule` | `oklch(0.905 0.006 86)` | hairlines / borders |
| `--efferent` | `oklch(0.57 0.140 30)` | the single red accent (variation "04") |
| `--afferent` | `oklch(0.58 0.115 250)` | reserved blue (unused in minimal build) |
| `--grey-matter` | `oklch(0.62 0.010 80)` | reserved grey |
| `--selection` | `oklch(0.57 0.14 30 / 0.14)` | `::selection` |

**Dark (`[data-theme="slate"]`)**
| Token | Value |
|---|---|
| `--paper` | `oklch(0.205 0.010 65)` |
| `--paper-2` | `oklch(0.245 0.011 64)` |
| `--ink` | `oklch(0.935 0.008 86)` |
| `--ink-soft` | `oklch(0.700 0.010 84)` |
| `--ink-faint` | `oklch(0.540 0.011 80)` |
| `--rule` | `oklch(0.320 0.012 64)` |
| `--efferent` | `oklch(0.70 0.150 33)` |
| `--afferent` | `oklch(0.70 0.130 250)` |

**Typography**
- Serif (display + body): **Spectral** (Google Fonts) — weights used: 200, 300, 400, 500; italics 300/400. Headings use 300 ("display weight").
- Mono (labels, meta, nav, captions): **Spline Sans Mono** (Google Fonts) — 400/500.
- Display letter-spacing: −0.014em (headings −0.02em). Body line-height 1.65; prose 1.78.

**Layout**
- `--measure` (reading column): **36rem**.
- `--page` (max content width): **64rem**.
- `--pad` (horizontal gutter): `clamp(1.5rem, 6vw, 4rem)`.
- Section rhythm `.block`: padding-top `clamp(4rem, 11vw, 8rem)`.
- Breakpoints: **800px** (grids → single/stacked), **560px** (nav → dropdown).

**Misc**
- Border radius: essentially none (only `.lang-pill` = 2px). Minimal/flat — no shadows.

## Assets
In `assets/` (sourced from the author's content folder; all are supporting figures, restrained usage):
- `vorlesung-tafel.jpg` — Dahlem at a chalkboard (home author strip + vita).
- `innovation-politik.jpg` — BfArM "Innovation trifft Politik" photo (vita).
- `altamirage-zns.png` — the afferent/efferent nervous-system diagram (article "Was ist Altamirage?").
- `quixotisch-gegen-migraene.png` — illustration (same article).
- `kontrollmethoden.png`, `lorenz-and-wave.png` — figures for "Physik der Migräne".

Fonts are loaded from Google Fonts via `@import` in `altamirage.css` — in production, self-host or use the framework's font pipeline.

## Files
- `index.html` — home
- `archiv.html` — filterable archive
- `was-ist-altamirage.html`, `physik-der-migraene.html` — standard article template
- `die-vier-variationen-des-gluecks.html` — numbered-taxonomy article variant
- `vita.html` — about + CV timeline
- `altamirage.css` — all shared styles + design tokens (light/dark)
- `altamirage.js` — theme toggle, archive filter, mobile nav, scroll reveal
- `assets/` — images

> Note: the markup is canonical and semantic; component boundaries are easy to infer from the
> class names (`.masthead`, `.area`, `.entry`, `.prose`, `.timeline`, `.foot`). Recreate these as
> components in the target framework rather than copying the HTML verbatim.
