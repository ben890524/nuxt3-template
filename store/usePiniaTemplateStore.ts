import { defineStore } from 'pinia';
export const usePiniaTemplateStore = defineStore(
  'UsePiniaTemplate',
  () => {
    const templateText = ref<string>('Pinia Test Text');
    const setText = (_text: string) => {
      templateText.value = _text;
    };
    return {
      templateText,
      setText,
    };
  },
  {
    persist: {
      storage: process.client ? localStorage : undefined,
    },
  }
);
