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
    <DataTable :value="hostData" table-style="min-width: 50rem">
      <Column field="id" header="Id" />
      <Column field="name" header="Name" />
      <Column field="address" header="Address" />
    </DataTable>
  </div>
</template>
