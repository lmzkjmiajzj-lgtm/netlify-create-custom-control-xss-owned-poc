const fs = require('fs');
fs.mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'custom-control.js', 'proof-manifest.json']) {
  fs.copyFileSync(file, `dist/${file}`);
}
fs.writeFileSync('dist/_headers', `/custom-control.js
  Access-Control-Allow-Origin: https://create.netlify.com
  Content-Type: application/javascript; charset=utf-8
  Cache-Control: no-store
  Vary: Origin
/proof-manifest.json
  Cache-Control: no-store
`);
