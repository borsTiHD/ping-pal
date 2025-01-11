<script setup lang="ts">
import { useDarkMode } from '@/composables/dark-mode'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { RouterView } from 'vue-router'

const { isDarkMode } = useDarkMode()
</script>

<template>
  <div :class="[{ dark: isDarkMode }]" class="app h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <ScrollPanel
      class="w-full h-full" :dt="{
        bar: {
          background: '{primary.color}',
        },
      }"
    >
      <RouterView />
    </ScrollPanel>

    <VueQueryDevtools />
  </div>
</template>

<style scoped>
</style>
