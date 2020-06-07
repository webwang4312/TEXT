import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import VueLazyload from 'vue-lazyload';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(ElementUI);
Vue.config.productionTip = false

import { Button } from 'vant';
import { Popup } from 'vant';
import { Form } from 'vant';

Vue.use(Form);
Vue.use(Popup);
Vue.use(Button);

Vue.use(VueLazyload, {
 //加载中图片，一定要有，不然会一直重复加载占位图
 //加载失败图片
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
