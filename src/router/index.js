import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/component',
    name: 'Component',
    component: () => import('../views/Component.vue'),
  },  
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue'),
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue'),
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
