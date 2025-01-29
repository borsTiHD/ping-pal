<script setup lang="ts">
import { useHostsQuery } from '@/queries/hosts'

const { data: hostData, isFetching } = useHostsQuery()
</script>

<template>
  <div class="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md w-full">
    <DataTable :value="hostData" class="w-full" :loading="isFetching">
      <Column field="id" header="Id" />
      <Column field="name" header="Name" />
      <Column field="address" header="Address" />
    </DataTable>
  </div>
</template>
