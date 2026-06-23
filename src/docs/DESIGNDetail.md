---
name: Ethereal Nomad
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#c6c4df'
  on-secondary: '#2f2e43'
  secondary-container: '#47475d'
  on-secondary-container: '#b8b6d0'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#8083ff'
  on-tertiary-container: '#0d0096'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e2e0fc'
  secondary-fixed-dim: '#c6c4df'
  on-secondary-fixed: '#1a1a2e'
  on-secondary-fixed-variant: '#45455b'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

The design system is centered on a premium, high-tech aesthetic tailored for the modern remote professional. The brand personality is sophisticated yet approachable, evoking the feeling of a high-end digital sanctuary. It balances the precision of developer-centric tools with the lifestyle elegance of premium travel brands.

The style is a hybrid of **Modern SaaS Minimalism** and **Refined Glassmorphism**. It utilizes expansive negative space, hyper-legible typography, and layered translucency to create a sense of depth and focus. The goal is to make complex global data feel light, organized, and effortlessly navigable.

## Colors

This design system utilizes a "Deep Space" palette to prioritize visual comfort during long browsing sessions. 

- **Primary Canvas:** The background uses a deep black (#050505) to provide absolute contrast for text and interactive elements.
- **Atmospheric Accents:** Dark purples (#1a1a2e) are used for large-scale background blurs and subtle section transitions, creating an ethereal glow that prevents the UI from feeling flat.
- **Action & Focus:** Vibrant electric blue (#3b82f6) is reserved for primary actions, status indicators, and critical navigational cues.
- **Glass Shimmer:** Surfaces use a semi-transparent white overlay at very low opacities (3-5%) to simulate frosted glass, catching "light" from the background gradients.

## Typography

Typography in this design system is driven by a hierarchy of precision and warmth. **Geist** is employed for headings and UI labels to provide a technical, monolinear rhythm that feels engineered and modern. **Inter** is used for body copy to ensure maximum readability and a softer, more "human" touch in longer descriptions of cities or community posts.

For display text, tight letter spacing and high weights are encouraged to create a "Stripe-like" impact. For body text, the line height is generous (1.6) to allow the dark background to breathe between lines of text.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with strict adherence to a 4px baseline shift. 

- **Desktop:** A 12-column grid with 24px gutters. Content is centered within a 1280px max-width container to maintain focus.
- **Mobile:** A 4-column grid with 20px margins. Elements stack vertically, with card widths usually spanning the full available width minus margins.
- **Rhythm:** Vertical rhythm is maintained through standardized "stacks." Use 16px for related elements (image + caption) and 32px for unrelated components (heading + paragraph). Section spacing is intentionally large (80px+) to emphasize the minimalist, premium feel.

## Elevation & Depth

Depth is not communicated via traditional heavy shadows, but through **Tonal Stacking and Backdrop Blurs**.

1.  **Level 0 (Floor):** Pure black (#050505). This is the base of the application.
2.  **Level 1 (Subtle Glow):** Areas of the floor are "lit" by large, blurred radial gradients of #1a1a2e (Dark Purple) at 20% opacity.
3.  **Level 2 (Glass Surfaces):** Floating cards and panels use a `backdrop-filter: blur(20px)` combined with a subtle white-to-transparent linear gradient border (top-left to bottom-right) to catch the eye.
4.  **Level 3 (Interactive):** When hovered, glass elements increase in surface opacity from 3% to 6%, and the border brightness increases. A soft, blue-tinted ambient shadow is applied to the primary action buttons to make them feel "magnetized" to the cursor.

## Shapes

The shape language is defined by oversized, generous curves that soften the technical nature of the typography. 

- **Main Containers:** Cards, modals, and large sections use `rounded-xl` (24px - 48px) to create a friendly, approachable container.
- **Interactive Elements:** Buttons and input fields use a "Pill" style (full rounding) to contrast against the structured grid.
- **Avatars & Icons:** Always circular to maintain a consistent organic feel amidst the geometric layout.

## Components

- **Buttons:** Primary buttons are solid Electric Blue with white text. Secondary buttons use a glassmorphic style with a subtle white border. All buttons should have a high-spring hover animation (scale 1.02).
- **Glassmorphic Cards:** The core component. Must feature a 1px solid border at 8% white opacity, a 20px background blur, and a 24px corner radius. Content inside should have at least 24px of internal padding.
- **Input Fields:** Darker than the background or fully transparent with a bottom border only. On focus, the border glows Electric Blue with a soft outer shadow.
- **Chips / Badges:** Used for city tags (e.g., "Fast Wi-Fi"). These should be small, pill-shaped glass elements with Geist-Medium labels.
- **Lists:** Clean, borderless rows separated by 1px dividers of `rgba(255,255,255,0.05)`.
- **Navigation:** A sticky top header with a heavy backdrop blur (`saturate(180%) blur(20px)`) to allow content to scroll elegantly underneath.