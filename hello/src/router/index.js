import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component:()=>import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
   
    component: () => import('../views/About.vue')
  },
  {
    path: '/first',
    name: 'first',
   
    component: () => import('../views/first.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
