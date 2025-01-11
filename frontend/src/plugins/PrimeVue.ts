import type { App } from 'vue'
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import ProgressSpinner from 'primevue/progressspinner'

export const PrimeVuePlugin = {
  install(app: App) {
    app.use(PrimeVue, {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          // cssLayer: {
          //   name: 'primevue',
          //   order: 'tailwind-base, primevue, tailwind-utilities',
          // },
        },
      },
    })

    // Components
    app.component('Button', Button)
    app.component('InputText', InputText)
    app.component('ProgressSpinner', ProgressSpinner)
  },
}
