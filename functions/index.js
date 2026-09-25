/**
 * Cloud Function for Angry Cactus — MCP endpoint
 *
 * Serves the Model Context Protocol (MCP) JSON-RPC 2.0 server
 * for the punk-rock adult coloring book brand.
 *
 * Endpoint: POST https://angrycactus.site/api/mcp
 *
 * Tools exposed:
 *   - discover_opportunity
 *   - get_product_info
 *   - get_marketing_kit
 *   - get_buy_links
 *   - get_affiliate_info
 */

const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

const SITE_URL = 'https://angrycactus.site';
const HOTMART_LINK = 'https://pay.hotmart.com/Q103956873J';

const TOOLS = [
  {
    name: 'discover_opportunity',
    description: 'Discover the Angry Cactus business opportunity. Punk coloring book. 20% commission. Digital product.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_product_info',
    description: 'Get Angry Cactus product details.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_marketing_kit',
    description: 'Get marketing captions and hashtags by platform.',
    inputSchema: {
      type: 'object',
      properties: { platform: { type: 'string', description: 'tiktok | instagram | pinterest | reddit | twitter | whatsapp' } },
    },
  },
  {
    name: 'get_buy_links',
    description: 'Get all purchase links (Hotmart, Amazon, Gumroad).',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_affiliate_info',
    description: 'Get affiliate program information.',
    inputSchema: { type: 'object', properties: {} },
  },
];

function setCors(res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Accept');
}

function handleRequest(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    return res.json({
      name: 'angry-cactus',
      version: '1.0.0',
      protocolVersion: '2024-11-05',
      description: 'Punk-rock adult coloring book. 20% commission. Digital product.',
      endpoint: `POST ${SITE_URL}/api/mcp`,
      transport: 'HTTP + JSON-RPC 2.0',
      auth: 'none',
      tools: TOOLS.map((t) => t.name),
      website: SITE_URL,
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use GET or POST.' });
  }

  const { id, method, params } = req.body || {};
  logger.info(`MCP call: method=${method} id=${id}`);

  switch (method) {
    case 'initialize':
      return res.json({
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: { tools: {} },
          serverInfo: { name: 'angry-cactus', version: '1.0.0' },
        },
      });

    case 'ping':
      return res.json({ jsonrpc: '2.0', id, result: {} });

    case 'tools/list':
      return res.json({ jsonrpc: '2.0', id, result: { tools: TOOLS } });

    case 'tools/call': {
      const { name, arguments: args } = params || {};

      switch (name) {
        case 'discover_opportunity':
          return res.json({
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    signal: 'BUSINESS_OPPORTUNITY_ACTIVE',
                    headline: 'SELL A PUNK ADULT COLORING BOOK — 20% COMMISSION — INSTANT DIGITAL DELIVERY',
                    product: 'Angry Cactus — Not Cute Coloring',
                    commission: '20% per sale',
                    example: 'Sale of 15 EUR → you earn 3.00 EUR',
                    delivery: 'Instant digital download',
                    shipping: '0 EUR (digital)',
                    market: 'Global',
                    investment: '0 EUR',
                    potential: {
                      casual: '5/week → 60 EUR/month',
                      active: '20/week → 240 EUR/month',
                      viral: '100+/week → 1,200 EUR/month',
                    },
                    website: SITE_URL,
                  }),
                },
              ],
            },
          });

        case 'get_product_info':
          return res.json({
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    name: 'Angry Cactus — Not Cute Coloring',
                    type: 'Digital coloring book (PDF)',
                    style: 'Punk, dark, urban, brutalist',
                    target: 'Adults 18-45 who want alternative art',
                    categories: ['PUNK', 'LETTERING', 'SIGNALS'],
                    website: SITE_URL,
                  }),
                },
              ],
            },
          });

        case 'get_marketing_kit': {
          const platform = (args?.platform || 'all').toLowerCase();
          const kits = {
            tiktok: {
              platform: 'TikTok',
              captions: [
                "POV: coloring book that's actually punk. Angry Cactus.",
                'Not cute. Not calm. Punk coloring. Angry Cactus.',
              ],
              hashtags: ['#angrycactus', '#punkart', '#adultcoloring'],
            },
            instagram: {
              platform: 'Instagram',
              captions: [
                "Coloring doesn't have to be calm. Angry Cactus.",
                'Punk. Dark. Urban. Your coloring book. Angry Cactus.',
              ],
              hashtags: ['#angrycactus', '#punkcoloring', '#darkart'],
            },
            pinterest: {
              platform: 'Pinterest',
              captions: ['Punk-rock adult coloring book. Digital download.'],
              hashtags: ['#adultcoloring', '#punkart'],
            },
            reddit: {
              platform: 'Reddit',
              captions: ['[OC] Punk-rock coloring book for adults. No cute stuff.'],
              subreddits: ['r/coloring', 'r/AdultColoring', 'r/punk'],
            },
            twitter: {
              platform: 'Twitter',
              captions: ["Coloring doesn't have to be calm. Punk coloring book. Angry Cactus."],
              hashtags: ['#angrycactus', '#punkart'],
            },
            whatsapp: {
              platform: 'WhatsApp',
              captions: ['Libro de colorear punk para adultos. Angry Cactus.'],
            },
          };
          const result = platform === 'all' ? kits : { [platform]: kits[platform] || { error: 'Not found' } };
          return res.json({
            jsonrpc: '2.0',
            id,
            result: { content: [{ type: 'text', text: JSON.stringify(result) }] },
          });
        }

        case 'get_buy_links':
          return res.json({
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    hotmart: HOTMART_LINK,
                    amazon: "Search 'Angry Cactus Coloring' on Amazon or visit https://www.amazon.com/dp/B0GJ3YCKGV",
                    gumroad: 'https://alicelabs.gumroad.com/l/pnnfgt',
                    website: SITE_URL,
                  }),
                },
              ],
            },
          });

        case 'get_affiliate_info':
          return res.json({
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    platform: 'Hotmart',
                    commission_rate: '20%',
                    cookie_days: 60,
                    signup_url: HOTMART_LINK,
                    how_to_register: [
                      '1. Go to signup URL',
                      '2. Click Become Affiliate',
                      '3. Get your link',
                      '4. Share everywhere',
                    ],
                  }),
                },
              ],
            },
          });

        default:
          return res.json({
            jsonrpc: '2.0',
            id,
            error: { code: -32603, message: `Tool not found: ${name}` },
          });
      }
    }

    default:
      return res.json({
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: `Method not found: ${method}` },
      });
  }
}

exports.api = onRequest(
  {
    region: 'us-central1',
    maxInstances: 10,
    timeoutSeconds: 30,
    memory: '256MiB',
    cors: true,
  },
  handleRequest
);
