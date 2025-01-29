import type { hosts } from 'wailsjs/go/models'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { AddHost, DeleteHost, GetHosts } from 'wailsjs/go/main/App'

export function useHostsQuery() {
  return useQuery({
    queryKey: ['hosts', 'get-all'],
    queryFn: GetHosts,
  })
}

export function addHostMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['hosts', 'add'],
    mutationFn: (host: hosts.NewHost) => AddHost(host),
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ['hosts', 'get-all'] })
    },
    throwOnError: true,
    onError: (error) => {
      console.error(error)
    },
  })
}

export function deleteHostMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['hosts', 'delete'],
    mutationFn: (hostId: number) => DeleteHost(hostId),
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ['hosts', 'get-all'] })
    },
    throwOnError: true,
    onError: (error) => {
      console.error(error)
    },
  })
}
