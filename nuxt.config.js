import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: '0' // default: localhost
  },
  target: 'static',
  head: {
    titleTemplate: "%s - Team-Vue-15-Comfeco",
    title: "Team-Vue-15-Comfeco",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/firebase", "nuxt-material-design-icons"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: { customProperties: true },
      ligth: true,
      treeShake: true,
      themes: {
        light: {
          primary: "#4e065c",
          secondary: "#FFB703"
        },
        dark: {
          primary: "#4e065c",
          secondary: "#FFB703"
        }
      }
    }
  },
  firebase: {
    config: {
      apiKey: "AIzaSyDYcAxXNHTgfa5vAxCl-mvHEF2_bCrGHsI",
      authDomain: "team-vue-15.firebaseapp.com",
      projectId: "team-vue-15",
      storageBucket: "team-vue-15.appspot.com",
      messagingSenderId: "573765845416",
      appId: "1:573765845416:web:34e9d86528881c4b0c1d9d"
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
