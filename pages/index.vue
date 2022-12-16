<template>
  <div>
    <Suspense>
      <template #default>
        <div>
          <div class="flex justify-between">In Page - Pinia Text - {{ templateText }} <LanguageSelect /></div>
          <NuxtWelcome />
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import store from '@/store/index';
import { storeToRefs } from 'pinia';
/* import components */
import LanguageSelect from '@/components/languageSelect/Index.vue';

const { templateText } = storeToRefs(store.usePiniaTemplateStore());
</script>

<style lang="scss" scoped></style>
