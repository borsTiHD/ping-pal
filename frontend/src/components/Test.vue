<script setup lang="ts">
import { useAppNameQuery, useConfigQuery } from '@/queries/config'
import { computed, ref } from 'vue'
import { Greet } from 'wailsjs/go/main/App'

const { data: appName, isFetching: appNameIsFetching } = useAppNameQuery()
const isLoading = computed(() => appNameIsFetching.value)

const input = ref('')
const response = ref('')

async function onClick() {
  const greeting = await Greet(input.value)
  response.value = greeting
}
</script>

<template>
  <Card>
    <template #title>
      Test
    </template>
    <template #content>
      <div class="flex flex-col items-center p-4 gap-4">
        <div v-if="isLoading" class="flex flex-col justify-center items-center">
          <ProgressSpinner />
          <span class="text-blue-500">Loading...</span>
        </div>

        <div v-else class="flex flex-col items-center p-4 gap-4">
          <h1 className="text-3xl font-bold underline text-blue-500">
            {{ appName }}
          </h1>

          <div class="flex items-center gap-1">
            <InputText v-model="input" name="username" type="text" placeholder="Enter your name" @keyup.enter="onClick" />
            <Button label="Submit" @click="onClick" />
          </div>

          <div class="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md w-full">
            <p class="text-lg font-semibold text-green-500">
              {{ response }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
