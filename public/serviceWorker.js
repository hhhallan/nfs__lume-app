const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

this.addEventListener('install', (e) =>  {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) =>  {
            console.log("Open cache");
        })
    )
})