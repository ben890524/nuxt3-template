import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import useLocalStorage from '@/composables/utils/useLocalStorage';

const _localStorageKey_lang = 'lang';

export const useI18nLangStore = defineStore('useI18nLang', () => {
  const i18nLang = ref(useI18n().locale);
  const setI18nLang = (_lang: string) => {
    i18nLang.value = _lang;
  };
  const initI18nLang = () => {
    const { setItem, getItem, hasItem } = useLocalStorage();
    if (!hasItem(_localStorageKey_lang)) {
      setItem(_localStorageKey_lang, 'zh-TW');
    }
    setI18nLang(getItem(_localStorageKey_lang));
  };
  onMounted(() => {
    initI18nLang();
  });
  watch(
    i18nLang,
    (newLang) => {
      const { setItem } = useLocalStorage();
      setItem(_localStorageKey_lang, newLang);
    },
    { deep: true }
  );
  return {
    i18nLang,
  };
});
