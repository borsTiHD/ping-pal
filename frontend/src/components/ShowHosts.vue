<script setup lang="ts">
import type { hosts } from 'wailsjs/go/models'
import { mutateHosts, useHostsQuery } from '@/queries/hosts'
import { ref } from 'vue'

const { data, isFetching } = useHostsQuery()
const { mutateAsync, isPending } = mutateHosts()

const name = ref<string>('')
const address = ref<string>('')

async function addHost() {
  if (!name.value || !address.value) {
    return
  }

  const newHost: hosts.HostItem = {
    name: name.value,
    address: address.value,
  }

  await mutateAsync(newHost)
  name.value = ''
  address.value = ''
}
</script>

<template>
  <Card>
    <template #title>
      Hosts
    </template>
    <template #content>
      <div class="flex flex-col items-center p-4 gap-4">
        <div class="flex flex-col items-center p-4 gap-4">
          <div class="flex items-center gap-1">
            <InputText v-model="name" name="name" type="text" placeholder="Enter host name" :disabled="isPending" />
            <InputText v-model="address" name="address" type="text" placeholder="Enter host address" :disabled="isPending" />
            <Button label="Add Host" :disabled="isPending" :loading="isPending" @click="addHost" />
          </div>

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
            <div v-for="(host, index) in data" :key="index" class="flex items-center gap-4">
              <div class="w-1/4">
                {{ host.name }}
              </div>
              <div class="w-1/4">
                {{ host.address }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
