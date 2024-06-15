// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/test-utils/module",
    "@nuxt/image",
    "nuxt-icon",
    "@vee-validate/nuxt",
  ],
  css: ["vue-final-modal/style.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  veeValidate: {
    componentNames: {
      Field: "VeeField",
      Form: "VeeForm",
    },
  },
});
