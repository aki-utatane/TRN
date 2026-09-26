const CACHE_NAME = 'trn-offline-0.1.5at1-v1';

const ASSETS = [
  new URL('./index.html', self.location).href,
  new URL('./TRN_0.1.5x_CLOSED_FINAL_0.1.5at1.html', self.location).href
];

const ASSET_SET = new Set(ASSETS);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!ASSET_SET.has(event.request.url)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(event.request);

    if (cached) return cached;

    const response = await fetch(event.request);
    if (response.ok) {
      await cache.put(event.request, response.clone());
    }
    return response;
  })());
});
