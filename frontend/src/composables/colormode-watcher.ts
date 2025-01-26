import { useConfig } from '@/composables/config'
import { useColorMode } from '@vueuse/core'
import { watch } from 'vue'

export function useColorModeWatcher() {
  const { colorMode } = useConfig()

  const mode = useColorMode()

  watch(colorMode, (colorMode) => {
    mode.value = colorMode
  })
}
