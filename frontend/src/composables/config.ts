import type { configs } from 'wailsjs/go/models'
import { getObjectValueByPath, setObjectValueByPath } from '@/lib/object'
import { mutateConfig, useConfigQuery } from '@/queries/config'
import { computed } from 'vue'

export function useConfig() {
  const { data: config } = useConfigQuery()
  const { mutateAsync } = mutateConfig()

  const colorMode = computedConfigKey<configs.UserConfig['colorMode']>('user.colorMode')

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
    // Settings
    colorMode,

    // Method to update a certain config option
    updateConfigOption,
  }
}
