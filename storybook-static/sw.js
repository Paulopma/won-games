if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        t[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const t = document.createElement('script')
              ;(t.src = e), document.head.appendChild(t), (t.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!t[e]) throw new Error(`Module ${e} didn’t register its module`)
          return t[e]
        })
      )
    },
    s = (s, t) => {
      Promise.all(s.map(e)).then((e) => t(1 === e.length ? e[0] : e))
    },
    t = { require: Promise.resolve(s) }
  self.define = (s, n, r) => {
    t[s] ||
      (t[s] = Promise.resolve().then(() => {
        let t = {}
        const i = { uri: location.origin + s.slice(1) }
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case 'exports':
                return t
              case 'module':
                return i
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = r(...e)
          return t.default || (t.default = s), t
        })
      }))
  }
}
define('./sw.js', ['./workbox-030153e1'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/Sq-q-fewlTNythMq7KWWA/_buildManifest.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/_next/static/Sq-q-fewlTNythMq7KWWA/_ssgManifest.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url:
            '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.4f28a96f7c001568836d.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url:
            '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.4ebf78ecffe6d3aa1f4e.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/_next/static/chunks/main-2fcb2dca6953d7eefb54.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/_next/static/chunks/pages/_app-1a99a7fc46e26ce48caa.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/_next/static/chunks/pages/_error-abdb1aaa0c2a6edf091c.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/_next/static/chunks/pages/index-621eae6149008cd4443b.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js',
          revision: 'Sq-q-fewlTNythMq7KWWA'
        },
        {
          url: '/img/hero-illustration.svg',
          revision: '5fd5143cba1046a214d9a359fce22e89'
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444'
        },
        {
          url: '/img/icon-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84'
        },
        { url: '/img/logo.svg', revision: '202525302ad30aca5b2b790d4b0b5796' },
        { url: '/manifest.json', revision: '78d1b8cbe4e8ccf9ed824cceef9d5791' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    )
})
