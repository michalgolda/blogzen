import { getRedirectUrl } from "./utils/getRedirectUrl";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/test-utils/module",
    "@nuxt/image",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "notivue/nuxt",
  ],
  css: [
    "vue-final-modal/style.css",
    "notivue/notification.css",
    "notivue/animations.css",
  ],
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
  notivue: {
    position: "bottom-center",
  },
  runtimeConfig: {
    public: {
      sessionCookieName: "session",
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_SUPABASE_ANON_KEY,
      redirectTo: getRedirectUrl(),
    },
  },
});
