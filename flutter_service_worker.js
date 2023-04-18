'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2ed4e50143a7ac05b4a4fdabd47caa88",
"index.html": "73a43f5e8006167e1ebd4983d08c20ac",
"/": "73a43f5e8006167e1ebd4983d08c20ac",
"main.dart.js": "df698beff0ec6a90b75ea0a68d5ad28c",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7114360d6bc41a65efde15354d3970ba",
".git/config": "6da76150a9e5f4e62b438f6a0b1a4b77",
".git/objects/61/f67d7a86ee9131ce3e7c54ea10dbe50bc5b3bf": "9b4d2b3b532acd393c35e5e7d206bfec",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/57/9572bce6ca3f8a5cfe1ca9d84235abe7df6fb2": "282787e5b4f6d432cc954ab64c03bb4b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/b2/2bf3fbafe069a05c19d521e1f2afd573bc7bb1": "c3cce8c31469e0adcc6e9f3c806757fd",
".git/objects/bb/f7c7cdb4ca7b45b7f276d556a4f92b60fa905b": "1bedbcfa80b9f176b2db74cf86d57cbd",
".git/objects/bb/fbf9eafca376852aee1045ae818d9d50c9afd1": "86364d8598331157b0c318708839bf3d",
".git/objects/be/a0bffda57b5e15ee2471ae81ef32124b916062": "41033e46c53f5cfd2b7f9784c9bc8e4b",
".git/objects/b3/d061c4151025a79fcc623d3d32298637e64fd5": "da4a8d7ce0bdf8e0a10b40591c0e6377",
".git/objects/df/d4f6626b1045270b4cee325b8455c342c52d13": "bfa2df4e02ae33206558879960ceabf3",
".git/objects/b4/715f331b85cf1130a79f7bd0aae1ce600e33b4": "ac55e9b5ddc8c30401679b9edff59cfb",
".git/objects/d1/45b4e9a68812b7bc225d169ab9a725b5c42e51": "75f2d6c175ee6e84275627c99596b552",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d8/690e4ebfdc8d8d6dd6ae86c56ec1a5d58db498": "a923e0a940b4ab8c66e87bb1086efc86",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/6ae3b43efb522a9d9885b44a2c9cb1aebdefcc": "484e18846356719081ba4a48784c4741",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/cf/47f53d1ab63564ec8045c403205981eacd5ced": "480afc2a8c24cfc7d25fffbdae4d02ed",
".git/objects/c6/9f94b7869cdf5f396bc12de7279ee8029f2cc7": "98ee25944a0317979169e7aebf7c9b1d",
".git/objects/27/34c56da5f7100caf5054ec0149ec0eb1da5e4f": "cce356aea6c0ea03e711bb0a4330735e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/107ff8c25c8a9b82d49219a700237bd7911065": "be7ab5dddcb9d2c67faf792af452439e",
".git/objects/11/9eaf91349b7daeb228574ad374ab49643c9e89": "1ad0a2effc650b3b2dd6ca031dbd6320",
".git/objects/7d/5798e972b6f4beef347c8bbb371a356592cc5a": "e9db4c95ccb0ab2fc440e4ded781a59f",
".git/objects/7c/9270c3b778aa744cb9f43e0601f13465678d31": "b8ea6fb422657b54c1a96375c0834b1e",
".git/objects/89/162cb1ca97e56f4e0bf8eef828e68f563e13c6": "2a42055b3dfac7e3a7e691fd91232d5f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/139baf52dbbe0635ed45290ca50bf0e08972c5": "a3384d96c09c6c165f31b7b3184499ef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/a60d98366a08fcbf2fd836156462f072efea83": "19ef811b63022d76ae94793c92ddaac7",
".git/objects/75/05894018c921050ff311d8bd87d33618cb075d": "276b0f65a0cc77dfe54957b3f9f2da34",
".git/objects/2f/5e9d29ae3fc91b96d7abae7a0854818445d3ed": "e91d664398b7a29fcb18ce7b6d23887e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/8e122897ff3bc7417b14e4c93f2015e01b9dd2": "bcf69dceeeb77353eabe92a2b0cecda3",
".git/objects/07/a77ea3f1aaad1213c8f6063a5af05478820ef2": "810965c1540ae44bd7cf670db6cf316c",
".git/objects/6e/46d1575cb7d34350076836504a475eca78ae95": "3a90c57e20157551530924781e15b946",
".git/objects/9a/3dad315ef4eba7e4383a98a3c9211b2212cd7a": "3563acbd6c6c049e8dd8f79e5061fa8d",
".git/objects/09/886d57ca42aaafb907775d0c27a60cfb60e2e7": "900b685e56f35cc32f24356503180ace",
".git/objects/09/6817a3da723de35dfbab174610a75237e48071": "e08252872c10630edac7a0ea0759d9a1",
".git/objects/09/8b3da1494a19d537146e99b122af9376dbcd49": "23e4f8f28aa9fa7641f901a122feff88",
".git/objects/91/390709797a86b6eccff498e204c6f6ce878113": "f78ac40c6f689cd13e2f3d0af15dd862",
".git/objects/5e/e5158141e311d2b0d1b2eeca4a04441e0c5d57": "0c763e18cf825d4d56a49b19c9cbd9cf",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/9701b7c93681cce81ad92e3fb28625e4e3f5fc": "be16ea9fea28fce21aa7b505636597f7",
".git/objects/6d/340427d5011a297b6a2bc94062cea95e8eb8d0": "1f79dd7388939d0ffcd2fe144deddc88",
".git/objects/6d/32d0d5ced6d76247059a3e570773d424e6c10c": "0d47e99e2e9d67357d58057e0ee156aa",
".git/objects/6d/8a52c31f93e35b339822d08c100a21c253a577": "da053436eb818ba6a7da621c8431f500",
".git/objects/01/2eff3b985cb019758422abf774cef98ec57ed4": "8353bf4b595cbf9c7fbeab40970be1ee",
".git/objects/52/aa79b18f2dd483a4c479a13d51890daeeaf521": "0f82b5add43819162c4c207cbe9b335c",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/fc4ca24386ddc9b932ad7a7ff797f59f05b073": "bfd8e624ab97386a5a4b40721edb2f81",
".git/objects/0f/092801397bfba3fa06e118d05705ad32e11f07": "8414059bd6e8a4e6ed8f84707661d38d",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/bf/a3ce08bc812efca842a768d30b5f303b71a397": "b091a7818c1a0c8b93d289ced6a55a4a",
".git/objects/a9/9902dced6a112a02e95c92a90aa9bfa59f3e4d": "12402e64bc667f47345894d594ac86b9",
".git/objects/d2/153a7055a91c04947e58321195b231041874a1": "28fa79bc23c87ba20923c47893e530d5",
".git/objects/d2/7d748c2ca32e17f1015ccf3eebfdf04a218312": "4f5616b4b88a807293ddab8cc7749802",
".git/objects/aa/c86056ef8fe8c71219ed8a8673b746b1535d23": "4f78f614790e6e48fc5de33aee8b52f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/b2cf162d738b1456b6f6581bf840deba54ef9f": "239b30966863b360fbc2b3db9dc1334b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/33c415551bb06e33a0875dcd2925bbb7853fd8": "4e97c12a88ed0324b7de8093ae40a063",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/e38ce38708131267286fbf72e1db93f8b3480d": "833490135befa3e64cc9945e2cbaf4ed",
".git/objects/cc/5be397635cc9f1e0db285c02650ad5b6267071": "a5b815931903ca884d72421a189a4df6",
".git/objects/e6/4aae6d74c12cfc20b6c763a28ace54556a96b7": "5e90e8d4f3a0c4da864f619e890508f2",
".git/objects/e8/86c7818f90b41c8284f9d6190bfca6e2ee4fd6": "0baed60fc5e2e22e0bc9d8db210938a3",
".git/objects/e8/242438182701d57aee6e17e33fc2d9ed0ff7dc": "ff3c9fee6ed1995754e750c756c37dc1",
".git/objects/ff/ba3d29ff3d330a5a2454bc529db742a6d52966": "35178679f0e0ef10e0726d51a29eb0ce",
".git/objects/c2/8b916e174cc8074a37c2dc3043e5aff6889b21": "72eef7ec0b1dc91930935578c0dbcc29",
".git/objects/f1/bbdd67b383e9c23f7321ffe861ceb7f2d38a00": "21957b8f5b6b8ca0a9032f1bc15eb04f",
".git/objects/f1/761e71fcf992f722d67c1461c6d611bcbe3d67": "00a378ea8e5ffcad5786e82f0422710f",
".git/objects/e7/0fa76f57ed95cc914e5b9eea6d9bf4020efb7d": "7770383f05e95281595e91f63444d84b",
".git/objects/ce/370b5ad19a594c1a0706729c91a1707886a169": "e9c002fa4d3e19c53a44e2db1e28c642",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/fbfbea2fb79ad8e4d83e85b79e8d38fd1c2a88": "39b31c59609e4d7ae53169f84f6ee0bc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/72cf64d596e2a18ea78f5799358d4577e593d7": "82f6c154d1ead2b1c6f1ee1ad98414e4",
".git/objects/23/6a21378fe35be521b1c8c3f10460c40eb08f67": "9f0064dc4ed6b7bc87fe9c54dd6a58d6",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/8d/dbf838ac78ba176b7af47fe2ce19a4f46b703f": "e7e29e9b7b4e71525ae5b41409b54734",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/49/6b64fa7830d33dfdbb33a976e105274dd8d0f5": "7a1e44744c5d18c14993e642141c1524",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/310b5e5805cb8e311aa347fa8dc714c9ae5db2": "ab54e3c895118c1d6fed620f7c3a7f34",
".git/objects/40/b203082895ff304978af0f3527639f90c2a29b": "09e1b37e78d2bc006acbd9d8cee1b8a0",
".git/objects/2e/01dad916fb18b298984fd4cb069f8c0acc428d": "8d7c2e9327053d36145905509341206b",
".git/objects/2b/93a9f8d97fab0d7865615dd908e1b82159c7d9": "2a2009f8a5b9052ce80c14601b4a1d4e",
".git/objects/2b/710aa305c9ba7fb319dcbb012c64e910426c77": "330a32d7c094b0a21adcfb49f3f581b4",
".git/objects/14/1773de07d163afcfeda2eeab046d83a8e7afe4": "ba14125a75ae979314f293af2475bb72",
".git/objects/22/f849c5da5373f6dcc52a7f42dc84ea872b6132": "ed7e627af7293ea1a4bd3a0426aedd7f",
".git/objects/25/4ecbd0abc9e645e044256cf0f869c4ed32ed14": "c0a7d78e79c2b2891f0f8b5495c73773",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6050e844acb1c3b518dedea74b50889b",
".git/logs/refs/heads/main": "6050e844acb1c3b518dedea74b50889b",
".git/logs/refs/remotes/origin/main": "ad970316d0bbeb9fe91cfbff88ab9d05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0682abc9eaf8c6c4569f34e678670550",
".git/refs/remotes/origin/main": "0682abc9eaf8c6c4569f34e678670550",
".git/index": "eba6955b50a67159495eb52edcf98e5e",
".git/COMMIT_EDITMSG": "52dcaacb0f2e358e4e80003a8075de6a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "259068529bed6e57beac74e9760f7147",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"editor/jquery.min.js": "0732e3eabbf8aa7ce7f69eedbd07dfdd",
"editor/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"editor/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"editor/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"editor/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"editor/summernote-lite.min.css": "15fe28c3b4762d29c572c77b4f8115b9",
"editor/summernote-lite.min.js": "91dda6e41116fc7347e90bddf2db4386",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
