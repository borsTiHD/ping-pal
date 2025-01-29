import type { ToastMessageOptions } from 'primevue/toast'
import { useToast as useToastService } from 'primevue/usetoast'

export function useToast() {
  const toast = useToastService()

  function custom(options: ToastMessageOptions) {
    toast.add(options)
  }

  function error(title: string, message: string) {
    toast.add({ severity: 'error', summary: title, detail: message, life: 5000, group: 'bottom-right' })
  }

  function success(title: string, message: string) {
    toast.add({ severity: 'success', summary: title, detail: message, life: 3000, group: 'bottom-right' })
  }

  return {
    custom,
    error,
    success,
  }
}
