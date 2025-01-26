<script setup lang="ts">
import SettingItem from '@/components/settings/SettingItem.vue'
import { useConfig } from '@/composables/config'

const { colorMode, colorModes } = useConfig()
</script>

<template>
  <SettingItem
    label="Color Mode"
    description="Change the color mode of the application"
  >
    <SelectButton v-model="colorMode" :options="colorModes" option-label="label" option-value="value" :allow-empty="false" />
  </SettingItem>
</template>
