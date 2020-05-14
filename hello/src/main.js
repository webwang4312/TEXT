import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './components/commen.css';

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
