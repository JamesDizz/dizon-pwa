const cacheName = 'poetic-palette-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/dizonnnn.png',
  '/coveer.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
