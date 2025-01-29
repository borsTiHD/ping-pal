import { useToast } from '@/composables/toast'

export interface InvalidSubmitEvent {
  values: Record<string, any>
  errors: Record<string, any>
  results: any
}

export function useFormHelper() {
  const { error } = useToast()

  function onInvalidSubmit({ values, errors, results }: InvalidSubmitEvent) {
    error('Error on submit', 'Please check the form fields for errors.')
    console.error('Error on form submit:', { values, errors, results })
  }

  return {
    onInvalidSubmit,
  }
}
