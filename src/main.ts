import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeevalidatePlugin from './includes/validation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeevalidatePlugin)

app.mount('#app')
