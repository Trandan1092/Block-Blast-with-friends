const CACHE_NAME = 'block-blast-v1';
const urlsToCache = [
  './',
  './index.html',
  './sounds/background1.mp3',
  './sounds/background2.mp3', 
  './sounds/background3.mp3',
  './sounds/place.mp3',
  './sounds/clear.mp3',
  './sounds/gameover.mp3',
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
