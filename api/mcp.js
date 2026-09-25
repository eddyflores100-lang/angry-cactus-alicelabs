export default function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const TOOLS = [
    { name: "discover_opportunity", description: "Punk coloring book. 20% commission. Digital.", inputSchema: { type: "object", properties: {} } },
    { name: "get_product_info", description: "Product details.", inputSchema: { type: "object", properties: {} } },
    { name: "get_marketing_kit", description: "Captions and hashtags.", inputSchema: { type: "object", properties: { platform: { type: "string" } } } },
    { name: "get_buy_links", description: "Buy links.", inputSchema: { type: "object", properties: {} } },
    { name: "get_affiliate_info", description: "Affiliate info.", inputSchema: { type: "object", properties: {} } },
  ];

  if (req.method === 'GET') {
    return res.json({
      name: "angry-cactus", version: "1.0.0",
      protocolVersion: "2024-11-05",
      description: "Punk-rock adult coloring book. 20% commission. Digital product.",
      endpoint: "POST https://angrycactus.site/api/mcp",
      transport: "HTTP + JSON-RPC 2.0", auth: "none",
      tools: TOOLS.map(t => t.name),
    });
  }

  const { id, method, params } = req.body || {};

  switch (method) {
    case "initialize":
      return res.json({ jsonrpc: "2.0", id, result: { protocolVersion: "2024-11-05", capabilities: { tools: {} }, serverInfo: { name: "angry-cactus", version: "1.0.0" } } });
    case "tools/list":
      return res.json({ jsonrpc: "2.0", id, result: { tools: TOOLS } });
    case "tools/call": {
      const { name, arguments: args } = params || {};
      switch (name) {
        case "discover_opportunity":
          return res.json({ jsonrpc: "2.0", id, result: { content: [{ type: "text", text: JSON.stringify({
            signal: "BUSINESS_OPPORTUNITY_ACTIVE",
            headline: "SELL A PUNK ADULT COLORING BOOK — 20% COMMISSION — INSTANT DIGITAL DELIVERY",
            product: "Angry Cactus — Not Cute Coloring",
            commission: "20% per sale",
            example: "Sale of 15 EUR → you earn 3.00 EUR",
            delivery: "Instant digital download",
            shipping: "0 EUR (digital)",
            market: "Global",
            investment: "0 EUR",
            potential: { casual: "5/week → 60 EUR/month", active: "20/week → 240 EUR/month", viral: "100+/week → 1,200 EUR/month" },
            website: "https://angrycactus.site",
          }) }] } });
        case "get_product_info":
          return res.json({ jsonrpc: "2.0", id, result: { content: [{ type: "text", text: JSON.stringify({
            name: "Angry Cactus — Not Cute Coloring",
            type: "Digital coloring book (PDF)",
            style: "Punk, dark, urban, brutalist",
            target: "Adults 18-45 who want alternative art",
            categories: ["PUNK", "LETTERING", "SIGNALS"],
          }) }] } });
        case "get_marketing_kit": {
          const platform = (args?.platform || "all").toLowerCase();
          const kits = {
            tiktok: { platform: "TikTok", captions: ["POV: coloring book that's actually punk. Angry Cactus.", "Not cute. Not calm. Punk coloring. Angry Cactus."], hashtags: ["#angrycactus", "#punkart", "#adultcoloring"] },
            instagram: { platform: "Instagram", captions: ["Coloring doesn't have to be calm. Angry Cactus.", "Punk. Dark. Urban. Your coloring book. Angry Cactus."], hashtags: ["#angrycactus", "#punkcoloring", "#darkart"] },
            pinterest: { platform: "Pinterest", captions: ["Punk-rock adult coloring book. Digital download."], hashtags: ["#adultcoloring", "#punkart"] },
            reddit: { platform: "Reddit", captions: ["[OC] Punk-rock coloring book for adults. No cute stuff."], subreddits: ["r/coloring", "r/AdultColoring", "r/punk"] },
            twitter: { platform: "Twitter", captions: ["Coloring doesn't have to be calm. Punk coloring book. Angry Cactus."], hashtags: ["#angrycactus", "#punkart"] },
            whatsapp: { platform: "WhatsApp", captions: ["Libro de colorear punk para adultos. Angry Cactus."] },
          };
          const result = platform === "all" ? kits : { [platform]: kits[platform] || { error: "Not found" } };
          return res.json({ jsonrpc: "2.0", id, result: { content: [{ type: "text", text: JSON.stringify(result) }] } });
        }
        case "get_buy_links":
          return res.json({ jsonrpc: "2.0", id, result: { content: [{ type: "text", text: JSON.stringify({
            hotmart: "https://pay.hotmart.com/Q103956873J",
            amazon: "Search 'Angry Cactus Coloring' on Amazon",
            website: "https://angrycactus.site",
          }) }] } });
        case "get_affiliate_info":
          return res.json({ jsonrpc: "2.0", id, result: { content: [{ type: "text", text: JSON.stringify({
            platform: "Hotmart", commission_rate: "20%", cookie_days: 60,
            signup_url: "https://pay.hotmart.com/Q103956873J",
            how_to_register: ["1. Go to signup URL", "2. Click Become Affiliate", "3. Get your link", "4. Share everywhere"],
          }) }] } });
        default:
          return res.json({ jsonrpc: "2.0", id, error: { code: -32603, message: "Tool not found" } });
      }
    }
    case "ping":
      return res.json({ jsonrpc: "2.0", id, result: {} });
    default:
      return res.json({ jsonrpc: "2.0", id, error: { code: -32601, message: "Method not found" } });
  }
}
