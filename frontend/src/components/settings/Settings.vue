<script setup lang="ts">
import ChangeLayout from '@/components/settings/ChangeLayout.vue'
import ColorModeChanger from '@/components/settings/ColorModeChanger.vue'
import WindowSize from '@/components/settings/WindowSize.vue'
import { useConfigQuery } from '@/queries/config'

const { data: config, isFetching: configIsFetching } = useConfigQuery()
</script>

<template>
  <Card>
    <template #content>
      <div v-if="configIsFetching" class="flex flex-col justify-center items-center">
        <ProgressSpinner />
        <span class="text-primary-500">Loading...</span>
      </div>
      <div v-else class="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
        <div class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
          <!-- App Section -->
          <div class="flex flex-col">
            <h2>App Settings</h2>
            <p class="mt-1 text-sm/6 text-surface-500 dark:text-surface-400">
              This information will be displayed publicly so be careful what you share.
            </p>

            <dl class="mt-6 divide-y divide-surface-200 dark:divide-surface-500 border-t border-surface-200 dark:border-surface-500 text-sm/6">
              <ColorModeChanger />
              <ChangeLayout />
              <div class="py-6 sm:flex">
                <dt class="font-medium  sm:w-64 sm:flex-none sm:pr-6">
                  Email address
                </dt>
                <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                  <div class="">
                    tom.cook@example.com
                  </div>
                  <button type="button" class="font-semibold text-primary-600 dark:text-primary-600 hover:text-primary-500">
                    Update
                  </button>
                </dd>
              </div>
              <div class="py-6 sm:flex">
                <dt class="font-medium  sm:w-64 sm:flex-none sm:pr-6">
                  Title
                </dt>
                <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                  <div class="">
                    Human Resources Manager
                  </div>
                  <button type="button" class="font-semibold text-primary-600 dark:text-primary-600 hover:text-primary-500">
                    Update
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center p-4 gap-4">
        <div class="flex flex-col items-center p-4 gap-4">
          <div class="flex flex-col gap-4">
            <h2>Window Size</h2>
            <WindowSize />
          </div>

          <div class="mt-4">
            <h2>Config</h2>
            <pre class="bg-gray-100 dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md w-full overflow-auto">{{ config }}</pre>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
