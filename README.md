# Angry Cactus — Not Cute Coloring

React/Vite storefront for adult coloring artwork. Keep the punk visual identity; provide a usable free sample, a clear printed/digital choice and truthful contact handling.

```sh
npm ci
npm run typecheck
npm run build
npm run verify:assets
npm run preview
```

Build output: `dist/`. Firebase config now publishes the advertised sample ZIP and linked `.well-known` metadata. With the existing project binding and authorized Firebase CLI credentials, `npm run deploy:hosting` builds and deploys. CI verifies and uploads an artifact without publishing production.

## Customer flow

- Free pages: three PNG/JPG sample images in a ZIP, no email gate.
- Purchase: external Amazon, Hotmart or Gumroad listing; confirm current price, format and delivery there.
- Contact: prepare an email draft, review it and send using the visitor's email app. Copy is available as a fallback.
- Wholesale: quote and schedule confirmed individually.

`src/data/links.ts` contains destinations. `public/product.json` is static product metadata. `/api/mcp.json` and related legacy files explicitly declare that no executable MCP server is available. The Claude example now contains no fake server registration.

Analytics initialization is not loaded by the app. No inquiry is sent or stored by the frontend. Firebase configuration remains an unused source reference until measurement is deliberately configured. Vite no longer injects unrelated Gemini environment keys.

See `docs/COMMERCIAL-READINESS.md` for external checkout, delivery and publishing gates. No paid order or production deployment has been verified as part of this change.
