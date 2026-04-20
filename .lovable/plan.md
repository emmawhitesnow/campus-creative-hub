
# Plan: Warm Editorial Portfolio + Print Shop (Lean MVP)

A clean, magazine-inspired site to showcase your campus design work and feature your art prints, with buyers linking out to INPRNT for purchases. Scoped to be polished but realistic for a casual course project.

## Vibe & design system
- **Aesthetic:** Warm editorial — cream/off-white background, deep ink text, one warm accent (terracotta or muted ochre), generous whitespace
- **Type pairing:** Serif display headings (e.g. Fraunces or Playfair) + clean sans body (Inter)
- **Layout:** Asymmetric magazine grids, large imagery, soft hairline dividers, subtle hover states

## Pages (4 total — lean MVP)

### 1. Home (`/`)
- Hero: oversized serif intro ("Hi, I'm [Name] — designer & illustrator based at [Campus]")
- Featured work strip (3–4 pieces from portfolio)
- Featured prints strip (3–4 pieces from shop)
- Short "About in one line" + CTA buttons to Work and Shop

### 2. Work (`/work`) — portfolio
- Grid of campus design projects (posters, branding, event collateral, etc.)
- Each project = card with cover image, title, year, tags (e.g. "Branding," "Editorial," "Poster")
- Click → opens a clean project detail (image gallery + short description). For MVP this can be a simple modal or detail section per project rather than separate dynamic routes

### 3. Shop (`/shop`) — print catalog
- Gallery grid of prints with title, size options, price
- Each print card → "Buy on INPRNT" button that opens the corresponding INPRNT listing in a new tab
- Optional filter chips (e.g. Florals, Abstract, Typography)

### 4. About (`/about`)
- Bio + portrait
- What you make, where you study, what you're into (baking + creative hobbies get a casual mention here so it shows personality without needing a blog)
- Contact section: email + social links (Instagram, INPRNT)
- Optional: "For commissions or collabs, get in touch" with mailto link

## Shared elements
- **Header:** Serif logo/name on left, nav links (Work · Shop · About) on right
- **Footer:** Small — copyright, socials, "Prints fulfilled by INPRNT" note
- **Per-page SEO:** Each route gets its own title + description + og tags

## Content management (lean approach)
Portfolio projects and shop items live in simple typed data files (e.g. `src/data/work.ts`, `src/data/prints.ts`) — easy to edit, no CMS needed. You add a new project by appending an object with image URL, title, description, and (for prints) the INPRNT link.

## Out of scope (deliberately)
- No blog, no recipes (your "no blog" choice — keeps it focused)
- No real checkout (INPRNT handles fulfillment)
- No auth, no admin panel
- No CMS — direct edits to data files

## Stretch ideas (only if time allows)
- Subtle scroll-triggered fade-ins on project cards
- Dedicated project detail routes (`/work/$projectId`) with case study writeups — great for design internship applications
- Newsletter signup ("get notified when I drop new prints")

---

**What you'll need to provide after approval:** your name, ~3–6 portfolio pieces (images + short descriptions), ~4–8 prints with INPRNT links, a short bio, and your socials. Placeholder content can stand in until you swap real assets.
