import type { App } from 'vue'
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'
import Card from 'primevue/card'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import ProgressSpinner from 'primevue/progressspinner'
import ScrollPanel from 'primevue/scrollpanel'
import SelectButton from 'primevue/selectbutton'
import ToggleSwitch from 'primevue/toggleswitch'

export const PrimeVuePlugin = {
  install(app: App) {
    app.use(PrimeVue, {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities',
          },
        },
      },
    })

    // Components
    app.component('ScrollPanel', ScrollPanel)
    app.component('Button', Button)
    app.component('Card', Card)
    app.component('InputText', InputText)
    app.component('ProgressSpinner', ProgressSpinner)
    app.component('ToggleSwitch', ToggleSwitch)
    app.component('SelectButton', SelectButton)
  },
}
