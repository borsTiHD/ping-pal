<script setup lang="ts">
import { useColorModeWatcher } from '@/composables/colormode-watcher'
import { useLayoutWatcher } from '@/composables/layout-watcher'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { RouterView } from 'vue-router'

// Layout system
const { layout } = useLayoutWatcher()

// Watcher for color mode
// Changing the color mode will be reflected in the whole application
useColorModeWatcher()
</script>

<template>
  <main class="app-wrapper">
    <component :is="layout || 'div'">
      <RouterView />
    </component>
    <VueQueryDevtools />
  </main>
</template>
