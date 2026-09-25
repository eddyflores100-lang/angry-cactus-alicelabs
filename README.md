# ANGRY CACTUS — Not Cute Coloring

Punk-rock adult coloring book. Brutalist, high-contrast web experience.

**Production**: [https://angrycactus.site](https://angrycactus.site)
**Staging**: [https://angry-cactus-alicelabs-1.web.app](https://angry-cactus-alicelabs-1.web.app)

## Stack

- **Frontend**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS 3.4 (compiled, no CDN)
- **Hosting**: Firebase Hosting (Spark plan, free tier)
- **Analytics**: Firebase Analytics (code-split)
- **MCP**: Static descriptor (no backend required)
- **Domain**: angrycactus.site

## Architecture

This site runs **100% static** on Firebase Hosting Spark plan (free).

The MCP (Model Context Protocol) server is served as a **static JSON descriptor**
at `/api/mcp.json`. This works for AI agent discovery (ChatGPT, Claude, Perplexity,
etc.) without requiring Cloud Functions or a paid Firebase plan.

## Project Structure

```
angry-cactus/
├── App.tsx                       # Root React component
├── index.html                    # HTML shell with SEO meta
├── index.tsx                     # ReactDOM mount
├── styles.css                    # Tailwind base + custom styles
├── vite.config.ts                # Vite build config (code-splitting)
├── tailwind.config.js            # Tailwind theme
├── postcss.config.js             # PostCSS pipeline
├── firebase.json                 # Hosting config (rewrites + cache headers)
├── .firebaserc                   # Firebase project binding
├── src/
│   ├── components/               # React UI components
│   ├── data/                     # Static data
│   └── lib/firebase.ts          # Analytics init
├── public/
│   ├── .well-known/              # AI agent manifests
│   │   ├── agent.json
│   │   ├── mcp.json
│   │   └── ai-plugin.json
│   ├── api/
│   │   └── mcp.json              # MCP static descriptor (5 tools)
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   └── (images, video, samples)
└── (no backend)
```

## Local Development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & Deploy

### First time setup

```bash
# Login to Firebase (one-time, opens browser)
firebase login
```

### Manual deploy

```bash
# Build + deploy to Firebase Hosting
npm run deploy
```

That's it. No Cloud Functions, no Blaze plan required.

## MCP Descriptor

The MCP server is exposed as static JSON at `/api/mcp.json`. AI agents can fetch
it via GET and read the available tools + static responses.

**Tools documented:**
- `discover_opportunity` — Business opportunity summary
- `get_product_info` — Product details
- `get_marketing_kit` — Captions + hashtags by platform
- `get_buy_links` — Purchase links (Hotmart, Amazon, Gumroad)
- `get_affiliate_info` — Affiliate program info (20% commission)

**Example:**
```bash
curl https://angrycactus.site/api/mcp.json
```

Returns the full MCP descriptor with all tools and their static responses.

## Custom Domain Setup

To point `angrycactus.site` to Firebase Hosting:

```bash
firebase hosting:domains:add angrycactus.site
```

Then add the DNS records Firebase shows you (typically A records pointing to
`199.36.158.100`-`103`) at your DNS provider. SSL certificate is issued
automatically once DNS propagates.

## License

© 2026 Alicelabs LLC. All rights reserved.
