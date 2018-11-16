import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Mock from '@/pages/mock/index'
import Element from '@/pages/element/index'
import Render from '@/pages/render/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mock',
      name: 'Mock',
      component: Mock
    },
    {
      path: '/ele',
      name: 'Element',
      component: Element
    },
    {
      path: '/ren',
      name: 'Render',
      component: Render
    }
  ]
})
