<script setup lang="ts">
import AddHost from '@/components/hosts/AddHost.vue'
import ManageHosts from '@/components/hosts/ManageHosts.vue'
</script>

<template>
  <Card>
    <template #title>
      Host Management
    </template>
    <template #content>
      <div class="flex flex-col items-center p-4 gap-4">
        <div class="flex flex-col items-center p-4 gap-4">
          <AddHost />
          <ManageHosts />
        </div>
      </div>
    </template>
  </Card>
</template>
