import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import i18n from '@/i18n'

// use prime vue
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import Avatar from 'primevue/avatar'

import './assets/css/index.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Card from 'primevue/card'

const i18nInstance = i18n.setupI18n('en')
const app = createApp(App)
const pinia = createPinia()

app.use(i18nInstance)
app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.use(ToastService)

pinia.use(piniaPluginPersistedstate)

// use required component from primevue
app.component('InputText', InputText)
app.component('PrimeButton', Button)
app.component('Sidebar', Sidebar)
app.component('Avatar', Avatar)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Card', Card)

app.mount('#app')
