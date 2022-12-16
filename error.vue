<template>
  <NuxtLayout name="error-layout">
    <div class="flex flex-col items-center justify-center">
      <p class="text-xl text-gray-500">
        {{ error!.message }}
      </p>
      <button
        type="button"
        class="block px-4 py-2 mt-8 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        @click="handleError"
      >
        Clear Error To Home Page
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
interface IError {
  message: string;
}
interface IProps {
  error?: IError;
}

withDefaults(defineProps<IProps>(), {
  error: () => {
    return { message: '' };
  },
});
const handleError = () => clearError({ redirect: '/' });
</script>
