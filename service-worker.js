"use strict";var precacheConfig=[["/404.html","a82264e05b1fa17af5ab66c7a906c65d"],["/_pages/index-1.html","fbea75d1f186d80b69b56a130695932e"],["/about/index.html","4b7c0cb4afd475cdea4dd29bc0ca284f"],["/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/configuration.html","a582c759ceca75e7f8e9ae1810d8210a"],["/creating-themes.html","d7065ec4b98e59597933b5c93782ec17"],["/custom-color-scheme.html","97ee3a3104ad561f76a2deadaee55f02"],["/custom-css.html","8f137f211d45ef80158dc433b2af4807"],["/custom-heading-background.html","e460906f59d39c76aa53eaa3797eaca1"],["/custom-heading-image.html","0852ebaf9238f520400880443f6b22ad"],["/custom-html-markups.html","4aab2bbe9c0e6684b28735d1b409254a"],["/customizing-styles.html","142332faf7593511d8b9c4852b35c3dd"],["/deployment-methods.html","66bccf44275a3202f8aba0af5e5e8020"],["/external-link-post.html","7a9fa11bd4fe2b1bf6debaf7ad09994e"],["/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/getting-started.html","9059cc09e1d0150f3e3db7bbe7b07553"],["/github-pages-setup.html","82e5df79e23713e489cad1c4347a5030"],["/index.html","40c639d4d45948fe36c013bc92a0095a"],["/jekyll-theme-compatibility.html","a0064e9ed11210f5380bc57110b214f0"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/markdown-features-test.html","d1f12ef146abd4c2e7a75a845ba89cb9"],["/markup-example.html","eb7353d9c4b6af9e3ce288aa969d7853"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","1cdc8615f919b9b3a4add4ec77f723c1"],["/news/index.html","4559fd4ad5a3f98358bf42129ba314c3"],["/open-graph.html","f5694bfaf0d42d09c40b51ba2bf32b05"],["/svg-post-title.html","3a57b3a860d46547e8f1e53423664855"],["/syntax-highlighting.html","fc07d0c4aa8d4a730cd3bbfa598efa61"],["/theme-curtana.html","811c46797860bdc1c0a3942463a8d8f9"],["/themes.html","640eb67c236dfb13852cbb88fa4eb5f4"],["/upgrading-from-v1-to-v2.html","bbd57e1f0676e7d104f3fc623e07649e"],["/upgrading-guide-v1.1.0.html","f5fd07a22fe21537e6aca5f0cd5aad9c"],["/welcome.html","a09049f32b7a7c9d3d7c66311b4bbdb0"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return fetch(e.request)}))}});