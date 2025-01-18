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
      <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" @click="changeToBlank">
        Blank Layout
      </button>

      <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" @click="changeToApp">
        App Layout
      </button>

      <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" @click="changeToOld">
        Old Layout
      </button>
    </div>
  </div>
</template>
