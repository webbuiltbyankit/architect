# Arun Saini Architects — Private Concept Preview

A portfolio-first, luxury architectural and interior design digital concept built in **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **React Router v7**, and **Motion**.

> **Important Concept Preview Notice**  
> This application is a private preview demo. Project imagery, titles, and descriptions are curated design studies for client presentation and review. Factual client details, built-work attribution, and licenses are provisional until formal client approval.

---

## 1. Technical Stack
- **Framework:** React 19 + TypeScript + Vite 6
- **Styling:** Tailwind CSS v4 with custom CSS variables and fluid typography clamp tokens
- **Routing:** React Router v7 (`BrowserRouter` with `ScrollToTop` restoration)
- **Animation:** Motion for React (`motion/react`) with full `prefers-reduced-motion` compliance
- **Forms & Validation:** React Hook Form + Zod
- **Icons:** Lucide React
- **Local Persistence:** Zero-backend `localStorage` inquiries repository

---

## 2. Directory Structure
```
architect/
├── public/
│   ├── _redirects               # Netlify SPA redirect
│   └── images/
│       ├── brand/               # Brand logo reference
│       └── projects/            # 7 unique supplied interior photographs
│           ├── 01-dining-open-plan.jpg
│           ├── 02-navy-bedroom-primary.jpg
│           ├── 03-blush-bedroom-primary.jpg
│           ├── 04-navy-bedroom-seating.jpg
│           ├── 05-mauve-lounge.jpg
│           ├── 06-dining-lounge-secondary.jpg
│           └── 07-blush-bedroom-wardrobe.jpg
├── src/
│   ├── components/
│   │   ├── common/              # Button, ImageComponents, Lightbox, FaqAccordion, Motion
│   │   ├── layout/              # Container, Section, EditorialGrid, SplitPanel
│   │   ├── navigation/          # Navbar, Footer, ScrollToTop
│   │   └── portfolio/           # ProjectCard
│   ├── data/
│   │   ├── site.ts              # Central SiteConfig, Navigation, Sectors, FAQs
│   │   ├── projects.ts          # 4 Curated Design Studies
│   │   └── copy.ts              # Editorial copy, services scopes, workflows
│   ├── pages/
│   │   ├── HomePage.tsx         # Cinematic 3-slide hero, statement, split feature, services
│   │   ├── StudioPage.tsx       # Philosophy, #approach timeline, values
│   │   ├── ServicesIndexPage.tsx# 4 alternating discipline features
│   │   ├── ServiceDetailPage.tsx# Full service scopes, FAQs, prefilled CTAs
│   │   ├── ProjectsIndexPage.tsx# URL-synced filters, aria-live counts, grid
│   │   ├── ProjectDetailPage.tsx# Full case study, palette, observations, Lightbox
│   │   ├── SectorsPage.tsx      # 5 honest sectors with prefilled inquiry links
│   │   ├── ContactPage.tsx      # Validated inquiry form, WhatsApp draft, local storage
│   │   ├── PrivacyPage.tsx      # Demo privacy disclosure & data erasure
│   │   ├── StyleGuidePage.tsx   # Visual token & font sampler
│   │   └── NotFoundPage.tsx     # Custom 404 with recovery navigation
│   ├── styles/
│   │   └── index.css            # Design tokens, typography scale, resets
│   ├── utils/
│   │   ├── inquiries.ts         # LocalStorage demo repository & WhatsApp draft URL
│   │   ├── seo.ts               # Dynamic route metadata & strict noindex enforcement
│   │   └── telemetry.ts         # Non-personal local diagnostic telemetry (default OFF)
│   ├── App.tsx
│   └── main.tsx
├── design-notes.md              # Creative direction: Quiet Architectural Luxury
├── APPROVAL_CHECKLIST.md        # Client sign-off requirements for live deployment
└── TESTING.md                   # Verification and QA checklist
```

---

## 3. Running Locally
```bash
# 1. Install dependencies
npm install

# 2. Start the Vite development server
npm run dev

# 3. Verify TypeScript compilation
npm run typecheck

# 4. Create production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 4. Route Map
- `/` — Homepage: Full-height 3-slide hero, studio statement, asymmetrical work gallery, mauve lounge split-feature, services hover preview, illustrative 3-part philosophy, sector discovery, and conversion CTA.
- `/studio` — Studio & Philosophy: "A thoughtful approach to space", vertical workflow timeline (`#approach`), core values (Context, Craft, Clarity).
- `/services` — Services Index: Practice overview with 4 alternating discipline feature cards.
- `/services/:slug` — Dedicated Service Details:
  - `/services/architecture`
  - `/services/interior-design`
  - `/services/space-planning`
  - `/services/design-consultation`
- `/projects` — Projects Index: 4 visual studies, interactive filtering (`All`, `Dining & Social`, `Bedrooms`, `Living`), URL query synchronization (`?filter=...`), and `aria-live` counter.
- `/projects/:slug` — Dedicated Case Studies:
  - `/projects/the-entertaining-suite` (Dining pair)
  - `/projects/indigo-retreat` (Navy bedroom pair)
  - `/projects/blush-residence` (Blush bedroom pair)
  - `/projects/living-atelier` (Mauve lounge)
  - Includes fullscreen contain-scale photo lightbox with keyboard navigation.
- `/sectors` — Sectors of Engagement: Residential, Commercial, Institutional, Healthcare, and Hospitality with prefilled CTAs and honest evidence boundaries.
- `/contact` — Contact & Consultation: Form validation with React Hook Form + Zod, URL prefilling (`?service=...&project=...`), WhatsApp draft generator, local-only confirmation panel, and demo inquiries reset control.
- `/privacy` — Privacy & Demo Disclosure with a browser data erasure tool.
- `/style-guide` — Visual token and typography sampler.
- `*` — Sitewide branded 404 recovery page.

---

## 5. Inquiry & Privacy Architecture
- All contact inquiries validate through Zod client-side schemas.
- Records are saved with safe IDs in `localStorage` under `arun_saini_demo_inquiries_v1`.
- A success panel explicitly reminds the visitor that entries are stored locally on their device and have **not** been sent to the studio.
- Visitors can copy their inquiry text or generate an unsubmitted WhatsApp share draft (`https://wa.me/?text=...`).
- A "Reset demo enquiries" control is provided in the contact diagnostics panel and on `/privacy`.
