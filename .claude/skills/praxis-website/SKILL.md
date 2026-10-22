---
name: praxis-website
description: Rules for any design or content change to stress-und-depression.at (pages, CSS, fonts, images). Use together with frontend-design whenever you touch public/.
---

# stress-und-depression.at: design rules

The site belongs to a clinical psychologist in Austria. It offers online counselling and
clinical-psychological treatment for private clients, and workshops on stress, burnout
prevention and depression for companies. Visitors are often stressed or unwell when they arrive.

## Audience and tone

- Two audiences: private clients (calm, reassurance, a clear next step) and HR / company
  contacts (credible, concrete workshop formats). Keep both paths obvious from the start page.
- Language is German (Austrian usage, e.g. "Jänner"), `lang="de-AT"`. Address private clients with "Sie".
- Quiet and trustworthy beats flashy: no autoplaying motion, no urgency tricks, no stock-photo clichés
  (head-in-hands, wilting plants). Respect `prefers-reduced-motion`.
- Do not invent qualifications, prices, testimonials or health claims. Ask for real content or
  mark placeholders clearly.

## Accessibility (hard floor)

- WCAG 2.2 AA: contrast at least 4.5:1 for body text, visible keyboard focus, semantic headings,
  alt text, usable at 200% zoom and at 320px width.
- Body text at least 1rem with generous line-height; short line lengths.

## Technical limits

- Static files in `public/`, no build step yet. Plain HTML and CSS; add JavaScript only when a
  feature truly needs it, as a separate file (the CSP forbids inline scripts and inline styles).
- The CSP in `public/_headers` allows only the site's own origin. Self-host fonts (woff2 in
  `public/fonts/`), never link Google Fonts or other CDNs. A new external origin needs the
  owner's OK and a deliberate CSP change.
- No secrets anywhere (see CLAUDE.md). Contact or booking forms need a server-side part: ask first.
- Check the result with `npx wrangler dev` and look at it on phone and desktop width before
  calling it done.
