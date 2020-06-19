import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Carousel,CarouselItem,Tag,Card,Icon,Tabs,TabPane} from 'element-ui';
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Tabs);
Vue.use(TabPane);
import 'element-ui/lib/theme-chalk/index.css';

import 'assets/icon/iconfont.css';


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  error: require('assets/images/placeholder.png'),
  loading: require('assets/images/placeholder.png'),
  attempt: 1
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
