export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ntw web",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content:
          "แหล่งรวมข้อมูลการแสดงในมือคุณ รวบรวมข้อมูลศิลปะการแสดง ทั้งละครเวที คอนเสิร์ต Standup Comedy โชว์มายากล และอีกมากมายที่จัดแสดงอยู่ และกำลังจะเกิดขึ้นในอนาคต",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vueD3.js", ssr: false },
    { src: "@/plugins/vue-apexchart.js", ssr: false },
    { src: "@/plugins/aos.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-lodash", "nuxt-material-design-icons-iconfont"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  buildModules: [
    "@nuxt/postcss8",
    // ...
  ],
  css: [
    "@/assets/main.css",
    "material-icons/iconfont/material-icons.css",
    "material-symbols/index.css",
  ],
  server: {
    port: 8000, // default: 3000
  },
};
