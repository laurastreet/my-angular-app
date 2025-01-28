
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/laurastreet.dev/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/laurastreet.dev"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 512, hash: '0745005903f2d8c73e975514a1023076c036944c359bb38221ea43b2240aa66a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '5768af6421a0ac4b5e50eca015e0afa275289f0a012b4c590eefe2f7d3100805', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20858, hash: '1b1f7b1a3229608fbe3daf694aa1fdafbe62fc7e5f334e6df18209dd05e7d29d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
