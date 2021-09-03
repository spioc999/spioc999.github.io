'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1db736dca36513b7b09512682c9c1b07",
"favicon.ico": "8a4331e80830d68c873306905cda7f8b",
"index.html": "c1821c7d80c7d39e01623b83a79d9831",
"/": "c1821c7d80c7d39e01623b83a79d9831",
"main.dart.js": "2d411175f25f23529e1be0ec8830e104",
"README.md": "a7d1be5d8ffe1fe519037af3815c8bab",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9d7f0d7c70a32784fb4246ed9cb55361",
".git/config": "92cee881a130e776d5ad983a66c4eab7",
".git/objects/59/725372c947f5cbfe27a79c7a834f97195840dc": "af7b2eecf3195a76ae4783fcc6b41ee2",
".git/objects/68/17c1bd77e4c1d9ffc6267342c430d856ac99b5": "4639b24039135954dfdea013e7daef67",
".git/objects/9b/10f1dac6f875f832f238a933498bc968c3172d": "850d8ca4365eeb01cc21e78d64ae08d2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/ada721f54c8d569a189f15fcfc6e64860357ff": "f3f31a72291fa68c8fbd2e3c60f826ca",
".git/objects/3c/31584db93acfe974a42df5b36d2d63b6f965aa": "8b53a3d4e3f64e5d46e66969c9dde990",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/3d/aa0e171554db16f1b21ea4b3e66e573822b331": "de1dc4988d0372a5208cf5ee5f2a817c",
".git/objects/d1/8f14bc1509d82c167c9fcfb9fc297cfa36bd15": "c2bc21f4606530bf7c9ac2ed0ac49949",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/a631a4dd74f0788544b46580c10f8fec3eb44c": "c94223fd7657e38622dbb8018d1117c2",
".git/objects/cf/2f6493b4be8340d6f25362394b8b29b7a8226e": "7b87ed415b80a770eec96ce8220c687a",
".git/objects/fe/1578dfb946856c2384396f240f151ee621f427": "31ab9a097383f7e4de2d2138473160b6",
".git/objects/c1/b2737642f55e81d08578095b55253ad7f2ebad": "026544362ec05e49fa0f551b829fdaac",
".git/objects/20/cd25ddb1a7601226c70b4f65ef385937d7533d": "c7b4ae11e1c92c92b33508e0509f7f40",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/d84690a69edf975813802cb2c105ccbab4f6dc": "30fef45a8db2313cfdb720b6cdb2ca4d",
".git/objects/29/ff04031e9dd1ea36dde432c80e15038fdaf911": "99b0ab212f14533caabcba11f4ce9b26",
".git/objects/16/535bd51a23b9001e9dc965c3d6db74edcc698c": "d000ce6e3f616e52688d06803118d2b5",
".git/objects/42/09089a3f42156d3416c7e8a26de8c76634c84c": "fdbf3fe65812614ef00aa22bbc3cc377",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/43/c143ab94df0f116a250074c98bb98e607fec24": "4e7d76d4b52a3ecb3e1fa509ca43fba5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/0cbcfa22925a560b855009596408647b7b7483": "e1e4e48647873736b64f47af1c170ffb",
".git/objects/31/ced1eec302ed5ec3b5446b4ef045b3ae959f13": "f0d94018c5b220340228c1ae22b4ff68",
".git/objects/65/7e1de3676ab6bafee77ef0875db88f7b844d8a": "47545a43766c3634e30243d61d696f77",
".git/objects/96/0a91d8fdd249c89dee75e05da680f16d238509": "1369c6d328b4bd0511ee6fbbdeb86492",
".git/objects/96/ed7cbfa2345cbbc13612bc091261a9b1fa1029": "d2047def76d3c88b95c98df75b241ba0",
".git/objects/30/fd0d4f38a81904174c089899f657ff91d93787": "94eaa5c9273ed195a54a34b21deaeef2",
".git/objects/5b/ffe8a32b18fb90a4e63c0175684ef3e664a779": "db4a9a6b1034258fe290f52a736fb780",
".git/objects/90/79792fffe892fc02a68ad3e9bb8f43e9c4d9c1": "8e1e4a38ea19358b6d4cfe9830cb3328",
".git/objects/a7/1f03718a95801941855659eb7617d4c8b64511": "aed4a8f168a0edd7ad34d989a34c7fd0",
".git/objects/a9/030c0804269e5fd6bf7389b91fb263a43e6035": "7d17e0c5f900a5478bcbaeecbcf0a80e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/34dbc2a4480743d60064d02bf54074b066319c": "5b19361384f6ef1a1323d047cdedc330",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/46ee85208973ee10b6639539fc507e680a98bf": "72e90f63645d16692d6c64b9e5d99fbe",
".git/objects/fa/81ab4d4261cdaaeda189f02eb07dd2a05de829": "034781353fbd82cf3073f0913fe55a4c",
".git/objects/e9/afb761e3ba952e67f3308a9da5829553142cdf": "3d40d50fbf6c7296e5969822977a5ab6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/c2123d74e4f2fd0147cc3b14c9ea5a999df034": "cf8f1f13cd428924a28b921d0d641708",
".git/objects/2d/5e13900c9b78152a9a95e5e70a44e8fa519f4e": "afbbadcc32f21d262c033c2ed4210cbd",
".git/objects/48/38a0be7f76a3907b794b19f138e86300335342": "24c0f816f08ffa35af54444e6d469a1c",
".git/objects/24/0eb6fcbb7f02c965a754659dcc0ec6cd21f5dd": "c323fa60caad7affd234b8519f7aa9a0",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/bc0ed438145e08b091ca1cef41e98d1bff507f": "644f1bf25e85d1c5eb56769819393f9f",
".git/objects/7f/332a4c4ebd77934e3f1521e2ea6097ba141f0d": "c4e2b107d148bbe6e7774b96f0e51565",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/25/81a4c50a003f31d6606ff7beea2e3586121ce8": "74d782d51a420868a07bebf0eae8da23",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "408a7ba123bd292063b02e3bea33f3c8",
".git/logs/refs/heads/main": "0d7f831842205082a046c6694d1f5121",
".git/logs/refs/remotes/origin/main": "4ca85fdc24630d029b4bd4ad2ef77ff7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6ee49101ed000247ad58891cd5df0851",
".git/refs/remotes/origin/main": "6ee49101ed000247ad58891cd5df0851",
".git/index": "8f1eeef7817bc9262b880f322b1d5a97",
".git/COMMIT_EDITMSG": "45373f195da0a56044d4caf7d180cc04",
"assets/AssetManifest.json": "d192aa648ddb090a2a5281023a646bf9",
"assets/NOTICES": "a357d7676c039d860bc9822c03ea46cf",
"assets/FontManifest.json": "3a56dd1cf96b13a5a27adf0aa3e325c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/linkedin_icon.png": "6993db284e8b5d412f72c4f5db36abe9",
"assets/assets/images/flutter_icon.png": "53c5cc4157d3c17b4067a260e44a744e",
"assets/assets/images/1.jpg": "541bdacc192f810a55f20fa9c666ca47",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
