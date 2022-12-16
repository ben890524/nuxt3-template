<template>
  <div>
    <Suspense>
      <template #default>
        <div>
          In Page - Pinia Text - {{ templateText }}
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
const { templateText } = storeToRefs(store.usePiniaTemplateStore());
/* import components */
</script>

<style lang="scss" scoped></style>
