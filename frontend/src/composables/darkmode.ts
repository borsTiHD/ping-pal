import { useConfig } from '@/composables/config'
import { useConfigQuery } from '@/queries/config'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

type ColorMode = 'auto' | 'dark' | 'light'

export function useDarkModeState() {
  const { data: config } = useConfigQuery()
  const { updateConfigOption } = useConfig()
  const mode = useColorMode()

  const colorModes = [
    { value: 'auto', label: 'Auto' },
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ]

  const colorModeSetting = computed(() => config.value?.user?.colorMode as ColorMode)
  const systemColorMode = computed(() => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const isDarkMode = computed(() => colorModeSetting.value === 'dark' || (colorModeSetting.value === 'auto' && systemColorMode.value === 'dark'))

  // v-model for the color mode (updates the config.json)
  const colorModeModel = computed({
    get: () => colorModeSetting.value,
    set: async (value: ColorMode) => {
      mode.value = value
      await updateConfigOption('user.colorMode', value)
    },
  })

  return {
    colorModeModel, // v-model for the color mode
    colorModes, // List of available color modes
    isDarkMode, // Boolean if the current color mode is dark
  }
}
