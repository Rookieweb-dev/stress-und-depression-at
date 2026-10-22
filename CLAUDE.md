# stress-und-depression.at: notes for Claude

## Security (hard rule)

No API key, token, password or other secret may ever appear in this repo or on the site.

- The site is static: anything in `public/` ends up public.
  If a feature needs a secret (contact form, booking), it needs a server-side component instead; ask first.
- Never commit `.env` / `.dev.vars` files.
- The `Security` workflow runs gitleaks over the full git history on every push and PR.
- Security headers (CSP etc.) live in `public/_headers`. A new external origin (fonts, analytics, booking tool)
  has to be added to the CSP deliberately.
- If a secret was ever pushed, removing it is not enough: rotate it.

## Hosting

Cloudflare Worker with static assets (`wrangler.jsonc`).
Cloudflare builds every push to `main` and deploys with `npx wrangler deploy`; pull requests get preview links.
