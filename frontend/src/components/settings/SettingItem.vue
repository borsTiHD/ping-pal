<script setup lang="ts">
import { defineProps } from 'vue'

interface Props { label: string, description: string }
defineProps<Props>()
</script>

<template>
  <div class="py-6 sm:flex">
    <dt class="font-medium flex items-center sm:w-64 sm:flex-none sm:pr-6">
      {{ label }}
    </dt>
    <dd class="mt-1 flex justify-between items-center gap-x-6 sm:mt-0 sm:flex-auto">
      <span class="text-sm text-surface-500 dark:text-surface-400">
        {{ description }}
      </span>
      <slot />
    </dd>
  </div>
</template>
