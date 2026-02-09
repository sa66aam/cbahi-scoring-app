// ============================================
// StandardsHub — Anthropic API Proxy Server
// ============================================
// Zero-dependency proxy to bypass CORS for browser → Anthropic API calls.
// Run: node proxy.js
// The proxy listens on port 3001 and forwards POST /api/rewrite to Anthropic.
// The API key is sent from the browser in the x-api-key header.

const http = require('http');
const https = require('https');

const PORT = 3001;
const ANTHROPIC_HOST = 'api.anthropic.com';
const ANTHROPIC_PATH = '/v1/messages';

const server = http.createServer((req, res) => {
  // CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Only accept POST to /api/rewrite
  if (req.method !== 'POST' || req.url !== '/api/rewrite') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found. Use POST /api/rewrite' }));
    return;
  }

  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Missing x-api-key header' }));
    return;
  }

  // Collect request body
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    const options = {
      hostname: ANTHROPIC_HOST,
      port: 443,
      path: ANTHROPIC_PATH,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const proxyReq = https.request(options, (proxyRes) => {
      // Collect as Buffers to avoid splitting multi-byte UTF-8 characters (Arabic)
      // across chunks — which causes U+FFFD replacement characters (diamond glyphs)
      const chunks = [];
      proxyRes.on('data', chunk => { chunks.push(chunk); });
      proxyRes.on('end', () => {
        const responseBody = Buffer.concat(chunks).toString('utf8');
        res.writeHead(proxyRes.statusCode, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(responseBody);
      });
    });

    proxyReq.on('error', (err) => {
      console.error('Proxy error:', err.message);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Proxy error: ' + err.message }));
    });

    proxyReq.write(body);
    proxyReq.end();
  });
});

server.listen(PORT, () => {
  console.log(`\n  ✨ StandardsHub API Proxy running on http://localhost:${PORT}`);
  console.log(`  → Forwarding POST /api/rewrite → https://api.anthropic.com/v1/messages`);
  console.log(`  → API key passed via x-api-key header from browser\n`);
});
