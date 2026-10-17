const http = require('http');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 ? args[index + 1] : fallback;
};
const port = Number(arg('port', process.env.PORT || 3000));
const hostname = arg('hostname', '0.0.0.0');

http.createServer((request, response) => {
  const pathname = new URL(request.url, 'http://local').pathname;
  const file = pathname === '/proof-manifest.json' ? 'proof-manifest.json' : 'index.html';
  const type = file.endsWith('.json') ? 'application/json; charset=utf-8' : 'text/html; charset=utf-8';
  response.writeHead(200, { 'content-type': type, 'cache-control': 'no-store' });
  response.end(fs.readFileSync(path.join(__dirname, file)));
}).listen(port, hostname);
