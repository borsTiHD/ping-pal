import { useConfig } from '@/composables/config'
import { useConfigQuery } from '@/queries/config'
import { useColorMode, usePreferredDark } from '@vueuse/core'
import { computed } from 'vue'

type ColorMode = 'auto' | 'dark' | 'light'

export function useDarkModeState() {
  const { data: config } = useConfigQuery()
  const { updateConfigOption } = useConfig()

  const mode = useColorMode()
  const isSystemDarkMode = usePreferredDark()

  const colorModes = [
    { value: 'auto', label: 'Auto' },
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ]

  const colorModeSetting = computed(() => config.value?.user?.colorMode as ColorMode)
  const isDarkMode = computed(() => colorModeSetting.value === 'dark' || (colorModeSetting.value === 'auto' && isSystemDarkMode.value))

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
