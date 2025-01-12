import { PrimeVuePlugin } from '@/plugins/PrimeVue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/styles/font.css'
import './assets/styles/shadcn.css'
import './assets/styles/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVuePlugin)
app.use(VueQueryPlugin)

app.mount('#app')
