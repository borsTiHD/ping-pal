<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { storeToRefs } from 'pinia'

const { appName } = storeToRefs(useConfigStore())
</script>

<template>
  <div class="flex items-center gap-2">
    <img src="@/assets/images/ping_pal.svg" :alt="appName" class="h-8 w-auto">
    <span class="text-lg font-semibold">{{ appName }}</span>
  </div>
</template>
