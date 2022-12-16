<template>
  <div class="flex items-center justify-between h-full text-sm font-bold">
    <div class="flex items-center justify-center mr-1">
      <label for="locale-select">{{ languageSelect }} </label>
    </div>
    <select id="locale-select" v-model="i18nLang" class="language-selector">
      <option v-for="option in _data_languageSelector.options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import appStore from '@/store';

const { t: lang } = useI18n();
const { i18nLang } = storeToRefs(appStore.useI18nLangStore());
const languageSelect = computed(() => lang('Language'));
const _data_languageSelector = reactive({
  options: [
    { value: 'en', label: 'English' },
    { value: 'zh-TW', label: '繁體中文' },
  ],
});
</script>
<style scoped lang="scss">
.language-selector {
  @apply pl-2 py-1 border-[1px] border-gray-300 rounded-md outline-none max-w-[130px] min-w-[130px] w-[130px];
}
</style>
