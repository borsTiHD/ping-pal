<script setup>
import { useDarkModeState } from '@/composables/darkmode/index'

const { isDarkMode } = useDarkModeState()
</script>

<template>
  <div :class="[{ dark: isDarkMode }]" class="app-layout h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <ScrollPanel
      class="w-full h-full" :dt="{
        bar: {
          background: '{primary.color}',
        },
      }"
    >
      <slot />
    </ScrollPanel>
  </div>
</template>
