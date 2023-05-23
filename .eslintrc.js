module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  extends: ['@nuxtjs', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-undef': 'off',
    'comma-dangle': 'off',
    camelcase: 'off',
    semi: 'off',
    /** vue eslint definition */
    /** 元件命名要多個字元。
     * 預設：開啟；
     * 當前：關閉。
     */
    'vue/multi-word-component-names': 'off',
  },
};
