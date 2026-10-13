import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import PrimeVue from 'primevue/config'

import('primevue/resources/themes/lara-light-green/theme.css')
import('primevue/resources/primevue.min.css')
import {
    button,
    card,
    Drawer,
    tag,
    select,
    Toolbar,
    ToastService
} from 'primevue/components'
createApp(App).use(i18n).use(PrimeVue).mount('#app')

