# Elite Exped — Design System & Color Grading Specification

> Comprehensive design specification, color palette tokens, typography system, photographic color grading profile, and component schema reverse-engineered from [Elite Exped](https://www.eliteexped.com/).

---

## 1. Brand Identity & Aesthetic Philosophy

Elite Exped's design language is **"Editorial High-Altitude Luxury"**. It bridges two worlds:
1. **Technical Mountaineering Utility:** Precision data, altitude readouts, GPS-style monospace metrics, and high-visibility safety accents.
2. **Ultra-Premium Adventure Travel:** Editorial serif headlines, cinematic full-bleed 4K mountain videography, generous negative space, and refined dark-mode contrast.

---

## 2. Color Palette & Token Hierarchy

### 2.1 Core Palette Tokens

```css
:root {
  /* --- Primary Brand Accent --- */
  --color-accent-orange: #F77F3C;        /* Signature Elite Exped Alpine Orange */
  --color-accent-orange-hover: #E06927;  /* Deepened amber on interaction */
  --color-accent-gold: #C5A059;          /* Himalayan Peak Gold */
  --color-accent-red: #A90707;           /* Expedition Warning / Accent Red */

  /* --- Dark Theme Backgrounds (Obsidian / Matte Slate) --- */
  --color-bg-dark: #1E1E1E;              /* Primary Dark Surface */
  --color-bg-deep: #0D0A0A;              /* Deep Obsidian Black (Hero base) */
  --color-bg-surface-elevated: #262626;  /* Card & Modal Surface */
  --color-bg-surface-subtle: #121416;    /* Dark Charcoal Section Slice */

  /* --- Light Theme Slices (Glacial Snow & Clean Stone) --- */
  --color-bg-light: #FFFFFF;             /* Pure Glacial White */
  --color-bg-light-alt: #F5F5F5;         /* Soft Gray Stone */
  --color-bg-light-border: #EAEAEA;      /* Light Divider */

  /* --- Typography & Foreground Colors --- */
  --color-text-light-primary: #FFFFFF;   /* High-contrast pure white text */
  --color-text-light-secondary: #DCDCDC; /* Soft off-white text */
  --color-text-muted-dark: #999999;      /* Subtle muted gray (on dark) */
  
  --color-text-dark-primary: #1E1E1E;    /* Bold charcoal text (on light) */
  --color-text-dark-secondary: #5A5A5A;  /* Secondary descriptive body (on light) */
  --color-text-muted-light: #767676;     /* Caption text */

  /* --- Borders & Outlines --- */
  --border-dark: rgba(255, 255, 255, 0.12);
  --border-light: #DCDCDC;
}
```

### 2.2 Functional Color Swatches

| Role | Hex Code | RGB | Visual Purpose |
|---|---|---|---|
| **Alpine Accent** | `#F77F3C` | `rgb(247, 127, 60)` | Primary buttons, active nav, hover underlines, badges |
| **Obsidian Dark** | `#0D0A0A` | `rgb(13, 10, 10)` | Full-bleed hero background & video backdrop |
| **Matte Charcoal** | `#1E1E1E` | `rgb(30, 30, 30)` | Dark section backgrounds, card containers |
| **Elevated Dark** | `#262626` | `rgb(38, 38, 38)` | Card hover states, dropdown menus, modals |
| **Glacial White** | `#FFFFFF` | `rgb(255, 255, 255)` | Light section background, crisp typography |
| **Stone Gray** | `#F5F5F5` | `rgb(245, 245, 245)` | Secondary section slices, form backgrounds |
| **Slate Body** | `#5A5A5A` | `rgb(90, 90, 90)` | Reading body paragraphs on light backgrounds |

---

## 3. Cinematic Color Grading (Look-Up Table / LUT Profile)

The imagery and video footage on Elite Exped follow a distinct high-altitude editorial color grade:

```
                  CINEMATIC COLOR GRADE CURVE
  Highlights (5500K - Warm Golden Hour Sunlight)
       ▲             /
       │            /  <-- Controlled snow clipping
       │           /
       │     ─────/    <-- Rich natural midtones (skin tones & rock)
       │    /
       │   /           <-- Cool-tinted slate shadows (crushed black)
       └──────────────►
        Shadows
```

### 3.1 Photographic Color Grading Characteristics:
1. **Dynamic Range & Highlights**:
   - Sunlight on snow crests has a warm **Golden Amber highlight roll-off** (`#F77F3C` glow) without blown-out whites.
   - Sky gradients transition from deep glacial cyan-blue to crisp high-altitude cobalt.
2. **Shadows & Blacks**:
   - Shadows are slightly crushed with a neutral matte charcoal floor (`#1E1E1E`), eliminating muddy noise.
3. **Midtone Contrast**:
   - High local micro-contrast on rock faces, snow ridges, and mountaineering down jackets.
4. **Saturation Curve**:
   - Landscape saturation is slightly pulled back (-10%), while high-visibility expedition gear (safety red, alpine orange, neon yellow) remains punchy and vibrant.

### 3.2 CSS Media Filter Emulation:
```css
.cinematic-mountain-media {
  filter: contrast(108%) brightness(96%) saturate(105%);
}
```

---

## 4. Typography System

Elite Exped pairs **Editorial Serif Headlines** with **Technical Monospace Badges** and **Clean Modern Sans Body**:

```
 ┌─────────────────────────────────────────────────────────────┐
 │  TEODOR / EDITORIAL SERIF (Luxury Editorial Headlines)      │
 │  "Conquer the World's Highest Peaks"                        │
 ├─────────────────────────────────────────────────────────────┤
 │  SIMPLON MONO / MONOSPACE (Technical Data, Altitudes, Tags) │
 │  [ 8,848.86M ]  •  [ 60 DAYS ]  •  [ SPRING 2025 ]          │
 ├─────────────────────────────────────────────────────────────┤
 │  SIMPLON NORM / SANS-SERIF (Legible Body & UI Controls)     │
 │  Experience world-class expedition leadership with Nimsdai. │
 └─────────────────────────────────────────────────────────────┘
```

### 4.1 Font Families & Web-Safe Alternatives

| Role | Production Font | Google Font Fallback / Alternative | Weights |
|---|---|---|---|
| **Display / Section Titles** | `Teodor` (Serif) | `Playfair Display`, `Cinzel`, `Cormorant Garamond` | 500, 700 |
| **Technical Data & Badges** | `SimplonMono` (Monospace) | `JetBrains Mono`, `Space Mono`, `IBM Plex Mono` | 400, 500 |
| **Body & UI Elements** | `SimplonNorm` (Sans-serif) | `Inter`, `Helvetica Neue`, `Outfit` | 300, 400, 600 |

### 4.2 Type Scale Hierarchy

```css
/* Display Heading 1 (Hero) */
.hero-heading {
  font-family: 'Teodor', 'Playfair Display', serif;
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--color-text-light-primary);
}

/* Section Title (H2) */
.section-title {
  font-family: 'Teodor', 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 500;
  line-height: 1.15;
  color: inherit;
}

/* Technical Readout & Monospace Badge */
.tech-badge {
  font-family: 'SimplonMono', 'Space Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-orange);
}

/* Body Paragraph */
.body-text {
  font-family: 'SimplonNorm', 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-text-dark-secondary);
}
```

---

## 5. Overlay Gradients & Lighting Curves

To maintain legibility over moving 4K hero video backgrounds and bright snow photos:

```css
/* Hero Video Gradient Overlay */
.hero-gradient-overlay {
  background: linear-gradient(
    180deg,
    rgba(13, 10, 10, 0.4) 0%,
    rgba(13, 10, 10, 0.2) 40%,
    rgba(13, 10, 10, 0.85) 90%,
    #0D0A0A 100%
  );
}

/* Card Bottom Text Scrim */
.card-scrim-overlay {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    transparent 100%
  );
}

/* Ambient Radial Top-Left Glow */
.ambient-glow {
  background-image: radial-gradient(
    ellipse at top left,
    hsla(0, 0%, 100%, 0.05) 0%,
    hsla(0, 0%, 100%, 0) 66%
  );
}
```

---

## 6. UI Components & Interaction Schema

### 6.1 Buttons & Interactive CTAs

```css
/* Primary Action Button (Alpine Orange Pill/Block) */
.btn-primary {
  background-color: var(--color-accent-orange);
  color: #FFFFFF;
  font-family: 'SimplonNorm', 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 14px 36px;
  border: 1px solid transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px rgba(247, 127, 60, 0.25);
}

.btn-primary:hover {
  background-color: var(--color-accent-orange-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(247, 127, 60, 0.4);
}

/* Secondary Outline Button */
.btn-secondary {
  background: transparent;
  color: #FFFFFF;
  font-family: 'SimplonMono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 13px 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  transition: all 0.25s ease;
}

.btn-secondary:hover {
  border-color: var(--color-accent-orange);
  color: var(--color-accent-orange);
  background: rgba(247, 127, 60, 0.05);
}
```

### 6.2 Animated Text Underline (Elite Exped Signature Hover)

```css
.underline-hover {
  position: relative;
  text-decoration: none;
  color: inherit;
}

.underline-hover::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-accent-orange);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}

.underline-hover:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

---

## 7. Layout Structure & Section Rhythm

Elite Exped alternates between **Dark Slices** and **Light Slices** to create pacing:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. HERO SLICE (Dark Mode #0D0A0A)                           │
│    • Fullscreen 4K background video loop                    │
│    • Editorial Serif Title + Monospace metadata badge       │
│    • Glassmorphic 4-column quick-stats bar                  │
├─────────────────────────────────────────────────────────────┤
│ 2. OVERVIEW & PHILOSOPHY (Light Mode #FFFFFF)               │
│    • Clean editorial serif typography                       │
│    • Dual-column narrative + Sherpa leadership credentials  │
├─────────────────────────────────────────────────────────────┤
│ 3. 8000M MOUNTAIN EXPEDITIONS (Dark Mode #1E1E1E)           │
│    • 16:10 aspect ratio high-altitude cards                 │
│    • Hover zoom (scale 1.05) & gradient scrim caption       │
├─────────────────────────────────────────────────────────────┤
│ 4. DETAILED 60-DAY ITINERARY (Light Mode #F5F5F5)           │
│    • Accordion schedule with altitude step badges           │
├─────────────────────────────────────────────────────────────┤
│ 5. LEADERSHIP & TEAM (Dark Mode #121416)                    │
│    • Nimsdai Purja MBE & Mingma David Sherpa profiles       │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Summary Table of Design Specs

| Attribute | Specification |
|---|---|
| **Design Style** | Editorial High-Altitude Alpine Luxury |
| **Dominant Accent Color** | `#F77F3C` (Alpine Orange) |
| **Dark Theme Base** | `#0D0A0A` & `#1E1E1E` (Crushed Obsidian) |
| **Light Theme Base** | `#FFFFFF` & `#F5F5F5` (Glacial Snow) |
| **Primary Serif Font** | `Teodor` (Fallback: `Playfair Display`) |
| **Technical Monospace** | `SimplonMono` (Fallback: `Space Mono`) |
| **Body Sans Font** | `SimplonNorm` (Fallback: `Inter`) |
| **Corner Radius** | `2px` – `4px` (Sharp, precision-engineered) |
| **Hero Motion** | Full-bleed muted MP4 video loop (`playsinline`, `loop`) |
