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
    path: '/lunbotu',
    name: 'lunbotu',
   
    component: () => import('../views/lunbotu.vue')
  },
  {
    path: '/shangcheng',
    name: 'shangcheng',
   
    component: () => import('../views/shangcheng.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
