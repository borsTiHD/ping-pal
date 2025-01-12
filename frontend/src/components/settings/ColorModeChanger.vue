<script setup lang="ts">
import { useDarkModeState } from '@/composables/darkmode'

const { colorModeModel, colorModes } = useDarkModeState()
</script>

<template>
  <div class="flex gap-2 items-center">
    <span>Toggle Color Mode:</span>
    <SelectButton v-model="colorModeModel" :options="colorModes" option-label="label" option-value="value" :allow-empty="false" />
  </div>
</template>
