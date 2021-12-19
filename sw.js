const staticCacheName = 'site-static';
const assets = [
    'index.html',
    'n.html',
    './css/styles.css',
    './js/ui.js',
    './js/app.js',
    './js/materialize.min.js',
    './img/dish.png',
    'https:fonts.googleapis.com/icon?family=Material+Icons'
];
//install service worker
self.addEventListener('install', evt => {
//     console.log("service worker has been installed")
    //wait until all assets are cache before install
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

//activate service worker
self.addEventListener('activate', evt => {
    console.log("service worker has been activated")
})

//fetch event
self.addEventListener('fetch', evt => {
    console.log("fetch event", evt)
})
