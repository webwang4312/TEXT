import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/cart/Cart.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('views/user/User.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
