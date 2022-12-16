// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', ['@pinia/nuxt', { disableVuex: true }]],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '@/assets/styles/tailwind/index.scss',
  },
  css: ['@/assets/styles/tailwind/index.scss'],
});
