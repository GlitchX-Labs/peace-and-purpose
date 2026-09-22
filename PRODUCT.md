# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Individuals and couples in India (contact number and Tele-MANAS crisis line are India-specific) seeking a therapist, largely younger adults (testimonials skew ~20-30). Many are likely first-time or previously-disappointed therapy seekers (one testimonial mentions switching 4 therapists before). They are evaluating whether this specific practitioner feels safe and human enough to book a first session, often while anxious or emotionally raw.

## Product Purpose

Peace & Purpose is the solo private practice of Jennifer Jason (MSc. Counselling Psychology), offering individual therapy, couples counseling, and mindfulness workshops, delivered online/telehealth. The site's job is to build enough trust and emotional safety that a visitor requests an appointment via the booking form. Success is a completed, sincere booking request from someone who feels met rather than sold to.

## Positioning

Explicitly anti-clinical, anti-performance: "mental health doesn't have to feel like a TED Talk." The differentiator is warmth and realness over polish, a single named therapist, not a faceless clinic or directory, who promises "real talk" and human pace rather than a checklist. Session mode is intentionally online/telehealth-only for now.

## Operating Context

- Single practitioner, solo practice (site was already migrated off a multi-therapist "team" layout, see `index.html` comment).
- Booking flow: Web3Forms-powered form (access key + hCaptcha) collects name/phone/email/preferred slots/consent; no live calendar booking or payment on-site. Practitioner personally follows up to confirm.
- Crisis banner is a fixed safety element (Tele-MANAS 14416) and must remain highly visible, not buried by redesign.
- Additional pages: contact, FAQ, privacy notice, terms of service, 404, same visual system.
- Built as a Next.js (App Router) site with `output: "export"`, statically generated HTML per route, deployed as a static site (e.g. Vercel), with React components and Motion for interactivity.

## Capabilities and Constraints

- Testimonials are real client quotes shared with permission (per in-code comment), content itself is confirmed-real, not placeholder copy, and must not be treated as fake filler to delete; light structural/visual re-presentation is fine, rewriting the words is not.
- Crisis banner phone number and Tele-MANAS branding are factual safety information, do not alter the number or genericize the message.
- Consent checkbox and Privacy Notice link in the booking form are functional/legal requirements, must remain functional and present.
- hCaptcha and Web3Forms integration are existing working infrastructure; preserve form field names/behavior needed for submission to keep working, per user's answer this session (light structural edits are fine, but the mechanism must not break).

## Brand Commitments

- Name "Peace & Purpose · Healing Minds" is fixed.
- Existing logo file (`images/logo.png`) stays in use.
- Per user's answer this session, full freedom otherwise on palette, typography, and imagery treatment.

## Evidence on Hand

- Real hero/profile photography: `images/hero-room.jpeg`, `images/profile.jpg`, `images/avatar-jennifer.png`, `images/therapy.jpg`, `images/avatar-bg.jpg`.
- Real testimonial quotes with initials/ages (not full names), see `index.html` testimonial section.
- Real contact channels: `infopeacenpurpose@gmail.com`, phone, Instagram `@peace_npurpose`.
- No case studies, press, or measurable outcomes on hand, do not fabricate any.

## Product Principles

1. Warmth and honesty outrank polish or clinical authority, every design decision should feel like it's from a person, not an institution.
2. Never let aesthetic ambition compromise the crisis banner's visibility or the booking form's functionality.
3. Real evidence (photos, testimonials, credentials) stays real; do not invent stats, press, or new testimonials.
4. Emotionally raw or anxious first-time visitors are the design's most important audience, calm, unhurried pacing beats density or cleverness.

## Accessibility & Inclusion

Mental-health context implies trauma-informed care: avoid jarring motion, high-contrast alarm colors, or aggressive urgency patterns (no fake countdown timers, no manipulative scarcity). Maintain strong color contrast and readable type for users who may be reading while distressed or fatigued.
