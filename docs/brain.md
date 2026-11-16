# MedWorks – Project Brain & Overview

## 1. Executive Summary

**MedWorks** is a modern, high-performance web application designed for a premier medical technology company specializing in advanced diagnostic systems, precision surgical robotics, and clinical imaging equipment (such as C-Arm X-Ray systems, refractor keratometers, and Doppler ultrasound devices).

The platform serves as both a high-converting digital storefront and an interactive demonstration portal, providing healthcare practitioners and medical institutions with seamless access to equipment specs, operational workflows, and real-time demonstration scheduling.

---

## 2. Core Value Proposition & Page Anatomy

The application is structured into clearly delineated, accessible, and reactive functional modules:

| Section | Component File | Description & Functionality |
| :--- | :--- | :--- |
| **Header Navigation** | [`src/components/sections/Navbar.tsx`](file:///c:/Drive/MedWorks/src/components/sections/Navbar.tsx) | Sticky blur-backdrop header, dropdown sub-navigation menus, and a responsive mobile drawer. Features a compact, auto-scaling "Schedule a Demo" button. |
| **Hero Section** | [`src/components/sections/Hero.tsx`](file:///c:/Drive/MedWorks/src/components/sections/Hero.tsx) | High-impact headline with fluid clamp typography, primary CTA ("Start Program"), secondary documentation jump link, and product preview cards. |
| **Dynamic Marquees** | [`src/components/ui/Marquee.tsx`](file:///c:/Drive/MedWorks/src/components/ui/Marquee.tsx) | Infinitely scrolling ticker banners ("Our Technology" / "Start Program Now") pausing on hover and obeying reduced-motion settings. |
| **Features Section** | [`src/components/sections/Features.tsx`](file:///c:/Drive/MedWorks/src/components/sections/Features.tsx) | Visual showcase highlighting core robotic equipment (C-arm Robot Isometric and C-Arm X-Ray Machines) with frosted glass overlay blur. |
| **Technology Grid** | [`src/components/sections/Technology.tsx`](file:///c:/Drive/MedWorks/src/components/sections/Technology.tsx) | Dark-themed grid spotlighting diagnostic devices (Gemology Microscope, Refractor Keratometer, Doppler Ultrasound) in dashed border cards. |
| **How It Works** | [`src/components/sections/HowItWorks.tsx`](file:///c:/Drive/MedWorks/src/components/sections/HowItWorks.tsx) | Interactive 4-step accordion (Predictive Analytics, Care Coordination, Patient Engagement, Continuous Monitoring) featuring floating 3D-angled artwork on desktop and expandable drawers on mobile. |
| **Contact & Booking** | [`src/components/sections/Contact.tsx`](file:///c:/Drive/MedWorks/src/components/sections/Contact.tsx) | Full demo booking form with real-time field validation, date picker with dynamic minimum constraint, time-slot selection, and success state handling. |
| **Footer** | [`src/components/sections/Footer.tsx`](file:///c:/Drive/MedWorks/src/components/sections/Footer.tsx) | Brand mission summary, social media links, multi-column directory navigation, newsletter subscription input with regex verification, and legal links. |

---

## 3. Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: TypeScript (`strict: true`, custom interfaces for data integrity)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with pure CSS animation tokens and utility classes
- **Typography**: [Google Fonts](https://fonts.google.com/) via `next/font/google`:
  - `Raleway`: Clean, architectural headings (`--font-raleway`)
  - `Inter`: High-legibility neutral body font (`--font-inter`)
- **Animation & Motion**:
  - Intersection Observer API for progressive on-scroll reveals ([`src/components/ui/Reveal.tsx`](file:///c:/Drive/MedWorks/src/components/ui/Reveal.tsx))
  - Keyframe CSS animations for continuous tickers ([`src/app/globals.css`](file:///c:/Drive/MedWorks/src/app/globals.css))
  - Full accessibility compliance with `prefers-reduced-motion`

---

## 4. Key Architectural Patterns & Conventions

### 4.1 Content Decoupling (Single Source of Truth)
All client-facing copy, equipment specifications, navigation items, and time slot configurations reside inside [`src/data/content.ts`](file:///c:/Drive/MedWorks/src/data/content.ts). To update marketing copy or add product lines, developers and AI agents modify this file without touching UI components.

### 4.2 Non-Blocking Prerendering (Next.js Static Generation)
Non-deterministic browser values (such as `new Date()`) are never called synchronously inside component render passes. In [`src/components/sections/Contact.tsx`](file:///c:/Drive/MedWorks/src/components/sections/Contact.tsx), dynamic date computation is deferred to a `useEffect` hook to prevent SSR/Turbopack prerender bailouts.

### 4.3 Clean Composition Root
The main entry point [`src/app/page.tsx`](file:///c:/Drive/MedWorks/src/app/page.tsx) is purely a composition orchestrator. It imports and renders modular section components, ensuring code readability and simplified testing.

### 4.4 Granular SVG Medical Illustrations
Custom medical device illustrations are isolated as first-class React SVG components under [`src/components/art/`](file:///c:/Drive/MedWorks/src/components/art/). They utilize a shared gradient definition component ([`Defs.tsx`](file:///c:/Drive/MedWorks/src/components/art/Defs.tsx)) for unified metallic and display screen aesthetics.

---

## 5. Development & Operational Commands

```bash
# Start local development server with Hot Module Replacement
npm run dev

# Build optimized production bundle with TypeScript type-checking
npm run build

# Start production server
npm run start

# Run ESLint linter
npm run lint
```
