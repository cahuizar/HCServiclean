# HC ServiClean — Claude Code Instructions

This file is automatically read by Claude Code at the start of every session.
It ensures consistent coding standards across all AI-assisted development.

## Project Overview

**Site:** hcserviclean.com — residential house cleaning company website
**Owner:** Carlos's mom, HC ServiClean LLC, Fishers, Indiana
**Hosting:** GitHub Pages, auto-deployed via GitHub Actions on push to `master`
**Local dev:** `npm install` → `npm run dev` → http://localhost:4321

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| SSG | Astro 4.x | Static HTML output, zero JS by default |
| CSS | Tailwind CSS 3.x | Mobile-first, utility-first |
| JS | None by default | Only tiny inline `<script>` tags for Nav toggle |
| Future form | React island via `client:visible` | See `EstimateFormIsland.tsx` |
| Forms | FormSubmit.co | Hashed endpoints — preserve exactly |
| Deploy | GitHub Actions | `.github/workflows/deploy.yml` |

## Site Structure

| Page | File | URL |
|---|---|---|
| Home | `src/pages/index.astro` | `/` |
| Services | `src/pages/services.astro` | `/services` |
| About | `src/pages/about.astro` | `/about` |
| FAQ | `src/pages/faq.astro` | `/faq` |
| Estimate | `src/pages/estimate.astro` | `/estimate` |
| 404 | `src/pages/404.astro` | `/404` |

Content data lives in `src/data/` — edit services, FAQs, and testimonials there.

## Per-File-Type Standards

### `.astro` files
- **Mobile-first Tailwind only** — default class = mobile, breakpoint prefixes add up (`sm:`, `md:`, `lg:`, `xl:`)
- No inline `style=""` attributes — use Tailwind or `<style>` scoped blocks
- No arbitrary Tailwind values (`w-[347px]`) unless absolutely necessary
- Semantic HTML: use `<section>`, `<article>`, `<nav>`, `<aside>`, `<main>`, `<header>`, `<footer>`
- Every `<section>` needs `aria-labelledby` pointing to its heading, OR `aria-label`
- Heading hierarchy enforced: `<h1>` once per page, `<h2>` for sections, `<h3>` for cards
- All `<img>` must have descriptive `alt` text; decorative images use `alt=""`
- All `<img>` must have explicit `width` and `height` attributes (prevents CLS)
- `loading="lazy"` on all images except the hero (LCP image gets `loading="eager"` + `fetchpriority="high"`)
- No `<div>` for headings — use actual heading elements

### `.tsx` files (React islands)
- Functional components only
- TypeScript strict — no `any` types
- All props typed with `interface` (not `type`)
- `export default` for the component

### `src/data/*.ts` files
- Typed arrays of typed objects only
- Export the type interface AND the data array
- No magic strings — use typed union types for categories/enums

### `src/styles/global.css`
- Only `@tailwind` directives and `@layer` blocks
- No overriding Tailwind utilities here — put those in component `<style>` blocks
- CSS custom properties are okay

## Brand Colors (Tailwind tokens)

| Token | Hex | Usage |
|---|---|---|
| `teal` | `#52b6bc` | Backgrounds, borders, icons, accents |
| `teal-dark` | `#3d9aa0` | Hover states on teal elements |
| `gold` | `#ffca3c` | Primary button backgrounds |
| `gold-dark` | `#e6b400` | Hover states on gold buttons |

### WCAG Contrast Rules (DO NOT VIOLATE)
- **NEVER** use `text-teal` on a white background — contrast ratio is only 2.7:1 (fails AA)
- **ALWAYS** use dark text (`text-slate-900` or `text-slate-800`) on teal backgrounds
- **ALWAYS** use dark text (`text-slate-900`) on gold backgrounds — contrast is 10.2:1 (AAA)
- Body text: `text-slate-700` on white = 7.5:1 ✅ (AAA)
- Headings: `text-slate-900` on white = 16.8:1 ✅ (AAA)

## Accessibility Rules (WCAG 2.2 AA)

- Skip-to-content link is in `BaseLayout.astro` — don't remove it
- All interactive elements need `focus-visible:ring-2 focus-visible:ring-teal`
- Minimum touch target: 44×44px for all buttons, links, form inputs
- Form inputs must have visible `<label>` — not just `placeholder`
- Required fields: `required` attribute + `aria-required="true"` + visible asterisk
- No `tabindex` greater than 0
- `<details>`/`<summary>` for FAQ — native, keyboard accessible, zero JS

## SEO Rules

- Every page **must** pass `title`, `description`, and `canonical` props to `BaseLayout.astro`
- Title: max 60 chars, include brand name
- Description: 150–160 chars, include location keywords
- Canonical: always absolute URL (`https://hcserviclean.com/path`)
- `<h1>` exactly once per page
- No missing `alt` text — Lighthouse will catch it
- JSON-LD schemas are in `BaseLayout.astro` (LocalBusiness) and `faq.astro` (FAQPage)

## What NOT to Do

- ❌ No jQuery
- ❌ No Bootstrap
- ❌ No CDN-loaded CSS frameworks
- ❌ No `!important` in styles
- ❌ No `px` font sizes (use Tailwind scale: `text-sm`, `text-base`, `text-lg`, etc.)
- ❌ No new npm dependencies without discussing with Carlos first
- ❌ No committing `.env` files, API keys, or passwords
- ❌ No removing the `CNAME` file from `public/` (breaks custom domain)
- ❌ No modifying the FormSubmit.co action URLs (forms will break)

## Branch & Deploy Workflow

1. All changes on branch `feature/modernize-astro`
2. Push to trigger GitHub Actions preview (if PR environment is set up)
3. Merge to `master` → auto-deploys to https://hcserviclean.com
4. GitHub repo Settings → Pages → Source must be set to "GitHub Actions"

## Analytics & Forms

- **GA4:** Snippet is commented out in `BaseLayout.astro` — uncomment and replace `G-XXXXXXXXXX` with the real measurement ID once the GA4 property is created at analytics.google.com
- **Estimate form:** `https://formsubmit.co/6474b868cfc023f9e72071099eff7d6d` — do not change
- **Newsletter form:** `https://formsubmit.co/18b17300afc0862f33349630a5af1370` — do not change

## Future Work (Phase 2)

See `src/components/estimate/EstimateFormIsland.tsx` for the scaffold.
When ready to build the multi-step form:
1. Implement the React component in `EstimateFormIsland.tsx`
2. In `src/pages/estimate.astro`, replace `<EstimateForm />` with `<EstimateFormIsland client:visible formAction="..." />`

See `.github/PROJECT.md` for full architecture details.
