# Marcianno Bexley & District ABC

> Building Strength. Building Community.

Boxing club website — Welling, Bexley, Kent.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Sanity CMS · Vercel

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/                     Next.js App Router pages
  layout.tsx             Root layout (fonts, skip link)
  page.tsx               Home page
  coaches/page.tsx
  community/page.tsx
  classes/page.tsx
  fights/page.tsx
  contact/page.tsx
  globals.css            CSS custom properties (brand tokens)

components/
  layout/
    Nav.tsx              (Phase 2)
    Footer.tsx           (Phase 2)
  shared/
    SectionHeader.tsx    (Phase 2)
    Button.tsx           (Phase 2)
  home/                  (Phase 3)
  coaches/               (Phase 4)
  fights/                (Phase 4)

lib/
  types.ts               TypeScript interfaces
  data.ts                Static content (Sanity fallback)

public/
  logos/                 All logo PNGs — add manually (see below)
  images/                Team photos — add manually (see below)

sanity/                  Sanity Studio (Phase 5)
```

---

## Build Phases

| Phase | Scope |
|-------|-------|
| 1 ✅  | Project setup, tokens, fonts, data layer |
| 2     | Nav, Footer, SectionHeader, Button |
| 3     | Home page — all sections |
| 4     | Inner pages — Coaches, Community, Classes, Fights, Contact |
| 5     | Sanity CMS, contact form email, SEO, deploy |

---

## Manual Steps Required

### Assets — add to `/public/logos/`
- `MARCIANNO_ABC_LOGO_WHITE_RGB.png`
- `MARCIANNO_ABC_LOGO_COLOUR_WITH_TAG_LINE_RGB.png`
- `MARCIANNO_ABC_LOGO_COLOUR_RGB.png`
- `MARCIANNO_ABC_LOGO_COLOUR_3_RGB.png`
- `MARCIANNO_ABC_LOGO_BLACK.png`

### Assets — add to `/public/images/`
- `2026-06-18_20_52_09.jpeg` — Junior team shot
- `2026-06-18_20_52_13.jpeg` — Senior team shot

---

## Environment Variables

Create `.env.local` for Phase 5 (Sanity + Resend):

```env
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
RESEND_API_KEY=your_resend_key
```

---

## Domain

`marcianno-abc.com` — configure on Vercel after first deployment.
