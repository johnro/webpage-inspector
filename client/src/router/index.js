import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Inspect from '@/components/Inspect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/inspect',
      name: 'Inspect',
      component: Inspect
    }
  ]
})
