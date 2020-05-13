import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@vant/touch-emulator'

import Vant from 'vant';
import 'vant/lib/index.css';

import { Lazyload } from "vant";
Vue.use(Lazyload);

Vue.use(Vant);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
