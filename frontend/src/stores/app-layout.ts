// import type { LayoutItem } from '@/layouts'
import layouts from '@/layouts'
import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'

export const useAppLayoutStore = defineStore('app-layout', () => {
  const layoutName = ref()
  const layout = shallowRef<any | 'div'>('div')

  function setLayout(name: string | undefined) {
    const layoutItem = layouts.find(l => l.name === name)
    if (!layoutItem) {
      console.error(`Layout "${name}" not found`)
      return
    }

    layoutName.value = name
    layout.value = layoutItem ? layoutItem.layout : 'div'
  }

  return {
    layout,
    layoutName,
    setLayout,
  }
})
