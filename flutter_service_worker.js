'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6cd743dbf863ff85b61b97380e9e083b",
"version.json": "0c408281055827bfc51b92fd524c1294",
"index.html": "b8ec8e366ceabcda0cfae5d980f65ed7",
"/": "b8ec8e366ceabcda0cfae5d980f65ed7",
"main.dart.js": "30693ee9a2fc80eef4579faeda6100e9",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "1316c1bf9f7d91b8db53e687637b8558",
"icons/favicon-16x16.png": "1316c1bf9f7d91b8db53e687637b8558",
"icons/apple-icon-144x144.png": "0c318743325e95b53639d8eef9c1e7ff",
"icons/android-icon-192x192.png": "09db1805c73100f161df1b44f75ceecb",
"icons/apple-icon-114x114.png": "2959408f2503eeb0c48bc0666d22b9bc",
"icons/apple-icon-57x57.png": "e7aca38ebc13ba9792e8b312926b979c",
"icons/apple-icon-152x152.png": "8712f958cd2d0052b72dac251479e495",
"icons/android-icon-72x72.png": "8e670fac8dad3d1c1964d26622655313",
"icons/android-icon-96x96.png": "c28d23d22c1d2abdeb901864ba53f298",
"icons/android-icon-36x36.png": "bd264100ba2c4018d3e2d9c0b4833364",
"icons/apple-icon-180x180.png": "8dc856de63c76b16988892ef569dccdc",
"icons/favicon-96x96.png": "c28d23d22c1d2abdeb901864ba53f298",
"icons/android-icon-48x48.png": "17e70aed05c73377fa8e3d7b4562ae0c",
"icons/apple-icon-76x76.png": "55c3b99ce21e2b920c0a90fbf2068c0a",
"icons/apple-icon-60x60.png": "e33c68cdee90fe4fbd110fd8ae9a863e",
"icons/android-icon-144x144.png": "0c318743325e95b53639d8eef9c1e7ff",
"icons/apple-icon-72x72.png": "8e670fac8dad3d1c1964d26622655313",
"icons/apple-icon-120x120.png": "a80a10180b88e80e2ff6261f4d04f504",
"icons/favicon-32x32.png": "1575bf028450a46063bf5ed6fa0c97ac",
"manifest.json": "3307f4d7eda70fb9019c848ea0e502af",
"assets/AssetManifest.json": "d211a338e518803233e53f0b1ccc8421",
"assets/NOTICES": "7b7006cd10314619b72f0bcd9a999b3c",
"assets/FontManifest.json": "1413675f106dfd34de02085b097a7f83",
"assets/AssetManifest.bin.json": "4ae37361f773596a31146a1bf29aceaa",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d97d2000edc598cb2af21b7a21605297",
"assets/fonts/bebas_neue/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/fonts/MaterialIcons-Regular.otf": "75278d220c8b4586eb1931466245fa6f",
"assets/fonts/fira_sans_condensed/FiraSansCondensed-Regular.ttf": "a6ce9bccb82f51e03315b02254df017c",
"assets/fonts/fira_sans_condensed/FiraSansCondensed-Bold.ttf": "32b208e3e998893d106e6d7606a2d9e8",
"assets/fonts/fira_sans_condensed/FiraSansCondensed-SemiBold.ttf": "7c2a254fa49aae3d89fe260f420497ef",
"assets/assets/imgs/me_serious.jpg": "875d532164cb5c8ab6dd5556b478e1a6",
"assets/assets/imgs/hobby_trumpet.jpg": "670241e401e3200be87598273fde7a17",
"assets/assets/imgs/education_torquay.jpg": "0a7ee6d7597935a25997f2d79ceec88b",
"assets/assets/imgs/me_smiling.jpg": "2ae10e50b78c4724e4f8edfdf465acc6",
"assets/assets/imgs/hobby_gdmi.jpg": "c499052bf5a2a421c4815d6850e5dc6d",
"assets/assets/imgs/education_polimi.jpg": "c3aa7dcde520b4d938c3c63a960bce17",
"assets/assets/imgs/hobby_basket.jpg": "3e471aa50294c3ef604e1f48d818f5d6",
"assets/assets/imgs/hobby_sea.jpg": "9e6a6c91cea091f8e3650e146398879c",
"assets/assets/imgs/experience_piggybank.jpg": "067793a963891430788ad95e4eecd2a5",
"assets/assets/imgs/education_ucbm.jpg": "2c0e20e268da30cbeb3bf123863533b2",
"assets/assets/imgs/hobby_lego.jpg": "d0a56e7fada79c1562c939b7ae578cfa",
"assets/assets/imgs/education_itis.jpg": "cc8a020cd551e82d551d237fb7c4137f",
"assets/assets/imgs/hobby_travelling.jpg": "f2d6d220bb0ef21668c4b1615e6d5be0",
"assets/assets/imgs/experience_nttdata.jpg": "059c51e9d2eb6aea71cc924a6df9d7ff",
"assets/assets/imgs/experience_fip.jpg": "aa6a23121634cc29c507d2ea9241fc8d",
"assets/assets/imgs/experience_alpiantech.jpg": "203f97dad7c55a117dc8fa1b24cbead9",
"assets/assets/imgs/education_elis.jpg": "1dbdc9e7cf2c7c766eb867a92a568ac3",
"assets/assets/imgs/hobby_racket.jpg": "bfc45dd988935b869f12fdb01bc7694e",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
