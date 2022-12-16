<template>
  <div class="p-0 m-0">
    <h1 class="text-2xl text-center cursor-pointer">
      {{ templateText }}
    </h1>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
import store from '@/store/index';
import { storeToRefs } from 'pinia';
const { templateText } = storeToRefs(store.usePiniaTemplateStore());
</script>
<style scoped lang="scss"></style>
