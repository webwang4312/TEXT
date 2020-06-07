import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  // 默认路径
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('views/Category/Category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/Cart/Cart.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('views/User/User.vue')
  },
  {
    path: '/listdetail/:iid',
    name: 'listdetail',
    component: () => import('views/Home/children/ListDetail.vue')
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
