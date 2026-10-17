const fs = require('fs');

const page = fs.readFileSync('index.html', 'utf8');
const config = fs.readFileSync('stackbit.config.ts', 'utf8');
if (!page.includes("send('openLink', payload)")) throw new Error('openLink source missing');
if (!page.includes('data-netlify-create-openlink-xss')) throw new Error('harmless marker missing');
if (!page.includes("event.origin !== TOP") || !page.includes("event.source !== parent")) {
  throw new Error('fixture response validation missing');
}
if (config.includes('custom-inline-script') || config.includes('controlUrl')) {
  throw new Error('fixture is not isolated from custom-control path');
}
if (config.includes('assetSources:')) throw new Error('fixture is not isolated from asset-source path');
console.log(JSON.stringify({ proof: 'preview-openlink', interaction: 'one-click', isolated: true }));
