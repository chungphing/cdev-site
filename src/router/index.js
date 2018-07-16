import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

import WebDevelopment from '@/components/pages/web-development'
import MobileDevelopment from '@/components/pages/mobile-development'
import Consultant from '@/components/pages/consultant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/web-development',
      name: 'WebDevelopment',
      component: WebDevelopment
    },
    {
      path: '/mobile-development',
      name: 'MobileDevelopment',
      component: MobileDevelopment
    },
    {
      path: '/consultant',
      name: 'Consultant',
      component: Consultant
    }
  ]
})
