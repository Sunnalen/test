// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  typescript: {
    strict: true
  },
  devtools: { enabled: true }
})