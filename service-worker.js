"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","30dd59a239c15039ac9c561671fa10e8"],["/static/css/main.83981d8a.css","70150061b3389d5e3d5294046afee9d6"],["/static/js/main.94cdd974.js","e77713326f9752434272e243396c172c"],["/static/media/Aaug.f400ebba.mp3","f400ebba63bae716806c1cf6d1e0009e"],["/static/media/Adim.1f873741.mp3","1f873741e4bc1bd987d6e1a8cc2efde8"],["/static/media/Amajor.b8ccf84a.mp3","b8ccf84a15c49cafd4658c9483b1e30b"],["/static/media/Amajor7.067dadb1.mp3","067dadb166a693e027c64f4e01d784d5"],["/static/media/Aminor.3faf1569.mp3","3faf15695f4516ea39f9ddf12af78a79"],["/static/media/Aminor7.250405e9.mp3","250405e9c03fa90564152f84d4cafde1"],["/static/media/Baug.6ee9640e.mp3","6ee9640e816276133d44404a6045d444"],["/static/media/Bbdim7.6fc407a2.mp3","6fc407a23940f31dc0f15548e7025fc1"],["/static/media/Bbmajor.ad2377a8.mp3","ad2377a83bd02c9326838309d2eb21cc"],["/static/media/Bbmajor7.2d3c5223.mp3","2d3c52232027cf0706f7dd4e1adf5a9d"],["/static/media/Bbminor.ef93ed8f.mp3","ef93ed8fc4618e299e3332dd3d860663"],["/static/media/Bdim.bb4fdca1.mp3","bb4fdca181dff404338dbe435a26d145"],["/static/media/Bdim7.0cb8aaeb.mp3","0cb8aaebb9a5259c039e72378bb71b15"],["/static/media/Bmajor.710bfaa1.mp3","710bfaa1fec9ba804a2de6d94a53822f"],["/static/media/Bminor.94ee5363.mp3","94ee5363fdd195336e8a287aeae374c3"],["/static/media/Bminor7.b7804d9e.mp3","b7804d9e3454ff5b4d594823d41aec55"],["/static/media/Caug.d0720750.mp3","d0720750607bf14feb4edfed9ff96d82"],["/static/media/Cdim.d80e8454.mp3","d80e8454d4256762a3c2c5f1459ad6fa"],["/static/media/Cdim7.94e32ef4.mp3","94e32ef4c90f7bc84557787c461cc4b7"],["/static/media/Cdom7.9c97969f.mp3","9c97969fa6bc2601641b667dc2f4fb2c"],["/static/media/Cmajor.6d0a6421.mp3","6d0a642173848f0f7a4176f55c7b6ff6"],["/static/media/Cmajor7.fe8034d9.mp3","fe8034d95afe22079a2e47dcccefea2b"],["/static/media/Cminor.93cd01f9.mp3","93cd01f976c609e6606b532c6472d843"],["/static/media/Cminor7.5bc07df9.mp3","5bc07df999551aa0d156abbffc9271c2"],["/static/media/Csharpaug.cfd6e36a.mp3","cfd6e36a698b8c969a60d7d1fc2964f8"],["/music-theory-react-app/static/media/Csharpdim.635098ad.mp3","635098ad90f66cc13fcbae59b70f1f54"],["/music-theory-react-app/static/media/Csharpmajor.064fe020.mp3","064fe020d63a5b66fe8f26dc274bbf57"],["/music-theory-react-app/static/media/Csharpmajor7.2e7ec9b0.mp3","2e7ec9b0aa25d4cf200a77f2b56bbfc5"],["/music-theory-react-app/static/media/Csharpminor.0df20aff.mp3","0df20aff35ae46b5fb17546ed5c74b93"],["/music-theory-react-app/static/media/Daug.68eaffca.mp3","68eaffca430dbda42f192a74e9ae77ed"],["/music-theory-react-app/static/media/Ddim.b1c54b85.mp3","b1c54b8542ed41cf9f5b8ccc4a496cd5"],["/music-theory-react-app/static/media/Ddom7.c40108f4.mp3","c40108f4297a20c889bdde2e3f8afc2a"],["/music-theory-react-app/static/media/Dmajor.4bf3071b.mp3","4bf3071bc68fc72980d37b21646b3e6f"],["/music-theory-react-app/static/media/Dminor.5c38e9fb.mp3","5c38e9fbe467265edb1e6eeaa7441946"],["/music-theory-react-app/static/media/Dminor7.8a89cd3d.mp3","8a89cd3dbbe6472ea872e64e49be6a3a"],["/music-theory-react-app/static/media/Eaug.6b49e42a.mp3","6b49e42a8231afda978eb8b2b17a1014"],["/music-theory-react-app/static/media/Ebminor.88fea4e1.mp3","88fea4e1d49744b8ea9c7356fe945b03"],["/music-theory-react-app/static/media/Ebminor7.97f6c703.mp3","97f6c70392bd0e68085e567aa1f5cb18"],["/music-theory-react-app/static/media/Edim.cee927fa.mp3","cee927fa1252ec051cc671f96243c7d3"],["/music-theory-react-app/static/media/Edim7.bf55f6cf.mp3","bf55f6cfe928626b97e6869fdb7a175f"],["/music-theory-react-app/static/media/Edom7.638cdb86.mp3","638cdb86c62f5b547a82e9fb17a06fab"],["/music-theory-react-app/static/media/Emajor.e6e3bfa9.mp3","e6e3bfa980006da7f0690333850079e4"],["/music-theory-react-app/static/media/Eminor.e4415a64.mp3","e4415a640d4a1e0c77803c7bf67497df"],["/music-theory-react-app/static/media/Fdom7.5c9dc26c.mp3","5c9dc26c535393b2f5641500dfbb5d26"],["/music-theory-react-app/static/media/Fmajor7.42697775.mp3","426977751f817768cbee4498c898b561"],["/music-theory-react-app/static/media/Fminor7.b9abd09e.mp3","b9abd09e73afe9f9d744da84068c76de"],["/music-theory-react-app/static/media/Gaug.fdfafc2e.mp3","fdfafc2e9d78ca24a377d14f0358c05e"],["/music-theory-react-app/static/media/Gdim.967e254c.mp3","967e254c9e433d9c54278d42a39c408d"],["/music-theory-react-app/static/media/Gdim7.443099bd.mp3","443099bd5ce3cea832814f413ef8b5c4"],["/music-theory-react-app/static/media/Gdom7.8f40fc14.mp3","8f40fc14b33dbcc222679fb8ee7d1bc6"],["/music-theory-react-app/static/media/Gmajor.3d7c29c9.mp3","3d7c29c9ab7cc9d4ece1aaa72105d192"],["/music-theory-react-app/static/media/Gminor.80f49bb5.mp3","80f49bb5396082bb8aea5ac93997b8df"],["/music-theory-react-app/static/media/Gminor7.2f089498.mp3","2f089498bd13273649f8d623d2737cb0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),r=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
