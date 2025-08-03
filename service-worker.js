const cacheName = 'flashcard-app-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/config.js',
    '/manifest.json',
    '/service-worker.js',
    '/icon-192.png',
    '/icon-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedRes => {
            return cachedRes || fetch(event.request);
        })
    );
});
