// 路由相关
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'
// 安装插件
Vue.use(VueRouter)
// 映射关系
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
