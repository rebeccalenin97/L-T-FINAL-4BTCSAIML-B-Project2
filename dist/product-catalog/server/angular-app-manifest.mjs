
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/cart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 990, hash: 'dd3f97dc3ddc12990e5a5c036209e566dd3f11583d25b06c362bd5ff15dac7ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: '379853c46ee062849c590e3af541fe6816e91c277dab498fd38584b4276a0ef5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 1856, hash: '4e15c3b49b45b2688f9fa7544f2987180a284d1749b6b82eb6cb27e64072e6c5', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5509, hash: '716ccb3b64e5f67106da2aedec72f6f51f287011fdfc154e2dda4af66096b3ea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QFPVZ3XF.css': {size: 654, hash: '1dl2eK9raXc', text: () => import('./assets-chunks/styles-QFPVZ3XF_css.mjs').then(m => m.default)}
  },
};
