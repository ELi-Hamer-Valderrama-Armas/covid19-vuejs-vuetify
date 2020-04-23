import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/acerca_de',
    name: 'Acerca_de',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Acerca_de.vue')
  },
  {
    path: '/coronavirus',
    name: 'Coronavirus',
    component: () => import(/* webpackChunkName: "about" */ '../views/Coronavirus.vue')
  },
  {
    path: '/desarrollador',
    name: 'Desarrollador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Desarrollador.vue')
  },
  {
    path: '/:id',
    name: 'Pais',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pais.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
