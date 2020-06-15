import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true,
      keepAlive: true // 需要缓存
    }
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
    path: '/detail',
    name: 'detail',
    component: () => import('views/Detail/detail.vue'),
    meta: {
      requireAuth: true,
      keepAlive: false // 不需要缓存
    }
  },
]

const router = new VueRouter({
  mode:'history',//缓存模式
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})

export default router
