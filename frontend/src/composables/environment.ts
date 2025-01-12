import { computed } from 'vue'

export function useAppEnvironment() {
  const isDesktop = computed(() => {
    // Check if the runtime object is available in the window object
    // This is only available in the desktop app (or provided browser runtime from the dev server)
    return typeof window.runtime !== 'undefined'
  })

  return {
    isDesktop,
  }
}
