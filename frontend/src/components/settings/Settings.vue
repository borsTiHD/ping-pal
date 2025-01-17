<script setup lang="ts">
import ColorModeChanger from '@/components/settings/ColorModeChanger.vue'
import WindowSize from '@/components/settings/WindowSize.vue'
import { useConfigQuery } from '@/queries/config'
import { useAppLayoutStore } from '@/stores/app-layout'
import { storeToRefs } from 'pinia'

const { data: config, isFetching: configIsFetching } = useConfigQuery()

const { layout } = storeToRefs(useAppLayoutStore())
const { setLayout } = useAppLayoutStore()

function changeToBlank() {
  setLayout('BlankLayout')
}
function changeToApp() {
  setLayout('AppLayout')
}
</script>

<template>
  <Card>
    <template #title>
      Settings
    </template>
    <template #content>
      <div class="flex flex-col items-center p-4 gap-4">
        <div v-if="configIsFetching" class="flex flex-col justify-center items-center">
          <ProgressSpinner />
          <span class="text-blue-500">Loading...</span>
        </div>

        <div v-else class="flex flex-col items-center p-4 gap-4">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-bold text-blue-500">
              Color Mode
            </h2>
            <ColorModeChanger />
          </div>

          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-bold text-blue-500">
              Window Size
            </h2>
            <WindowSize />
          </div>

          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-bold text-blue-500">
              Change Layout
            </h2>

            <span>Current Layout: {{ layout }}</span>

            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" @click="changeToBlank">
              Blank Layout
            </button>

            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" @click="changeToApp">
              App Layout
            </button>
          </div>

          <div class="mt-4">
            <h2 class="text-lg font-bold text-blue-500">
              Config
            </h2>
            <pre class="bg-gray-100 dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md w-full overflow-auto">{{ config }}</pre>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
