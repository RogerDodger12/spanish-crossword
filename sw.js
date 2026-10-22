// Crucigrama service worker: lets the app open and play with no internet.
// Strategy: try the network first (so word-list updates show up right away),
// and fall back to the saved copy when offline.
const CACHE = 'crucigrama-v1';
const FILES = ['./', 'index.html', 'units.js', 'manifest.json',
               'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.ok) {
        const copy = res.clone();
        // units.js is requested with a changing ?v= number; store it under its plain name
        const key = new URL(req.url); key.search = '';
        caches.open(CACHE).then(c => c.put(key.href, copy));
      }
      return res;
    }).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(hit =>
        hit || (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))
    )
  );
});

