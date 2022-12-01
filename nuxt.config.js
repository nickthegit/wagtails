export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    GOOGLE_API: process.env.GOOGLE_API,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wagtails',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Beautiful 2 Bedroom, Detached Country Holiday Let in Stunning Dorset',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/_all.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/sanity-image-builder.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/sanity/module',
  ],
  sanity: {
    projectId: process.env.SANITY_ID,
    dataset: 'production',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en',
  //   },
  //   icon: {
  //     source: 'wag-icon.png',
  //   },
  //   meta: {
  //     title: 'Wgatials',
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ['swiper'],
  },
}
