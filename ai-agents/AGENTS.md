# ADC Website 2026 — AI Agent Context

> **Use this file at the start of every session to sync context.**

## Quick Sync Command

When starting a new session, run this slash command:

```
/sync
```

Or say: **"Sync with the codebase"**

This tells the AI to:
1. Read this file for project context
2. Review the current file structure
3. Check recent git changes
4. Verify build status

---

## Project Overview

**Aldeia Djembe Camp (ADC) Website 2026**

A Next.js 16 website for a West African drumming and dance retreat in Portugal. The design emphasizes warmth, rhythm, nature, and community — "like a late afternoon drum circle in golden light."

### Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body), system fallback for display (Gardaempty planned)

### Design System

**Colors:**
- `--color-charcoal`: #121212 (primary text)
- `--color-lime`: #C4D656 (accent/CTAs)
- `--color-cream`: #FBF7EF (nav background)
- `--color-sand`: #F5F0E8 (card backgrounds)
- `--color-sage`: #8B9A7D (section backgrounds)
- `--color-forest`: #2D3B2D (deep accents)

**Typography:**
- Display: `.font-display` — uppercase, tight leading, large scale
- Body: Inter 400/500/600
- Labels: uppercase, `text-xs`, `tracking-[0.25em]`

**Motion:**
- Easing: `[0.16, 1, 0.3, 1]` — "Drum Pulse"
- Reveal: `opacity: 0, y: 60` → `opacity: 1, y: 0`
- Duration: 0.9s
- Once: true (no repeat animations)

**Shapes:**
- Sections: rounded-t-section (5rem)
- Cards/images: rounded-organic (3rem)
- Buttons: rounded-full

---

## Architecture

### File Structure
```
app/
├── globals.css          # Design system + Tailwind config
├── layout.tsx           # Root layout, Inter font, metadata
├── page.tsx             # Homepage composition
└── favicon.ico

components/
├── header.tsx           # Fixed nav with scroll state
├── hero.tsx             # Hero with staggered text animation
└── workshops.tsx        # Workshop cards grid

ai-agents/
├── instructions.md      # Coding standards & best practices
├── design-Instructions.md # Detailed design system spec
└── AGENTS.md            # This file
```

### Component Patterns
- All section components are Client Components ("use client")
- Framer Motion for scroll-triggered reveals
- `useInView` hook for viewport detection
- Custom easing defined as: `const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]`

---

## Current Status

### Completed Sections
1. **Header** — Fixed nav, transparent→cream on scroll, mobile menu
2. **Hero** — Staggered letter animation, two-column info block
3. **Workshops** — 3-card grid (Djembe, Dança, Balafon)

### Pending Sections
- Teachers / Musicians
- Testimonials
- Accommodation + Food
- Location / How to get there
- CTA / Registration
- Footer

### Recent Changes
- Added Framer Motion dependency
- Fixed TypeScript typing for easing arrays
- Created font-display fallback in CSS

---

## Build Status

```bash
npm run build    # ✓ Passing
npm run dev      # Development server
```

---

## Key Decisions

1. **No carousels/sliders** — per design instructions
2. **No stock photography** — placeholder until real images
3. **Portuguese copy** — primary language for content
4. **Mobile-first** — responsive breakpoints at md (768px) and lg (1024px)
5. **Static export** — configured for static site generation

---

## How to Use This File

**At the start of each session:**

1. Read this file
2. Check what sections are pending
3. Ask: "What should we build next?"

**When making changes:**

1. Update "Current Status" section
2. Add to "Recent Changes"
3. Document any new patterns or decisions

**Slash Commands:**

- `/sync` — Read this file and sync context
- `/status` — What's the current build status?
- `/next` — What section should we build next?

---

Last Updated: 2026-02-27
Current Branch: main
