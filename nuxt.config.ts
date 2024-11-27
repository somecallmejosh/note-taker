// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    '@nuxt/ui',
  ],
  googleFonts: {
    families: {
      Inter: true,
      Merriweather: true,
      'Fira Code': true,
    },
  },
  tailwindcss: {
    configPath: '~/config/tailwind.js',
    cssPath: '~/assets/css/tailwind.css',
  },
  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
})
