<script setup lang="ts">
import { useAppNameQuery, useConfigQuery } from '@/queries/config'
import { computed, ref } from 'vue'
import { Greet } from 'wailsjs/go/main/App'

const { data: config, isFetching: configIsFetching } = useConfigQuery()
const { data: appName, isFetching: appNameIsFetching } = useAppNameQuery()

const isLoading = computed(() => configIsFetching.value || appNameIsFetching.value)

const input = ref('')
const response = ref('')

async function onClick() {
  const greeting = await Greet(input.value)
  response.value = greeting
}
</script>

<template>
  <div class="flex flex-col items-center p-4 gap-4">
    <div v-if="isLoading" class="flex flex-col justify-center items-center">
      <ProgressSpinner />
      <span class="text-blue-500">Loading...</span>
    </div>

    <div v-else class="flex flex-col items-center p-4 gap-4">
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>

      <h2 className="text-xl font-semibold text-gray-500">
        {{ appName }}
      </h2>

      <div class="flex items-center gap-1">
        <InputText v-model="input" name="username" type="text" placeholder="Enter your name" @keyup.enter="onClick" />
        <Button label="Submit" @click="onClick" />
      </div>

      <div class="flex flex-col items-center p-4">
        <p class="text-lg font-semibold text-green-500">
          {{ response }}
        </p>
      </div>
      <div v-if="response" class="p-2 border border-gray-300 rounded">
        {{ response }}
      </div>

      <div class="mt-4">
        <h2 class="text-lg font-bold text-blue-500">
          Config
        </h2>
        <pre class="bg-gray-100 p-4 rounded-lg shadow-md w-full overflow-auto">{{ config }}</pre>
      </div>
    </div>
  </div>
</template>
