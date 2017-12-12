import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login/login.vue'
import Main from '@/components/pages/main/main.vue'
import Demo from '@/components/pages/demo/demo.vue'
import Index from '@/components/pages/index/index.vue'
import StoreInformation from '@/components/pages/index/storeInformation/storesSwitch.vue'
import AddStore from '@/components/pages/index/storeInformation/addStore.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      redirect: '/index',
      component: Main,
      children: [
        {
          path: '/index',
          component: Index
        },
        {
          path: '/storeInformation',
          component: StoreInformation
        },
        {
          path: '/addStore',
          component: AddStore
        },
        {
          path: '/demo',
          component: Demo
        }
      ]
    }
  ]
})
