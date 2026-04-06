# GitHub Copilot Instructions — HC ServiClean

## Project
Astro 4 + Tailwind CSS 3 static website for HC ServiClean LLC (residential cleaning, Fishers, Indiana).
Hosted on GitHub Pages. Auto-deployed via GitHub Actions on push to `master`.

## Code Standards

### Astro Components
- Mobile-first Tailwind classes. Default = mobile. Use `sm:` `md:` `lg:` `xl:` to scale up.
- Semantic HTML only: `<section>`, `<article>`, `<nav>`, `<aside>`, `<main>`, `<header>`, `<footer>`
- Every `<section>` needs `aria-labelledby` (point to its `<h2>`) or `aria-label`
- `<h1>` once per page only. Sections use `<h2>`. Cards use `<h3>`.
- All `<img>` need: `alt=""`, explicit `width`, `height`, `loading="lazy"` (except hero: `loading="eager"` + `fetchpriority="high"`)

### TypeScript / React Islands
- Strict TypeScript — no `any`
- Functional components, `interface` for props
- React islands use Astro's `client:visible` directive

### Accessibility (WCAG 2.2 AA)
- All buttons/links: `focus-visible:ring-2 focus-visible:ring-teal`
- Minimum touch target: 44×44px
- Form inputs: visible `<label>` + `for`/`id` pairing. Not just placeholder text.
- `required` fields: add `aria-required="true"` + visible asterisk

## Brand Colors & Contrast Rules
- `teal` = `#52b6bc` — use as background or icon/border only, NEVER as text on white (fails WCAG)
- `gold` = `#ffca3c` — primary button bg, always with `text-slate-900` on top (10.2:1 contrast)
- Body text: `text-slate-700` on white backgrounds
- Headings: `text-slate-900`

## Do Not
- Add jQuery, Bootstrap, or CDN CSS frameworks
- Use `!important`
- Use `px` font sizes (use Tailwind scale)
- Modify FormSubmit.co action URLs
- Delete `public/CNAME`
- Commit `.env` or secrets
