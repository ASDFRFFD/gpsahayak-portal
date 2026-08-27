// GPS Sahayak PWA Service Worker
const CACHE_NAME = 'gpsahayak-pwa-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/images/panchayat_favicon.png',
  '/images/panchayat_logo.png',
  '/tools/farmer-id-card-generator',
  '/tools/hindi-office-editor',
  '/tools/salary-calculator',
  '/tools/work-register'
];

// Install Event - Pre-cache essential app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-while-revalidate for fast app response
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Ignore chrome extensions or external cross-origin analytics from breaking cache
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Return offline fallback if network fails
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
