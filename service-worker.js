"use strict";var precacheConfig=[["/404.html","2e0ee85d6c985c1945313a8b4bceff6f"],["/_pages/index-1.html","fbea75d1f186d80b69b56a130695932e"],["/about/index.html","267aadded9d00aa13c0725c796b91841"],["/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/assets/svg/amsf.svg","66a4c8c0e9a0a1773b74cee979012b98"],["/configuration.html","833c0f9d0926ccc4a1b567ae61132a54"],["/contact/index.html","5f5a3e5072ebe14b2d9603b042e032b9"],["/creating-themes.html","9b5c8e129b223612b17042c020fda030"],["/custom-color-scheme.html","f4fde120c819cfa54da33f7f42cd455d"],["/custom-css.html","505f328adc4f55f80fcda8cad15dd3ae"],["/custom-heading-background.html","e2eca49ba8b329d3ddfe0d12ab43a285"],["/custom-heading-image.html","ada540b0281fceb5283e02f9f8fa593d"],["/custom-html-markups.html","c7b1f84876dfeb9d4156b88df2b662d5"],["/customizing-styles.html","d7fcdfdbdcfb86dc9b64bf4da61aa422"],["/deployment-methods.html","e99897e6a81cd4085f8dec23d9ae57b4"],["/external-link-post.html","6557e282c9d05ff3bcdfec6e8a1f89dd"],["/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/favicon.svg","9cbcc23fad50200d7768f8148fd58d4a"],["/getting-started.html","af989e051455e900b823e0b1e8ea98d2"],["/github-pages-setup.html","0a1c3ab60da857871361cd533cdd06c2"],["/index.html","f0c57403793bfb00cfc95713da777a98"],["/jekyll-theme-compatibility.html","9f2396452c56d82529ce98dad0890d1b"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/markdown-features-test.html","b8858077db90cbcd6ba8874d4aced06b"],["/markup-example.html","4ab1429bc9d57b54279e45a520adcb48"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","f80dc650247479e7612f729af3c68bcc"],["/news/index.html","8ffeda06f1d2506d265ac85a2901d135"],["/open-graph.html","477b23d6e3ad1df4829d293979521c3b"],["/svg-post-title.html","ee727b20c011db67de3a41a94192804b"],["/syntax-highlighting.html","e927f15d883fc7f13932be25517ed0dd"],["/theme-curtana.html","6cc44f3b805d8c0b60f9a0e57f3c1bf4"],["/themes.html","06a7be3ddd8ff88ecc2ba4769c116fe9"],["/upgrading-from-v1-to-v2.html","5cc0d803152bd3c8d2989624d7db3e01"],["/upgrading-guide-v1.1.0.html","d6167696bcb6e2bc005ef1f0fe0bcf54"],["/welcome.html","b2412bcd46cabbc26941f99cb560c87d"],["/work/index.html","2a25469af392be8df019fe357ff55d20"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return fetch(e.request)}))}});