<script setup lang="ts">
import layouts from '@/layouts'
import router from '@/router'
import { useAppLayoutStore } from '@/stores/app-layout'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { storeToRefs } from 'pinia'
import { RouterView } from 'vue-router'

// Layout system
const { layout } = storeToRefs(useAppLayoutStore())
router.afterEach((to) => {
  layout.value = layouts[to.meta.layout as string]
})
</script>

<template>
  <main class="app-wrapper">
    <component :is="layout || 'div'">
      <RouterView />
    </component>
    <VueQueryDevtools />
  </main>
</template>
