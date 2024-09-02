// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@formkit/nuxt"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["/public/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
});
