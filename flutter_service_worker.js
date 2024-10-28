'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.wasm": "a61a5f94a058bd181b78672f019595fa",
"main.dart.js": "b936c936b4263f1262d1570c41f94230",
"main.dart.mjs": "fed577b55c58c416bb1a49cec2027565",
"assets/FontManifest.json": "1413675f106dfd34de02085b097a7f83",
"assets/AssetManifest.bin": "764bbe30a77602aac087ef8ae672c0f5",
"assets/fonts/fira_sans_condensed/FiraSansCondensed-SemiBold.ttf": "7c2a254fa49aae3d89fe260f420497ef",
"assets/fonts/fira_sans_condensed/FiraSansCondensed-Regular.ttf": "a6ce9bccb82f51e03315b02254df017c",
"assets/fonts/fira_sans_condensed/FiraSansCondensed-Bold.ttf": "32b208e3e998893d106e6d7606a2d9e8",
"assets/fonts/bebas_neue/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/fonts/MaterialIcons-Regular.otf": "825e07d1ea210381323f9cccc27e9489",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/assets/pdfs/simone_pio_caronia_cv.pdf": "8c47f172dabd133d85d40f9813bdef70",
"assets/assets/imgs/hobby_trumpet.jpg": "670241e401e3200be87598273fde7a17",
"assets/assets/imgs/hobby_basket.jpg": "3e471aa50294c3ef604e1f48d818f5d6",
"assets/assets/imgs/me_smiling.jpg": "2ae10e50b78c4724e4f8edfdf465acc6",
"assets/assets/imgs/experience_nttdata.jpg": "059c51e9d2eb6aea71cc924a6df9d7ff",
"assets/assets/imgs/hobby_lego.jpg": "d0a56e7fada79c1562c939b7ae578cfa",
"assets/assets/imgs/hobby_gdmi.jpg": "c499052bf5a2a421c4815d6850e5dc6d",
"assets/assets/imgs/education_ucbm.jpg": "2c0e20e268da30cbeb3bf123863533b2",
"assets/assets/imgs/hobby_racket.jpg": "bfc45dd988935b869f12fdb01bc7694e",
"assets/assets/imgs/experience_alpiantech.jpg": "203f97dad7c55a117dc8fa1b24cbead9",
"assets/assets/imgs/me_serious.jpg": "875d532164cb5c8ab6dd5556b478e1a6",
"assets/assets/imgs/experience_piggybank.jpg": "067793a963891430788ad95e4eecd2a5",
"assets/assets/imgs/education_elis.jpg": "1dbdc9e7cf2c7c766eb867a92a568ac3",
"assets/assets/imgs/education_polimi.jpg": "c3aa7dcde520b4d938c3c63a960bce17",
"assets/assets/imgs/experience_fip.jpg": "aa6a23121634cc29c507d2ea9241fc8d",
"assets/assets/imgs/education_itis.jpg": "cc8a020cd551e82d551d237fb7c4137f",
"assets/assets/imgs/hobby_sea.jpg": "9e6a6c91cea091f8e3650e146398879c",
"assets/assets/imgs/education_torquay.jpg": "0a7ee6d7597935a25997f2d79ceec88b",
"assets/assets/imgs/hobby_travelling.jpg": "f2d6d220bb0ef21668c4b1615e6d5be0",
"assets/NOTICES": "b59dd4939f58fe5a6b1ac2c112df2a72",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "aca875786b6272cb2ace84197126eb54",
"assets/AssetManifest.bin.json": "a18d7816d6906f8b808fe869f78a05b2",
"index.html": "3442833cc5360e2877cbc5f3474918ee",
"/": "3442833cc5360e2877cbc5f3474918ee",
"manifest.json": "97f4cc12e92a7cff0648ddd7527ff48c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"icons/android-icon-72x72.png": "8e670fac8dad3d1c1964d26622655313",
"icons/android-icon-36x36.png": "bd264100ba2c4018d3e2d9c0b4833364",
"icons/apple-icon-57x57.png": "e7aca38ebc13ba9792e8b312926b979c",
"icons/apple-icon-76x76.png": "55c3b99ce21e2b920c0a90fbf2068c0a",
"icons/apple-icon-180x180.png": "8dc856de63c76b16988892ef569dccdc",
"icons/favicon-16x16.png": "1316c1bf9f7d91b8db53e687637b8558",
"icons/apple-icon-120x120.png": "a80a10180b88e80e2ff6261f4d04f504",
"icons/apple-icon-144x144.png": "0c318743325e95b53639d8eef9c1e7ff",
"icons/apple-icon-114x114.png": "2959408f2503eeb0c48bc0666d22b9bc",
"icons/apple-icon-72x72.png": "8e670fac8dad3d1c1964d26622655313",
"icons/android-icon-96x96.png": "c28d23d22c1d2abdeb901864ba53f298",
"icons/android-icon-192x192.png": "09db1805c73100f161df1b44f75ceecb",
"icons/favicon-32x32.png": "1575bf028450a46063bf5ed6fa0c97ac",
"icons/android-icon-48x48.png": "17e70aed05c73377fa8e3d7b4562ae0c",
"icons/apple-icon-60x60.png": "e33c68cdee90fe4fbd110fd8ae9a863e",
"icons/android-icon-144x144.png": "0c318743325e95b53639d8eef9c1e7ff",
"icons/apple-icon-152x152.png": "8712f958cd2d0052b72dac251479e495",
"icons/favicon-96x96.png": "c28d23d22c1d2abdeb901864ba53f298",
"favicon.png": "1316c1bf9f7d91b8db53e687637b8558",
"version.json": "548bc1e0940059ef5fc1b0f4d2b4487b",
"flutter_bootstrap.js": "980ade541160b35d007c41206daafcc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
