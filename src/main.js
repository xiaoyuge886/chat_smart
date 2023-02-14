import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import {router} from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

axios.defaults.baseURL = 'http:127.0.0.1:8000'
