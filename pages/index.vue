<template>
  <div>
    <Suspense>
      <template #default>
        <div>In Page</div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
/* import components */
</script>

<style lang="scss" scoped></style>
