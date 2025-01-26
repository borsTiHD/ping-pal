<script setup lang="ts">
import SettingItem from '@/components/settings/SettingItem.vue'
import layouts from '@/layouts'
import { useAppLayoutStore } from '@/stores/app-layout'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { layoutName } = storeToRefs(useAppLayoutStore())
const { setLayout } = useAppLayoutStore()

const layoutModel = computed({
  get: () => layoutName.value,
  set: value => setLayout(value as string),
})
</script>

<template>
  <SettingItem
    label="Layout"
    description="Change the layout of the application"
  >
    <SelectButton v-model="layoutModel" :options="layouts" option-label="name" option-value="name" :allow-empty="false" />
  </SettingItem>
</template>
