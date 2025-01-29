<script setup lang="ts">
import type { hosts } from 'wailsjs/go/models'
import { ref } from 'vue'
import { AddHost, GetHosts } from 'wailsjs/go/main/App'

const items = ref<hosts.HostItem[]>()

const name = ref<string>('')
const address = ref<string>('')

async function addHost() {
  const newHost = {
    name: name.value,
    address: address.value,
  }

  await AddHost(newHost)
  name.value = ''
  address.value = ''
  fetchHosts()
}

async function fetchHosts() {
  const newHosts = await GetHosts()
  items.value = newHosts
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
            <InputText v-model="name" name="name" type="text" placeholder="Enter host name" />
            <InputText v-model="address" name="address" type="text" placeholder="Enter host address" />
            <Button label="Add Host" @click="addHost" />
          </div>

          <div class="flex items-center gap-1">
            <Button label="Fetch Hosts" @click="fetchHosts" />
          </div>

          <div class="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md w-full">
            <div class="flex items-center gap-4">
              <div class="w-1/4">
                Name
              </div>
              <div class="w-1/4">
                Address
              </div>
            </div>
            <div v-for="(host, index) in items" :key="index" class="flex items-center gap-4">
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
