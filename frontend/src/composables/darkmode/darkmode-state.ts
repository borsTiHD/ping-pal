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

  const colorMode = computed(() => config.value?.user?.colorMode as ColorMode)
  const systemColorMode = computed(() => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const isDarkMode = computed(() => colorMode.value === 'dark' || (colorMode.value === 'auto' && systemColorMode.value === 'dark'))

  const colorModeModel = computed({
    get: () => colorMode.value,
    set: async (value: ColorMode) => {
      await updateConfigOption('user.colorMode', value)
    },
  })

  function changeColorMode(value: ColorMode) {
    if (value === 'auto') {
      document.documentElement.classList.toggle(
        'dark',
        colorMode.value === 'dark' || (colorMode.value === 'auto' && systemColorMode.value === 'dark'),
      )
      mode.value = 'auto'
    }
    else {
      document.documentElement.classList.toggle('dark', value === 'dark')
      mode.value = colorMode.value
    }
  }

  return {
    colorModeModel, // v-model for the color mode (changes also the config.json)
    colorModes, // List of available color modes
    isDarkMode, // Boolean if the current color mode is dark
    changeColorMode, // Function to change the color mode
  }
}
