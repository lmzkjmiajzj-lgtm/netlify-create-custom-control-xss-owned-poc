const fs = require('fs');

fs.mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'proof-manifest.json']) {
  fs.copyFileSync(file, `dist/${file}`);
}
fs.writeFileSync('dist/_headers', `/proof-manifest.json
  Cache-Control: no-store
`);
