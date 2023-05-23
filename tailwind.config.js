/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  /** 停用tailwindcss的reset.css，目前未停用，因為干擾的不多，如果未來需要，打開即可，Ant Design Vue也有reset.css */
  corePlugins: {
    preflight: false,
  },
};
