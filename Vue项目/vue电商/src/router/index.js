// 路由相关
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
import home from 'views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/cart/cart.vue')
  }, {
    path: '/category',
    name: 'category',
    component: () => import('views/category/category.vue')
  },
   {
    path: '/profile',
    name: 'profile',
    component: () => import('views/profile/profile.vue')
  },
   {
    path: '/login',
    name: 'login',
    component: () => import('views/profile/childComps/Login.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('views/cart/childComps/Table.vue')
  },
  {
    path: '/bootstrap',
    name: 'bootstrap',
    component: () => import('views/cart/childComps/bootstrap.vue')
  },
  
]

const router = new VueRouter({
  routes,
  // 去除#号
  mode: 'history',
})


export default router
