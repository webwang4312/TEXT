import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad,{
    error:require('assets/images/placeholder.png'),
    loading:require('assets/images/placeholder.png'),
    attempt: 1
})

import 'assets/icon/iconfont.css';


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
