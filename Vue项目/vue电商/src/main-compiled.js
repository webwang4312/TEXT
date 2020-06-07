'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _elementUi = require('element-ui');

var _elementUi2 = _interopRequireDefault(_elementUi);

require('element-ui/lib/theme-chalk/index.css');

var _vueLazyload = require('vue-lazyload');

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _bootstrapVue = require('bootstrap-vue');

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap-vue/dist/bootstrap-vue.css');

var _vant = require('vant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Install BootstrapVue
_vue2.default.use(_bootstrapVue.BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
_vue2.default.use(_bootstrapVue.IconsPlugin);

_vue2.default.use(_elementUi2.default);
_vue2.default.config.productionTip = false;

_vue2.default.use(_vant.Form);
_vue2.default.use(_vant.Popup);
_vue2.default.use(_vant.Button);

_vue2.default.use(_vueLazyload2.default, {
  //加载中图片，一定要有，不然会一直重复加载占位图
  //加载失败图片
});

new _vue2.default({
  router: _router2.default,
  store: _store2.default,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app');
