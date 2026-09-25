# ANGRY CACTUS — Not Cute Coloring

Punk-rock adult coloring book. Brutalist, high-contrast web experience.

**Production**: [https://angrycactus.site](https://angrycactus.site)
**Staging**: [https://angry-cactus-alicelabs-1.web.app](https://angry-cactus-alicelabs-1.web.app)

## Stack

- **Frontend**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS 3.4 (compiled, no CDN)
- **Hosting**: Firebase Hosting
- **Backend**: Cloud Functions for Firebase (Node 20)
- **Analytics**: Firebase Analytics (code-split)
- **Domain**: angrycactus.site

## Project Structure

```
angry-cactus/
├── App.tsx                       # Root React component (entry point)
├── index.html                    # HTML shell with SEO meta
├── index.tsx                     # ReactDOM mount
├── styles.css                    # Tailwind base + custom styles
├── vite.config.ts                # Vite build config (code-splitting)
├── tailwind.config.js            # Tailwind theme
├── postcss.config.js             # PostCSS pipeline
├── firebase.json                 # Hosting + Functions config
├── .firebaserc                   # Firebase project binding
├── src/
│   ├── components/               # React UI components
│   │   ├── Navbar.tsx
│   │   ├── Gallery.tsx
│   │   ├── ImageWithFallback.tsx
│   │   ├── sections.tsx          # Hero, WhyThisExists, WhatYouGet, etc.
│   │   ├── ChooseYourWeapon.tsx  # Buy section + NotForEveryone
│   │   └── Footer.tsx            # Footer + LabModal + WholesaleModal + ContactModal
│   ├── data/                     # Static data
│   │   ├── gallery.ts
│   │   └── links.ts
│   └── lib/
│       └── firebase.ts           # Analytics init
├── public/                       # Static assets served at root
│   ├── .well-known/              # AI agent manifests (agent.json, mcp.json, ai-plugin.json)
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   └── (images, video, samples)
├── functions/                    # Cloud Functions for Firebase
│   ├── index.js                  # MCP endpoint (POST /api/mcp)
│   └── package.json
└── .github/workflows/deploy.yml  # GitHub Actions auto-deploy
```

## Local Development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & Deploy

### First time setup

```bash
# 1. Login to Firebase (one-time, opens browser)
firebase login

# 2. Install functions dependencies (auto-runs on root npm install via postinstall)
cd functions && npm install && cd ..
```

### Manual deploy

```bash
# Build + deploy hosting only (fast)
npm run deploy:hosting

# Deploy functions only
npm run deploy:functions

# Build + deploy everything (hosting + functions)
npm run deploy:all
```

### Auto-deploy (GitHub Actions)

Already configured in `.github/workflows/deploy.yml`. Every push to `main` triggers:

1. `npm ci` (root + functions)
2. `npm run build`
3. `firebase deploy` (hosting + functions)

**Setup required**: Add the following secret to GitHub repo settings → Secrets and variables → Actions:

- `FIREBASE_SERVICE_ACCOUNT_ANGRY_CACTUS_ALICELABS_1`

Get the JSON from:
```bash
firebase service-account:print angry-cactus-alicelabs-1
```

Paste the entire JSON as the secret value. After that, every `git push` deploys automatically.

## MCP Endpoint

The `/api/mcp` endpoint exposes a Model Context Protocol (JSON-RPC 2.0) server for AI agents.

**Tools available:**
- `discover_opportunity` — Business opportunity summary
- `get_product_info` — Product details
- `get_marketing_kit` — Captions + hashtags by platform (tiktok/instagram/pinterest/reddit/twitter/whatsapp)
- `get_buy_links` — Purchase links (Hotmart, Amazon, Gumroad)
- `get_affiliate_info` — Affiliate program info (20% commission)

**Example call:**
```bash
curl -X POST https://angrycactus.site/api/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

## Custom Domain Setup

To point `angrycactus.site` to Firebase Hosting:

```bash
firebase hosting:domains:add angrycactus.site
```

Then add the DNS records Firebase shows you (typically A records pointing to `199.36.158.100`-`103`) at your DNS provider. SSL certificate is issued automatically once DNS propagates.

## License

© 2026 Alicelabs LLC. All rights reserved.
