```md
# Aldeia Djembe Camp (ADC) — Design System + Build Prompt (OpenCode / Next.js / Tailwind)

This document defines the **design direction + implementation constraints** for the new ADC website.

The site should feel **sun-warmed, rhythmic, nature-immersed, and communal**—welcoming and human, never corporate.

> Like a late afternoon drum circle in golden light.

Not:
- A product store
- A festival ad
- A trendy design experiment

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v3
- **Fonts:** Custom fonts + Google Fonts
  - Display: `Gardaempty` (Custom/Local)
  - Body: `Inter` (400, 500, 600)
- **Animations:** Framer Motion (single reveal system only)
- **Images:** `next/image` (always)
- **Logo:** Black and White (Primary)
- **Icons:** `lucide-react` (minimal)
- **CMS-ready:** Components must accept props so content can be wired later

---

## Brand Keywords

Belonging, rhythm, warmth, immersion, nature, joy, simplicity, trust, celebration.

---

## Color System — “ADC Modern”

Logo is Black and White. The website uses Charcoal, White, and #C4D656 (Lime Pop).

Extend `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      charcoal: '#121212', // primary dark / text
      lime: '#C4D656',     // branding pop / accent / CTAs
      white: '#FFFFFF',    // pure base
      black: '#000000',    // logo reference / deep accents
      muted: '#F5F5F5',    // light gray for subtle offsets
    },
    fontFamily: {
      display: ['Gardaempty', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    spacing: {
      section: '8rem',
      'section-sm': '5rem',
    },
    borderRadius: {
      organic: '3rem',
      section: '5rem',
    },
  },
}
```

### Color usage rules

- Default text: `charcoal` on `white`.
- On dark backgrounds: use `white` or `lime` for text.
- Use `lime` (#C4D656) as the “energy accent” (CTAs, key highlights).
- Logo usage: Always use the Black/White version.

---

## Typography System

### Display / Hero

- Font: `Gardaempty`
- Uppercase usually preferred for impact
- Hero size: `text-[18vw]` (desktop)
- Leading: `leading-[0.85]`
- Tracking: `tracking-[-0.01em]` (adjust for Gardaempty)

### Section Titles

- Desktop: `text-[12vw]`
- `font-display uppercase`

### Body

- Font: `Inter`
- Weights: 400 / 500 / 600 only
- `leading-relaxed`
- Labels + buttons:
  - uppercase
  - `text-xs`
  - `tracking-[0.25em]`

---

## Organic Shape System

No sharp rectangles.

- Sections: `rounded-t-section` (5rem)
- Cards/images: `rounded-organic` (3rem)
- Buttons: `rounded-full`

Texture comes from **photography**, not UI overlays.

---

## Motion System — “Drum Pulse”

Use **one** motion signature across the site:

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Reveal: `opacity: 0, y: 60` → `opacity: 1, y: 0`
- Duration: `0.9s`
- `once: true` always
- No bounce, no blur, no rotation on reveal

---

## Global Styles (`app/globals.css`)

```css
html { scroll-behavior: smooth; }

body {
  background: #FFFFFF;
  color: #121212;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: #C4D656;
  color: #121212;
}
```

Rules:
- No global noise overlay.
- No constant decorative textures.
- No heavy gradients.

---

## Layout Structure

Vertical storytelling with **color-blocked sections**.
Alternate warm lights (cream/sand) with grounded tones (sage/forest/clay) to create a calm rhythm.

Recommended homepage flow:
1. Hero (`white`)
2. Workshops overview (`white`)
3. Teachers / Musicians (`muted`)
4. Accommodation + Food (`white`)
5. Testimonials (`charcoal`)
6. Where / How to get there (`white`)
7. CTA / Registration (`lime`)
8. Footer (`black`)

---

## Header / Navigation

- Fixed top nav
- Starts transparent
- After scroll:
  - background `rgba(251,247,239,0.85)`
  - `backdrop-blur-md`
  - subtle border bottom (forest @ ~10% opacity)

Layout:
- Left: wordmark `— ALDEIA DJEMBE CAMP` in `font-display`
- Center: nav links (uppercase, tracked)
- Right: primary CTA button “Inscreve-te”

Interaction:
- Hover uses `lime`
- Mobile menu is simple and accessible (no flashy transitions)

---

## Hero Section

- Full viewport height
- Background: `white`
- Centerpiece: massive type:

DJEMBE  
CAMP

Stagger letters (0.04s per letter).

Under hero: two-column block:
- Left: short poetic intro (max 3 lines)
- Right: date + location (uppercase labels)

### Floating elements (optional but recommended)

Include 2–3 warm, organic images:
- drums
- dancers
- nature textures

Floating animation:
- 0%,100%: translateY(0)
- 50%: translateY(-12px)

Parallax max factor: 0.04  
No rotation.

---

## Workshops Section

Background: `cream`, rounded top.

- Title: `WORKSHOPS` (giant display)
- 3 columns:
  - Djembe
  - Dança
  - Balafon

Card style:
- background `sand`
- `rounded-organic`
- generous padding

Hover:
- translateY(-6px)
- soft shadow tinted with forest at ~15%
- NO overlays
- NO image scale above 1.03

---

## Teachers / Musicians

Background: `sage`.

Grid of profiles:
- Portraits: circular or softly rounded
- Name: `font-display uppercase`
- Role/instrument: `text-xs tracking-[0.25em]` in `charcoal` / `lime`

Hover:
- image scale max 1.03
- no overlay

---

## Testimonials

Background: `charcoal`.  
Text: `white` / `lime`.

- No carousel
- Stacked quotes
- Quote typography: `font-display`, large, italic, calm

No star ratings.  
No quote icons.

---

## Accommodation / Food

Alternate backgrounds: `white` and `muted`.

- Two-column layout
- One large image with `rounded-organic`
- Copy is practical, reassuring, and warm

---

## CTA / Registration

Background: `lime`.  
Text: `charcoal`.

Heading: `JOIN THE RHYTHM`.

Primary button:
- bg: `white`
- text: `charcoal`
- `rounded-full`
- hover invert: bg `charcoal`, text `white`

No glow.  
No gradients.  
No “salesy” language.

---

## Footer

Background: `black`.  
Text: `white` at ~70% opacity.

12-col grid:
- Left: short closing line (human)
- Middle: nav
- Right: newsletter

Newsletter input:
- underline-only
- uppercase placeholder
- minimal

---

## Absolute Rules (Never Break)

- No stock photography.
- No noise overlay.
- No sharp corners.
- No gradients heavier than 10%.
- No animation duration below 500ms.
- No carousels/sliders.
- No product-style hover overlays.
- All images must use `next/image` with proper `alt`.
- All interactive elements must be keyboard accessible.

---

## Calibration Check (Run Before Every Section)

Ask:
1. Does this feel like sunset?
2. Does this feel human?
3. Does this feel rhythmic but calm?
4. Does this feel welcoming to someone traveling there?

If any answer is “no” — simplify.

---

## Definition of Done

The site is complete when a visitor thinks:

> “This is not just a workshop. This is a gathering.”
```