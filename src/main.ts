import './assets/main.css'
// Import our custom CSS
import 'bootstrap/scss/bootstrap.scss'
// Import all of Bootstrap's JS
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
