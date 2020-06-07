import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/icon/iconfont.css'
import '../src/assets/globalcss/global.css'

import axios from 'axios';
import {post,fetch,patch,put} from './utils/axios'
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
//引入http.js


Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
