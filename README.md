# Netlify Create preview openLink XSS owned fixture

Separate harmless proof for the configured-preview `openLink` message path.
After the normal Visual Editor handshake, one button click sends a
`javascript:` URL to the trusted parent, which currently passes it to
`window.open` without scheme validation.

- Marker: `data-netlify-create-openlink-xss="confirmed"`
- No Custom Control or Asset Source is configured on this branch.
- No cookies, tokens, account data, or network exfiltration are accessed.

The public page is inert outside an authorized Visual Editor preview iframe.
