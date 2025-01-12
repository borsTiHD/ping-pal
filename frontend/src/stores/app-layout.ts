import type { Layouts } from '@/layouts'
import layouts from '@/layouts'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const useAppLayoutStore = defineStore('app-layout', () => {
  const layout = shallowRef<Layouts | 'div'>('div')

  function setLayout(name: keyof Layouts) {
    layout.value = layouts[name]
  }

  return {
    layout,
    setLayout,
  }
})
