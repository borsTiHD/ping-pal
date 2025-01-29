<script setup lang="ts">
import { useHostsQuery } from '@/queries/hosts'

const { data: hostData, isFetching } = useHostsQuery()
</script>

<template>
  <div v-if="isFetching" class="flex flex-col justify-center items-center">
    <ProgressSpinner />
    <span class="text-primary-500">Loading...</span>
  </div>

  <div v-else class="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md w-full">
    <div class="flex items-center gap-4">
      <div class="w-1/4">
        Name
      </div>
      <div class="w-1/4">
        Address
      </div>
    </div>
    <div v-for="(host, index) in hostData" :key="index" class="flex items-center gap-4">
      <div class="w-1/4">
        {{ host.name }}
      </div>
      <div class="w-1/4">
        {{ host.address }}
      </div>
    </div>
  </div>
</template>
