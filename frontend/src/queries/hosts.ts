import type { hosts } from 'wailsjs/go/models'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { AddHost, GetHosts } from 'wailsjs/go/main/App'

export function useHostsQuery() {
  return useQuery({
    queryKey: ['hosts', 'get-all'],
    queryFn: GetHosts,
  })
}

export function mutateHosts() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['hosts', 'add'],
    mutationFn: (host: hosts.HostItem) => AddHost(host),
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ['hosts', 'get-all'] })
    },
    throwOnError: true,
    onError: (error) => {
      console.error(error)
    },
  })
}
