import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入ivew
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';

Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(echarts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
