import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Vip from '../pages/Vip/Vip.vue'
import Shopcar from '../pages/Shopcar/Shopcar.vue'
import Search from '../pages/Search/Search.vue'

Vue.use(VueRouter);
Vue.use(Home);
Vue.use(Vip);
Vue.use(Shopcar);
Vue.use(Search);


const routes = [
	{
		path: '/Home',
		name: 'Home',
		component: () => import('../pages/Home/Home.vue')
	},
	{
		path: '/Vip',
		name: 'Vip',
		component: () => import('../pages/Vip/Vip.vue')
	},
	{
		path: '/Shopcar',
		name: 'Shopcar',
		component: () => import('../pages/Shopcar/Shopcar.vue')
	},
	{
		path: "/Search",
		name: "Search",
		component: Search
	},
	
]

const router = new VueRouter({
	routes
})

export default router
