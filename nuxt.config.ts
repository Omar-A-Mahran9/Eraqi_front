import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://admin.alraqi.sa/api/", // Public base URL
    },
  },
  css: [
    "~/assets/css/main.css", // Use tilde (~) instead of @
    "~/assets/css/fonts.css",
    "~/assets/css/swiper.css",
  ],

  devtools: { enabled: false },

  build: {
    transpile: ["vuetify"],
  },

  ssr:false,

  i18n: {
    vueI18n: "./i18n.config.ts", // Ensure this path is correct
  },

  plugins: [
    "~/plugins/sweetalert2.ts", // Ensure the path is correct
  ],

  modules: [
    (_options, nuxt) => {
    nuxt.hooks.hook("vite:extendConfig", (config) => {
      // @ts-expect-error is probably not needed here
      config.plugins.push(vuetify({ autoImport: true }));
    });
  },
  "@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],

  // vite: {
  //   vue: {
  //     template: {
  //       transformAssetUrls,
  //     },
  //   },
  // },

  // Remove compatibilityDate, as it's not a valid config option
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-10-18",
});