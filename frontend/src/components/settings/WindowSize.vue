<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<template>
  <div class="flex gap-2 items-center">
    <span>Width: {{ width }}</span>
    <span>Height: {{ height }}</span>
  </div>
</template>
