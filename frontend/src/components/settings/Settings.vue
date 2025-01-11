<script setup lang="ts">
import { useConfig } from '@/composables/config'
import { useConfigQuery } from '@/queries/config'
import { computed } from 'vue'

const { data: config, isFetching: configIsFetching } = useConfigQuery()
const { updateConfigOption } = useConfig()

const darkMode = computed({
  get: () => config.value?.user?.darkMode ?? false,
  set: async (value: boolean) => {
    await updateConfigOption('user.darkMode', value)
  },
})
</script>

<template>
  <div class="flex flex-col items-center p-4 gap-4">
    <div v-if="configIsFetching" class="flex flex-col justify-center items-center">
      <ProgressSpinner />
      <span class="text-blue-500">Loading...</span>
    </div>

    <div v-else class="flex flex-col items-center p-4 gap-4">
      <h1 className="text-3xl font-bold underline text-blue-500">
        Settings
      </h1>

      <div class="mt-4">
        <h2 class="text-lg font-bold text-blue-500">
          Dark Mode
        </h2>
        <div class="flex flex-col gap-2">
          <ToggleSwitch v-model="darkMode" />
        </div>
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
