import router from '@/router'
import { useAppLayoutStore } from '@/stores/app-layout'
import { storeToRefs } from 'pinia'

export function useLayoutWatcher() {
  const { layout } = storeToRefs(useAppLayoutStore())
  const { setLayout } = useAppLayoutStore()
  router.afterEach((to) => {
    setLayout(to.meta.layout as string)
  })

  return {
    layout,
  }
}
