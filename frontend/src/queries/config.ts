import type { configs } from 'wailsjs/go/models'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { GetAppName, GetConfig, SaveConfig } from 'wailsjs/go/main/App'

const staleTime = 1000 * 60 * 60 // 1 hour

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
    staleTime,
  })
}

export function mutateConfig() {
  const queryClient = useQueryClient()
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
