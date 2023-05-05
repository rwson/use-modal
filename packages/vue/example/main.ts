import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'

import modalHooks from './hooks/vue.esm'

import App from './App.vue'
import { router } from './routes'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(modalHooks)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
