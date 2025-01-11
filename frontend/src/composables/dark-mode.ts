import { useConfigQuery } from '@/queries/config'
import { computed, watch } from 'vue'

export function useDarkMode() {
  const { data: config } = useConfigQuery()

  const isDarkMode = computed(() => config.value?.user?.darkMode ?? false)
  watch(isDarkMode, () => {
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  })

  return {
    isDarkMode,
  }
}
