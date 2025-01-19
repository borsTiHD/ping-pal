<script setup lang="ts">
import { useAppLayoutStore } from '@/stores/app-layout'
import { storeToRefs } from 'pinia'

const { layout } = storeToRefs(useAppLayoutStore())
const { setLayout } = useAppLayoutStore()

function changeToBlank() {
  setLayout('BlankLayout')
}
function changeToApp() {
  setLayout('AppLayout')
}
function changeToOld() {
  setLayout('OldAppLayout')
}
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <span>Current Layout: {{ layout }}</span>

    <div class="flex gap-2 items-center">
      <Button label="Blank Layout" @click="changeToBlank" />
      <Button label="App Layout" @click="changeToApp" />
      <Button label="Old Layout" @click="changeToOld" />
    </div>
  </div>
</template>
