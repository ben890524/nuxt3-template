// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-lodash'],
  css: ['@/assets/css/tailwind.scss'],
  plugins: ['@/plugins/antd'],
  i18n: {
    defaultLocale: 'zh-TW',
    lazy: true,
    langDir: 'lang',
    detectBrowserLanguage: {
      useCookie: false,
    },
    locales: [
      { code: 'zh-TW', file: 'zh-TW/index.ts' },
      { code: 'en-US', file: 'en-US/index.ts' },
    ],
  },
});
