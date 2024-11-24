// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@sidebase/nuxt-auth',
  ],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  tailwindcss: {
    configPath: '~/config/tailwind.js',
    cssPath: '~/assets/css/tailwind.css',
  },
})