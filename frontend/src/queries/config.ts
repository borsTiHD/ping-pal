import type { QueryClient } from '@tanstack/vue-query'
import type { configs } from 'wailsjs/go/models'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { GetAppName, GetConfig, SaveConfig } from 'wailsjs/go/main/App'

export function useAppNameQuery() {
  return useQuery({
    queryKey: ['app', 'name'],
    queryFn: GetAppName,
  })
}

export function useConfigQuery() {
  return useQuery({
    queryKey: ['config'],
    queryFn: GetConfig,
  })
}

export function mutateConfig(queryClient: QueryClient) {
  return useMutation({
    mutationKey: ['config'],
    mutationFn: (config: configs.Config) => SaveConfig(config),
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ['config'] })
    },
    throwOnError: true,
    onError: (error) => {
      console.error(error)
    },
  })
}
