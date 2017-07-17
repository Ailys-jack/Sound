import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import contain from '@/view/contain'
import webContain from '@/view/webContain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contain',
      component: contain
    },
    {
      path: '/webContain',
      name: 'webContain',
      component: webContain
    }
  ]
})
