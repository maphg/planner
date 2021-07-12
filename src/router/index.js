import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/incidencia',
    name: 'Incidencia',
    // route level code-splitting
    // this generates a separate chunk (incidencia.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "incidencia" */ '../views/Incidencia.vue')
  },
  {
    path: '/informesemanal',
    name: 'Informesemanal',
    component: () => import('../views/Informesemanal.vue')
  },
  {
    path: '/bitacora01',
    name: 'Bitacora01',
    component: () => import('../views/Bitacora01.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
