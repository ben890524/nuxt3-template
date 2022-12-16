import { defineStore } from 'pinia';
export const usePiniaTemplateStore = defineStore(
  'UsePiniaTemplate',
  () => {
    const templateText = ref<string>('Pinia Test Text');
    return {
      templateText,
    };
  }
  // ,
  // {
  //   persist: {
  //     storage: process.client ? localStorage : undefined,
  //   },
  // }
);
