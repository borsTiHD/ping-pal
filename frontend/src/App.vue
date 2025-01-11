<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app h-screen flex flex-col items-center justify-center">
    <RouterView />

    <VueQueryDevtools />
  </div>
</template>

<style scoped>
</style>
