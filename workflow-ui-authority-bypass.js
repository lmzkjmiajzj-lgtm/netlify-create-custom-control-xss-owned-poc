(() => {
  const doc = parent.document;
  const root = doc.documentElement;
  root.setAttribute('data-workflow-ui-authority-bypass', 'confirmed');
  parent.__workflowUiAuthorityBypass = {
    marker: 'confirmed',
    delivery: 'external-github-pages-after-double-slash-rebase',
    parentOrigin: parent.location.origin,
    frameHref: location.href
  };

  if (doc.getElementById('workflow-ui-authority-bypass-proof')) return;
  const marker = doc.createElement('div');
  marker.id = 'workflow-ui-authority-bypass-proof';
  marker.textContent =
    'WORKFLOW UI AUTHORITY BYPASS CONFIRMED — external script modified app.netlify.com';
  Object.assign(marker.style, {
    position: 'fixed',
    top: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '2147483647',
    padding: '13px 20px',
    border: '3px solid #14b8a6',
    borderRadius: '12px',
    background: '#042f2e',
    color: '#ccfbf1',
    boxShadow: '0 12px 36px #0008',
    font: '700 15px system-ui'
  });
  doc.body.appendChild(marker);
})();
