# Kiviatech Website

Landing page for **kiviatech.com**, built on the brand guidelines in [`kiviatech-brand`](https://github.com/TechnicalGee/kiviatech-brand).

Plain HTML, CSS and JS: no build step and no dependencies. Fonts (Inter, Plus Jakarta Sans) are self-hosted in `assets/fonts`, so there are no third-party requests.

## Structure
| File | Purpose |
|---|---|
| `index.html` | Landing page (hero, services, process, why us, waitlist, contact, footer) |
| `privacy.html` | Privacy policy (draft placeholder) |
| `styles.css` | All styles. Brand colors and fonts are CSS variables in `:root` |
| `script.js` | Mobile menu, scroll animations, forms |
| `assets/favicon.svg` | Logo mark / favicon |

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Before launch
- [ ] Replace the `[XXXXXXXX]` / `[address]` placeholders in the footer and `privacy.html` with the real company numbers and registered offices
- [ ] Confirm the `hello@kiviatech.com` mailbox exists (it's set in `index.html` and `script.js`)
- [ ] Forms currently open the visitor's email app. Connect a form service such as [Formspree](https://formspree.io) or an API so submissions arrive automatically
- [ ] Have the privacy policy reviewed by a legal professional
- [ ] Replace the tech-stack list with the technologies you actually use, and add real client logos and testimonials when you have them
- [ ] Deploy to Vercel, Netlify, Cloudflare Pages or GitHub Pages, and point kiviatech.com at it
