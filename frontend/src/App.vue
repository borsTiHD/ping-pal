<script setup lang="ts">
import { useDarkMode } from '@/composables/dark-mode'
import { useAppEnvironment } from '@/composables/environment'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { RouterView } from 'vue-router'

const { isDarkMode } = useDarkMode()
const { isDesktop } = useAppEnvironment()
</script>

<template>
  <div :class="[{ dark: isDarkMode }]" class="app h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div class="flex items-center gap-2">
      <span>Is on desktop?</span>
      <span>{{ isDesktop }}</span>
    </div>
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
