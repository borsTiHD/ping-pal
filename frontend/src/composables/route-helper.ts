import { useRoute } from 'vue-router'

export function useRouteHelper() {
  const route = useRoute()

  function isActiveRoute(path: string) {
    return route.path === path
  }

  return {
    isActiveRoute,
  }
}
