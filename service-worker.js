"use strict";var precacheConfig=[["/404.html","a1b163a036e03f08a76b0963d186c053"],["/_pages/index-1.html","fbea75d1f186d80b69b56a130695932e"],["/about/index.html","a2a58c03819d9c3d17b80d09bb40f672"],["/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/configuration.html","850d243bb2b73fe4eabdc051b914ab26"],["/creating-themes.html","bc7d2e4b7b6f4d370028c6261df82949"],["/custom-color-scheme.html","6406f6b9503ee58276b1beed21e01ffe"],["/custom-css.html","10e36d64bd8ebaa7e1789ceb86d320c9"],["/custom-heading-background.html","2ddcf55d56d3e62e60f06fa8fd8d9479"],["/custom-heading-image.html","2e4c1241f511926f68fc4926b87047e8"],["/custom-html-markups.html","fe343050050b6b984ed263de21a80569"],["/customizing-styles.html","1f66cf97cdd4d0faa7c283f9f9893039"],["/deployment-methods.html","d0d19586cf60ad46a6495acb053d44ba"],["/external-link-post.html","898df1147e6c99d0a7acfee1be1e9a09"],["/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/getting-started.html","4d79fbf6792bc3a4afab60194eb634cc"],["/github-pages-setup.html","2c03a728d83bd719ee1c727bc593a345"],["/index.html","7d204b7d9878971b7576ffb3ab01b37c"],["/jekyll-theme-compatibility.html","12e020ec7b9a27b5e803b07fdbe7d065"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/markdown-features-test.html","128dd36c4fdc25777a4d01438312b8bf"],["/markup-example.html","e48ed69293344eeebdce2ca88c422fdc"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","56d9c0811fa7e5661bea597fcc6f8092"],["/news/index.html","efa6485a142558ef3e4cd889823e6373"],["/open-graph.html","e5e7e97ccc66f0afd255247ab44fbb86"],["/svg-post-title.html","1a7337f371481f1da0e106f3fbb0a4e6"],["/syntax-highlighting.html","923bdaf6ac3cd2757a1614984a218798"],["/theme-curtana.html","8b0de9225ca9b1d271a193ef3c77fec0"],["/themes.html","6b5d6018cf1aa402b7074de673f9f7bf"],["/upgrading-from-v1-to-v2.html","1e58410d69230fa005319c0ef037b081"],["/upgrading-guide-v1.1.0.html","b4e798338647a91a750bbcb90b0b17a7"],["/welcome.html","837bf50184ce025a73cc69e905799047"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return fetch(e.request)}))}});