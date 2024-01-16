/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2.x/products/bundle.html",
    "revision": "464b18d0d65af03773773ddf58047352"
  },
  {
    "url": "2.x/products/configurable.html",
    "revision": "621a1451ce34a1748e73a0eaf3a72cf6"
  },
  {
    "url": "2.x/products/downloadable.html",
    "revision": "eef129f57d222bae616e4913c2702b77"
  },
  {
    "url": "2.x/products/grouped.html",
    "revision": "7e598605b8c0a1b42fd42650ab1dc6d2"
  },
  {
    "url": "2.x/products/index.html",
    "revision": "ef7cf28f088a57b759b3231f1134fdea"
  },
  {
    "url": "2.x/products/simple.html",
    "revision": "0b2396b0d6f25a91bdb33c4ebda0b56e"
  },
  {
    "url": "2.x/products/virtual.html",
    "revision": "fd4433d66f29eb950835aac1e6b3d5bb"
  },
  {
    "url": "404.html",
    "revision": "eee9d705cbaa445feee7877fd8a6fd51"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/bundle.5302b129.png",
    "revision": "5302b129967146ebc686735ba8c55ff0"
  },
  {
    "url": "assets/img/bundleOptions.01cb8cdc.png",
    "revision": "01cb8cdc5eeee8f6684dd51da2050d5a"
  },
  {
    "url": "assets/img/configurable.9fa6fb76.png",
    "revision": "9fa6fb7664af716acdf07eb82708f5ba"
  },
  {
    "url": "assets/img/configurableAttributes.0341eddd.png",
    "revision": "0341eddd298735466ee157f6485d9706"
  },
  {
    "url": "assets/img/description.40848a5f.png",
    "revision": "40848a5f5f247f682852c84998efa3c0"
  },
  {
    "url": "assets/img/description.8a01022f.png",
    "revision": "8a01022faa9c7169b3b464d3b50ae2db"
  },
  {
    "url": "assets/img/description.cf62b04a.png",
    "revision": "cf62b04aa2f445f10339b56579fa52f8"
  },
  {
    "url": "assets/img/descriptions.765ffef8.png",
    "revision": "765ffef8e6c1d256cd89e6cd63e8a99e"
  },
  {
    "url": "assets/img/editProduct.a0f174d2.png",
    "revision": "a0f174d28c7d61054863da62174ba8d1"
  },
  {
    "url": "assets/img/editProduct.f3d03ba3.png",
    "revision": "f3d03ba38a9663379dd57eb22b49d626"
  },
  {
    "url": "assets/img/editProduct.fff08496.png",
    "revision": "fff0849642df2f8807b13fad295e8837"
  },
  {
    "url": "assets/img/editProducts.1d1ea4f3.png",
    "revision": "1d1ea4f388a0ccd939097fe3c8139328"
  },
  {
    "url": "assets/img/image.6a9cc529.png",
    "revision": "6a9cc529f91e47c9fed2a5bca27de29a"
  },
  {
    "url": "assets/img/image.ac99298b.png",
    "revision": "ac99298bc7c874fc29cd2279398e2655"
  },
  {
    "url": "assets/img/image.b30e57d4.png",
    "revision": "b30e57d4619cab816c7f63f1f039c26a"
  },
  {
    "url": "assets/img/image.e99c275b.png",
    "revision": "e99c275be41933e50a8ebfbb862e0e59"
  },
  {
    "url": "assets/img/metaDescription.16764ed9.png",
    "revision": "16764ed924978ceba5e8309f09f5ca78"
  },
  {
    "url": "assets/img/metaDescription.74f66c89.png",
    "revision": "74f66c899f15052cfaaa76033580ef0e"
  },
  {
    "url": "assets/img/metaDescription.afb36600.png",
    "revision": "afb36600eab84ea9868a197a962dde20"
  },
  {
    "url": "assets/img/metaDescriptions.4dfbc31b.png",
    "revision": "4dfbc31baabc5bdc385e298bb43d42b2"
  },
  {
    "url": "assets/img/options.001937e2.png",
    "revision": "001937e250d31e5f629729cfe7151e50"
  },
  {
    "url": "assets/img/output.31b099f6.png",
    "revision": "31b099f668578a9215701cbe7e382c5a"
  },
  {
    "url": "assets/img/output.c8ed1df3.png",
    "revision": "c8ed1df3080c6c55af735ddb1d491ff7"
  },
  {
    "url": "assets/img/output.cc9621ee.png",
    "revision": "cc9621eecc949453e93b99ae86a9ce7e"
  },
  {
    "url": "assets/img/price.86fae45c.png",
    "revision": "86fae45cb1a4e4afe4bde5667ab03074"
  },
  {
    "url": "assets/img/price.b32785ac.png",
    "revision": "b32785acffd1121a1079927e0670f95a"
  },
  {
    "url": "assets/img/product.4402c959.png",
    "revision": "4402c959fad67f9bbeb0855e84b8e541"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/simple.548f03a1.png",
    "revision": "548f03a1366af976be5f6baa86428155"
  },
  {
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
  },
  {
    "url": "assets/img/variations.9be19c16.png",
    "revision": "9be19c168dd7dc86d64dd341abb15832"
  },
  {
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/js/1.8d1309f7.js",
    "revision": "7c455b29f8958a5845277e4e0c1965f4"
  },
  {
    "url": "assets/js/10.223754d8.js",
    "revision": "41fccd27db8a1faab039495fb9c632e0"
  },
  {
    "url": "assets/js/11.535d309e.js",
    "revision": "43d2beda3fe9e287cb7ae6391dee38c5"
  },
  {
    "url": "assets/js/12.7f15ecab.js",
    "revision": "f3d43ed3aeefc36f5d0fa01670677329"
  },
  {
    "url": "assets/js/13.f0f5caa8.js",
    "revision": "a69dedf690256df27fe170a40dde1b4c"
  },
  {
    "url": "assets/js/14.b21af8fa.js",
    "revision": "abd0a8c815cfa28de1904ca9bfa068cb"
  },
  {
    "url": "assets/js/15.bf289bd8.js",
    "revision": "2a6f16366a6f9fd6d1d894b85502ae1f"
  },
  {
    "url": "assets/js/16.d50a6791.js",
    "revision": "3079d0b6167083f6f425eabffd0020e5"
  },
  {
    "url": "assets/js/17.89eadde8.js",
    "revision": "21b285663a2ed94712fea32ee9bdd4f2"
  },
  {
    "url": "assets/js/18.b06ccb03.js",
    "revision": "b26f6ad7332390336af978a31607c870"
  },
  {
    "url": "assets/js/19.f79aca12.js",
    "revision": "1dc105c27133ddabf952c85d1832b3ed"
  },
  {
    "url": "assets/js/2.e48b8fe5.js",
    "revision": "7f9357088ade3b50ac80e1a2ac42699b"
  },
  {
    "url": "assets/js/20.f18130ba.js",
    "revision": "916ed201b4d4368bc4841975cd819af8"
  },
  {
    "url": "assets/js/21.b038100c.js",
    "revision": "f28c5746622e65c7450cfc1e3247280a"
  },
  {
    "url": "assets/js/22.90205bc8.js",
    "revision": "6f4586dc52e0465574c93644e72bf6ea"
  },
  {
    "url": "assets/js/23.ccf18d64.js",
    "revision": "61c3e060b850d9197f11c8e95304689f"
  },
  {
    "url": "assets/js/24.ca58c34f.js",
    "revision": "8a67519f8949f6e7171ab4ef087d9f0f"
  },
  {
    "url": "assets/js/25.97c7788e.js",
    "revision": "00babb2468c984a96b6cea024ab2407e"
  },
  {
    "url": "assets/js/26.ff11d878.js",
    "revision": "624a850f90451817da6b89e7992a02eb"
  },
  {
    "url": "assets/js/27.9d9d11ce.js",
    "revision": "4cedd3a577ae5e1c1c77e884a884888f"
  },
  {
    "url": "assets/js/28.7b9f99ce.js",
    "revision": "be51a4486bd8713d919be9d91a87b33a"
  },
  {
    "url": "assets/js/3.63669f64.js",
    "revision": "0c99edb6179dd07118a185ad4b3b8859"
  },
  {
    "url": "assets/js/4.4ac0bcc1.js",
    "revision": "b6fbd191fccfb1c49aa1b40d5238faa1"
  },
  {
    "url": "assets/js/5.07da705c.js",
    "revision": "78a02ecd64d68456c43f1708dc089254"
  },
  {
    "url": "assets/js/8.29c8b4a7.js",
    "revision": "9f3c5e7665d04fab4cf54c80fef5f2aa"
  },
  {
    "url": "assets/js/9.e70a4052.js",
    "revision": "c05649f62419f75676de5e441cc09e72"
  },
  {
    "url": "assets/js/app.a6cf5ef7.js",
    "revision": "2c9a42b38ac5258f3fec1dbb864510ea"
  },
  {
    "url": "assets/js/vendors~docsearch.1a0149e0.js",
    "revision": "9eedd14f355fc7447364cf3a805d2885"
  },
  {
    "url": "index.html",
    "revision": "a15f7400b00f7e39d3ee63ab35a44ee6"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
