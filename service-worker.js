const cacheName = 'aidout';
const staticAssets = [
'https://aidout.blogspot.com/',
 'https://cdn.jsdelivr.net/gh/apsychoninja/blogger@master/site.webmanifest',
];

self.addEventListerner('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});


// CODELAB: Add list of files to cache here.
// const FILES_TO_CACHE = [
//   'https://cdn.jsdelivr.net/gh/googlecodelabs/your-first-pwapp@master/public/offline.html',
// ];
