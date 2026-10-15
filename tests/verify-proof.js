const fs = require('fs');
const vm = require('vm');
const attrs = new Map();
const ids = new Map();
const root = { setAttribute: (k, v) => attrs.set(k, String(v)), getAttribute: (k) => attrs.get(k) || null };
const body = { appendChild: (node) => { if (node.id) ids.set(node.id, node); } };
const document = {
  documentElement: root,
  body,
  getElementById: (id) => ids.get(id) || null,
  createElement: (tag) => ({ tagName: tag.toUpperCase(), style: {}, id: '', textContent: '' })
};
vm.runInNewContext(fs.readFileSync('custom-control.js', 'utf8'), { parent: { document } });
if (root.getAttribute('data-netlify-create-custom-control-xss') !== 'confirmed') throw new Error('parent marker missing');
if (!ids.has('netlify-create-custom-control-xss-proof')) throw new Error('visible marker missing');
const config = fs.readFileSync('stackbit.config.ts', 'utf8');
if (!config.includes("controlType: 'custom-inline-script'")) throw new Error('custom-control source missing');
if (config.includes('assetSources:')) throw new Error('fixture is not isolated from asset-source path');
console.log(JSON.stringify({ proof: 'custom-control', marker: 'confirmed', isolated: true }));
