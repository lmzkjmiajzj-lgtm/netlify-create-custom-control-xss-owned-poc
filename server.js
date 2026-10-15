const http = require('http');
const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);
const arg = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const port = Number(arg('port', process.env.PORT || 3000));
const hostname = arg('hostname', '0.0.0.0');
http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://local').pathname;
  const file = pathname === '/custom-control.js' ? 'custom-control.js' : pathname === '/proof-manifest.json' ? 'proof-manifest.json' : 'index.html';
  const type = file.endsWith('.js') ? 'application/javascript; charset=utf-8' : file.endsWith('.json') ? 'application/json; charset=utf-8' : 'text/html; charset=utf-8';
  const headers = { 'content-type': type, 'cache-control': 'no-store' };
  if (file === 'custom-control.js') headers['access-control-allow-origin'] = 'https://create.netlify.com';
  res.writeHead(200, headers);
  res.end(fs.readFileSync(path.join(__dirname, file)));
}).listen(port, hostname);
