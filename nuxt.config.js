export default {
  mode: 'universal',
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#888888' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&subset=latin-ext' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#888888' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/vendor/academicons/css/academicons.min.css',
    '@/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/components' },

    { src: '@/plugins/scrollto' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/fontawesome',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader');
      vueLoader.options.transformAssetUrls.Card1a = 'img-src';
      vueLoader.options.transformAssetUrls.Card1b = 'img-src';
      vueLoader.options.transformAssetUrls.Card2b = ['img-src', 'img-src-side'];
    },
  },
  /*
  ** Generate configuration
  */
  generate: {
    dir: 'docs',
  },
  /*
  ** Bootstrap
  */
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  /*
  ** Font Awesome
  */
  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: true,
      regular: true,
      brands: true,
    },
  },
  /*
  ** Optimized Images
  */
  optimizedImages: {
    optimizeImages: true,
    responsive: {
      sizes: 600,
    },
  },
};
