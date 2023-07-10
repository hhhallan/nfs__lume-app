const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

self.addEventListener('install', function(event) {
    // Téléchargement des ressources statiques de l'application
    event.waitUntil(
        caches.open('app-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/main.css',
                '/main.jsx',
                '/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    // Supprime les anciennes versions de cache
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Supprime tous les caches sauf le cache actuel
                    return cacheName !== 'app-cache';
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Renvoie la ressource mise en cache si elle existe
            // Sinon, effectue une requête réseau normale
            return response || fetch(event.request);
        })
    );
});