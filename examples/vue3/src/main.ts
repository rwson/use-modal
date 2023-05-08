import { createApp } from 'vue'
import UseModals from '@use-modals/vue3'

import './style.css'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(UseModals)
app.mount('#app')
