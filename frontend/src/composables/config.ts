import type { configs } from 'wailsjs/go/models'
import { getObjectValueByPath, setObjectValueByPath } from '@/lib/object'
import { mutateConfig, useConfigQuery } from '@/queries/config'
import { usePreferredDark } from '@vueuse/core'
import { computed } from 'vue'

export type ColorMode = 'auto' | 'dark' | 'light'

export interface ColorModeOption {
  value: string
  label: string
}

export type ColorModes = ColorModeOption[]

export function useConfig() {
  const { data: config } = useConfigQuery()
  const { mutateAsync } = mutateConfig()

  // const colorMode = computedConfigKey<configs.UserConfig['colorMode']>('user.colorMode')
  const colorMode = computedConfigKey<configs.UserConfig['colorMode'] & ColorMode>('user.colorMode')

  // Color mode
  const isSystemDarkMode = usePreferredDark()
  const isDarkMode = computed(() => colorMode.value === 'dark' || (colorMode.value === 'auto' && isSystemDarkMode.value))

  // List of available color modes
  const colorModes: ColorModes = [
    { value: 'auto', label: 'Auto' },
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ]

  function computedConfigKey<T>(key: string) {
    return computed({
      get: () => getObjectValueByPath(config.value, key) as T,
      set: value => updateConfigOption(key, value),
    })
  }

  // Update a certain config option at the specified path
  // For example: app.showedWelcome
  async function updateConfigOption(path: string, value: any) {
    if (!config.value) {
      throw new Error('Config not found')
    }

    // Create a mutable copy of the config and update the value at the specified path
    const mutableConfig = JSON.parse(JSON.stringify(config.value))
    setObjectValueByPath(mutableConfig, path, value)

    // Update the config
    await mutateAsync(mutableConfig)
  }

  return {
    // Mutable Settings
    colorMode,

    // Constants
    isDarkMode,
    colorModes,

    // Method to update a certain config option
    updateConfigOption,
  }
}
