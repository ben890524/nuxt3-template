import zh_TW from './locales/zh-TW/index';
import en from './locales/en/index';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [['@pinia/nuxt', { disableVuex: true }], '@nuxtjs/tailwindcss', '@intlify/nuxt3'],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '@/assets/styles/tailwind/index.scss',
  },
  css: ['@/assets/styles/tailwind/index.scss'],
  intlify: {
    vueI18n: {
      legacy: false,
      locale: 'zh-TW',
      fallbackLocale: 'zh-TW',
      messages: {
        'zh-TW': zh_TW,
        en,
      },
    },
  },
});
