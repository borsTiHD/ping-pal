<script setup lang="ts">
import { useConfig } from '@/composables/config'

const { colorMode, colorModes } = useConfig()
</script>

<template>
  <!-- TODO: Make a generic component for settings out of it -->
  <div class="py-6 sm:flex">
    <dt class="font-medium flex items-center sm:w-64 sm:flex-none sm:pr-6">
      Color Mode
    </dt>
    <dd class="mt-1 flex justify-between items-center gap-x-6 sm:mt-0 sm:flex-auto">
      <span class="text-sm text-surface-500 dark:text-surface-400">
        Change the color mode of the application
      </span>
      <SelectButton v-model="colorMode" :options="colorModes" option-label="label" option-value="value" :allow-empty="false" />
    </dd>
  </div>
</template>
