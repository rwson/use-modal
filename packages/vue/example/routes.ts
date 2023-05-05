import VueRouter from 'vue-router'

import Normal from './normal.vue'
import Global from './global.vue'

export const router = new VueRouter({
  routes: [
    {
      path: '/normal',
      component: Normal
    },
    {
      path: '/global',
      component: Global
    }
  ]
})
