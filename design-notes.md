# Quiet Architectural Luxury — Creative & Design Notes
**Studio:** Arun Saini Architects (Private Concept Preview)  
**Author:** Creative Direction & Lead Systems Engineering  
**Version:** 1.0 (Demo Release)

---

## 1. Visual Philosophy & Creative Identity
The design system for Arun Saini Architects is built on the concept of **Quiet Architectural Luxury**:
- **Atmosphere:** Evokes an international architectural publication (e.g. *The Architectural Review*, *Cereal*, *Ark Journal*) rather than a templated commercial agency.
- **Rhythm:** Generous whitespace, deliberate line hierarchy, disciplined margins, and quiet pauses between dense visual spreads.
- **Honesty & Integrity:** All client-facing copy is explicitly identified as provisional demo content. No fabricated awards, years of experience, customer statistics, or architectural licenses are claimed.

---

## 2. Color Palette & Precise Tokens
| Token | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| **Ink** | `#191919` | Deep primary typographic color, dark hero sections, footer background |
| **Warm Ivory** | `#F7F5F0` | Default body canvas background; soft, tactile, high legibility |
| **Paper** | `#FFFEFC` | Card and modal surfaces, crisp high-light areas |
| **Soft Stone** | `#E9E5DD` | Subtle secondary backgrounds, hairline borders, muted badges |
| **Muted Brass** | `#9B815D` | Restrained architectural accent, progress bars, active pips. Never primary body text. |
| **Slate** | `#73716E` | Secondary captions, metadata, dates, non-intrusive footnotes |
| **Border** | `rgba(25, 25, 25, 0.14)` | Fine 1px editorial dividing lines, grid gutters |

---

## 3. Typography Scale & Pairing
- **Display & Headlines:** *Cormorant Garamond* (light, regular, italic). Expressive serif with subtle classical proportions.
- **Navigation & UI Body:** *Manrope* (regular, medium, semibold). Clean, geometric sans-serif engineered for modern digital interfaces and screen legibility.
- **Line Length:** 55–75 characters per measure for paragraphs. Deliberate non-breaking spaces on critical headings to prevent single-word orphan wraps on mobile viewports (320px–390px).

---

## 4. Curated Photographic Hierarchy
All imagery is strictly derived from the 7 supplied interior photographs:
1. **`01-dining-open-plan.jpg` (Lead Hero):** Primary homepage opening slide. Open-plan entertaining space with teal seating, timber table, geometric lighting, and stone flooring.
2. **`02-navy-bedroom-primary.jpg` (Supporting Hero):** Secondary homepage hero slide and primary image for *Indigo Retreat* case study.
3. **`03-blush-bedroom-primary.jpg` (Supporting Hero):** Tertiary hero slide and primary for *Blush Residence* case study.
4. **`04-navy-bedroom-seating.jpg`:** Second perspective with blue lounge chairs.
5. **`05-mauve-lounge.jpg`:** Primary feature image for the homepage 60/40 architectural moment and *Living Atelier* case study.
6. **`06-dining-lounge-secondary.jpg`:** Secondary dining angle with full-height curtains and wood door.
7. **`07-blush-bedroom-wardrobe.jpg`:** Secondary blush bedroom angle with wardrobe wall and round artwork.

---

## 5. Motion Timing & Interaction Rules
- **Duration:** 550ms to 750ms ease-out transitions for reveals. Fast transitions (<400ms) for modal and route changes.
- **Distance:** Subtle vertical translation of 16px to 24px maximum. No cartoonish bouncing or infinite scroll spins.
- **Reduced Motion:** Fully honors `prefers-reduced-motion: reduce` by setting opacity directly to 1 without translation.
- **Interactive Elements:** Minimum touch target `44px x 44px`. Clear focus rings for full keyboard accessibility.
