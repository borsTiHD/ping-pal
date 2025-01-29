import type { App } from 'vue'
import { appTheme } from '@/theme/index'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Column from 'primevue/column'
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import ProgressSpinner from 'primevue/progressspinner'
import ScrollPanel from 'primevue/scrollpanel'
import SelectButton from 'primevue/selectbutton'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ToggleSwitch from 'primevue/toggleswitch'

const AppPreset = definePreset(Aura, appTheme)

export const PrimeVuePlugin = {
  install(app: App) {
    app.use(PrimeVue, {
      ripple: true,
      theme: {
        preset: AppPreset,
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
    app.component('Toast', Toast)
    app.component('ScrollPanel', ScrollPanel)
    app.component('Button', Button)
    app.component('Card', Card)
    app.component('InputText', InputText)
    app.component('ProgressSpinner', ProgressSpinner)
    app.component('ToggleSwitch', ToggleSwitch)
    app.component('SelectButton', SelectButton)
    app.component('DataTable', DataTable)
    app.component('Column', Column)

    // Services
    app.use(ToastService)
  },
}
