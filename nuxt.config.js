import axios from 'axios'

const environment = process.env.NODE_ENV || 'development'
const envSet = require(`./env.${environment}.js`)
const $axios = axios.create({
  baseURL: envSet.repoUrl,
  headers: { 'Authorization': 'token '+envSet.token }
})

const routerBase = process.env.NODE_ENV === 'production' ? {
  router: {
    base: envSet.deployRepoUrl
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: envSet.blogTitle || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/jdenticon@2.2.0', async: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/node_modules/highlight.js/styles/github-gist.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: envSet.repoUrl
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: envSet,
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    use: [
      'markdown-it-sanitizer',
      'markdown-it-emoji',
      'markdown-it-footnote',
      // 'markdown-it-imsize',
      'markdown-it-sub',
      'markdown-it-abbr',
      'markdown-it-mark',
      'markdown-it-ins',
      '@iktakahiro/markdown-it-katex'
    ],
    highlight: (str, lang) => {
      const hljs = require('highlight.js')
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>'
        } catch (__) {}
      }
      return '<pre class="hljs"><code>' +  hljs.highlight('plaintext', str, true).value + '</code></pre>'
    },
  },
  ...routerBase,
  generate: {
    routes: async function () {
      const postRoutes = []
      let page = 1
      while (true) {
        const res = await $axios.get(`/issues?filter=created&page=${page}`)
        const postRoute = res.data.map((issue) => {
          return '/post/' + issue.number
        })
        if (postRoute.length < 1) break
        postRoutes.push(...postRoute)
        page++
      }

      const tagRoutes = await $axios.get('/labels')
        .then((res) => {
          return res.data.map((labels) => {
            return '/tag/' + labels.name
          })
        })

      return [...postRoutes, ...tagRoutes]
    }
  }
}
