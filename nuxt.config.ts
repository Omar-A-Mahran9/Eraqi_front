import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "http://127.0.0.1:8000/api/", // Public base URL
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
    "@nuxtjs/i18n",
  ],

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
