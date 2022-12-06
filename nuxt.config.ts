// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { ssr: true },
    "/no-ssr": { ssr: false },
  },
});
