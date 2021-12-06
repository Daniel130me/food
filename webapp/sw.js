const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    'js/ui.js',
    '/css/style.css',
];
//install service worker
self.addEventListener('install', evt => {
//     console.log("service worker has been installed")
    //wait until all assets are cache before install
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        }
    )
})

//activate service worker
self.addEventListener('activate', evt => {
    console.log("service worker has been activated")
})

//fetch event
self.addEventListener('fetch', evt => {
    console.log("fetch event", evt)
})
