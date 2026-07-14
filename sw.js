const CACHE_NAME = 'wedding-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/base.css',
  './css/layout.css',
  './css/components.css',
  './css/sections.css',
  './js/main.js',
  './js/config.js',
  './assets/images/hero/cover.jpg',
  './assets/images/hero/hero-bg.jpg'
];

// Install: Caching aset utama
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Fetch: Strategi Cache First (Utamakan cache, jika tidak ada baru ambil dari internet)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(networkResponse => {
          // Cache gambar galeri secara dinamis saat pertama kali dibuka
          if(event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
             caches.open(CACHE_NAME).then(cache => {
               cache.put(event.request, networkResponse.clone());
             });
          }
          return networkResponse;
        });
      })
  );
});