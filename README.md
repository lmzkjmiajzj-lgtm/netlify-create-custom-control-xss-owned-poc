# Netlify Create custom-control XSS owned fixture

Separate harmless proof for the `custom-inline-script` / `controlUrl` path.
The payload modifies only the top-level Create DOM with a visible marker.

- Public host: https://create-custom-control-xss-poc-20261015.netlify.app
- Marker: `data-netlify-create-custom-control-xss="confirmed"`
- No cookies, tokens, account data, or network exfiltration are collected.

The public host alone is inert. Execution occurs only when this owned repository
is loaded as a Netlify Visual Editor project.
