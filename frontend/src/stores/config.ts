import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const appName = ref('Ping Pal')

  return {
    appName,
  }
})
