<script setup lang="ts">
import type { hosts } from 'wailsjs/go/models'
import { deleteHostMutation, useHostsQuery } from '@/queries/hosts'
import dayjs from 'dayjs'
import { Trash2 } from 'lucide-vue-next'

const { data: hostData, isFetching } = useHostsQuery()
const { mutateAsync } = deleteHostMutation()
</script>

<template>
  <div class="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md w-full">
    <DataTable :value="hostData" class="w-full" :loading="isFetching">
      <Column field="id" header="Id" />
      <Column field="name" header="Name" />
      <Column field="address" header="Address" />
      <Column field="created_at" header="Created">
        <template #body="slotProps: { data: hosts.HostItem }">
          {{ dayjs(slotProps.data.created_at).format('YYYY-MM-DD HH:mm:ss') }}
        </template>
      </Column>
      <Column header="Actions">
        <template #body="slotProps: { data: hosts.HostItem }">
          <Button severity="danger" aria-label="Delete" variant="outlined" @click="mutateAsync(slotProps.data.id)">
            <Trash2 />
          </Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
