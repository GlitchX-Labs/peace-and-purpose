---
name: Peace & Purpose
description: A warm, soft-rose wellness identity for a solo therapy practice, Playfair Display headings, Montserrat body, rounded and tactile.
colors:
  cream: "#fff6f5"
  cream-deep: "#f9e1e2"
  ink: "#2c2a24"
  ink-soft: "#685357"
  sage: "#d4777d"
  sage-dark: "#a94f5c"
  sage-pale: "#f8d8dc"
  coral: "#df6f76"
  mustard: "#efc172"
  mustard-text: "#7a5a16"
  border: "#ebc9cc"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.25
  heading:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  form:
    fontFamily: "Raleway, system-ui, sans-serif"
    fontSize: "0.95rem"
  quote:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontVariation: "italic"
rounded:
  card: "14px"
  pill: "999px"
  input: "8px"
  dialog: "18px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "28px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.7em"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.7em"
---

# Design System: Peace & Purpose

## Overview

**Creative North Star: "Warm Welcome"**

Peace & Purpose reads as a soft, human, rounded space, the opposite of a clinical intake form. The palette is a warm blush/rose family (never beige or brown), headings are set in Playfair Display for a gentle editorial warmth, and body copy runs in Montserrat for clean, approachable readability. Every interactive surface (buttons, cards, icon badges, chips) is rounded and lifts slightly on hover, giving the whole site a tactile, "safe to touch" feel appropriate to a first-time therapy client who may be anxious.

This is a deliberately soft, wellness-forward identity: pill-shaped buttons, circular icon badges, white raised cards, floating/pulsing micro-animations on the hero badge and profile photo, and a click-ripple on every button press. Warmth here comes from roundness and rose tones, not editorial restraint.

**Key Characteristics:**
- Warm rose/blush palette (`--sage` is a rose/coral accent, not a green, the name is inherited from the codebase's original token naming and refers to the accent role, not the hue)
- Playfair Display for all headings and brand mark, Montserrat for body/UI, Raleway for form inputs
- Every card (service, value, testimonial, FAQ, contact) is a white rounded rectangle with a hairline border that lifts on hover
- Icon badges (circular, rose-pale background) sit inside service/value/contact cards and next to privacy/terms headings; they warm to mustard on hover
- Pill-shaped buttons and chips everywhere; no sharp corners
- Motion is expressive and continuous: floating avatar, pulsing hero badge, hover-lift on every card, a click-ripple on every button, animated calendar transitions in the booking dialog

## Colors

### Primary
- **Sage** (`#d4777d`, a dusty rose despite the name): primary button fill, active nav underline, active dot/tab states.
- **Sage Dark** (`#a94f5c`): headings, brand mark, back-to-top button, hover states.
- **Sage Pale** (`#f8d8dc`): icon badge backgrounds, outline-button hover fill, credential note background.

### Secondary
- **Coral** (`#df6f76`): focus outline, slot-chip remove-button hover.
- **Mustard** (`#efc172`) with **Mustard Text** (`#7a5a16`): hero badge, tag chips, and the hover state every icon badge shifts to.

### Neutral
- **Cream** (`#fff6f5`): page background, a near-white flushed with pink, not a paper/parchment tone.
- **Cream Deep** (`#f9e1e2`): alternate section background (services/about wrap, booking, footer).
- **Ink** (`#2c2a24`): primary text.
- **Ink Soft** (`#685357`): secondary/body text.
- **Border** (`#ebc9cc`): all card/input borders, a soft rose-tinted line, not neutral gray.

## Typography

**Display/Heading Font:** Playfair Display (serif), every `h1`/`h2`/`h3`, the brand mark, FAQ questions, calendar title, testimonial-avatar initial.
**Body/UI Font:** Montserrat, body copy, buttons, nav.
**Form Font:** Raleway, form inputs and selects specifically (a deliberate third typeface reserved for form fields only).

## Layout

Single content column at `max-width: 1120px`, `28px` side padding. The hero is a full-bleed photo background (`hero-room.jpeg`) with a left-to-right cream scrim so text stays readable over the image, filling the viewport (`min-height: 100vh`). The About + Services sections share a soft background photo wash (`avatar-bg.jpg` at low opacity). The Booking section sits over a second background photo (`dev_bg.jpg`) with a lighter scrim.

## Elevation & Depth

Every card lifts. This is the opposite of a flat/hairline-only system: `.service-card`, `.value-card`, `.testimonial-card`, `.faq-item`, `.card`, and the booking form all use `box-shadow` on hover (translateY -3px to -6px, tinted shadow toward ink) and most also shift `border-color` to sage. The floating avatar photo, pulsing hero badge, and button click-ripple are the other three signature motion touches.

## Shapes

- **Buttons & chips:** `999px` (full pill), no sharp-cornered buttons anywhere.
- **Cards, forms, FAQ items:** `14px` radius.
- **Inputs, small nav buttons (calendar/time spinners):** `8px` radius.
- **Booking dialog:** `18px` radius.
- **Icon badges, avatar photo, back-to-top, testimonial avatar:** `50%` (circular).

## Components

### Buttons
- **Shape:** pill (`999px`), `0.85em 1.7em` padding.
- **Primary:** sage background, white text; hover lifts (`translateY(-2px) scale(1.02)`) with a soft shadow.
- **Outline:** transparent background, ink-soft border; hover lifts and fills sage-pale.
- **Ripple:** every button spawns a white (or sage-tinted on outline) ripple span from the pointer's click position on press, matching this theme's tactile feel. Respects `prefers-reduced-motion`.

### Icon Badges
Circular, `42–52px`, sage-pale background, holding a small line icon. On the parent card's hover, the badge scales up (`1.1–1.12×`) and turns mustard. Used in service cards, value cards, contact rows, and as static (non-hover) markers next to privacy/terms card headings.

### Cards
White background, `1px solid` border (rose-tinted), `14px` radius, `24–30px` padding. Hover: lift (`translateY(-3px` to `-6px)`) plus a tinted `box-shadow`, and usually a `border-color` shift to sage.

### Testimonials
A 3-up (1-up on mobile) horizontally scroll-snapping card row, not a single-card carousel. Each card is a white bordered box with the quote, a small circular avatar showing the client's first initial, and their attribution. Prev/next controls are circular outline buttons; pagination dots fill sage when active.

### Inputs / Fields
`1px solid` border, `8px` radius, cream background, Raleway type. Focus: border turns sage with a soft glow ring and a `1px` upward nudge.

### Navigation
Sticky header with a translucent cream background and `backdrop-filter: blur`. Nav links get an animated underline that slides in from the left on hover, in sage.

## Do's and Don'ts

### Do:
- Do use circular icon badges inside cards, and let them react to card hover (scale + mustard fill).
- Do let every card lift on hover with a tinted shadow, this system is not flat.
- Do use pill-shaped buttons and chips throughout.
- Do keep the click-ripple on every `.btn` press.
- Do set headings in Playfair Display, everything else in Montserrat (forms in Raleway).

### Don't:
- Don't introduce a flat, shadow-less, hairline-only look, that is a different, previously-explored direction for this brand and is not the current committed identity.
- Don't swap in a beige/parchment/clay palette, the committed palette is rose/blush (cream, sage, coral, mustard as named above).
- Don't use sharp corners on buttons or chips.
- Don't drop the hover-lift or icon-badge-color-shift interactions, they are this theme's signature, not incidental decoration.
