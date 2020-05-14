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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6e89682db0d560ac3ba0.js"
  },
  {
    "url": "app-24632303a91bd6e9a949.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5ebcebdf37e4b3f024b9.js"
  },
  {
    "url": "index.html",
    "revision": "5eb1e58fa59fa25bad82587e452c885d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a4fd6f128f411a1d60adc39f6468f8d3"
  },
  {
    "url": "component---src-pages-index-js.402de5474b819a0d412d.css"
  },
  {
    "url": "component---src-pages-index-js-8d2bc18d2af7e3375367.js"
  },
  {
    "url": "6-b968d6ec85166c08211c.js"
  },
  {
    "url": "0-5ec35dfd561fd41135f4.js"
  },
  {
    "url": "static/d/366/path---index-6a9-h0BXZEaUnP3n1o3F7Wc2DZcqfg.json",
    "revision": "ffe905a0f2e8a369183f3e78e16a39f4"
  },
  {
    "url": "component---src-pages-404-js.402de5474b819a0d412d.css"
  },
  {
    "url": "component---src-pages-404-js-b4e37ebc01fc6a58d43c.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/api-docs/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});