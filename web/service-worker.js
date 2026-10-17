const CACHE='cap-objectifs-v1';const FILES=['./','./index.html','./style.css','./calendar.css','./gamify.css','./extras.css','./complete.css','./morning.css','./welcome.css','./app.js','./morning.js','./memo.js','./pwa.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(found=>found||fetch(event.request))));
