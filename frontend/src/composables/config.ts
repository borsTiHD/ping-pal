import type { configs } from 'wailsjs/go/models'
import { setObjectValueByPath } from '@/lib/object'
import { mutateConfig, useConfigQuery } from '@/queries/config'

export function useConfig() {
  const { data } = useConfigQuery()
  const { mutateAsync } = mutateConfig()

  // Update a config option at the specified path
  // For example: app.showedWelcome
  async function updateConfigOption(path: string, value: any) {
    const config: configs.Config | undefined = data.value

    if (!config) {
      throw new Error('Config not found')
    }

    // Create a mutable copy of the config and update the value at the specified path
    const mutableConfig = JSON.parse(JSON.stringify(config))
    setObjectValueByPath(mutableConfig, path, value)

    // Update the config
    await mutateAsync(mutableConfig)
  }

  return {
    updateConfigOption,
  }
}
