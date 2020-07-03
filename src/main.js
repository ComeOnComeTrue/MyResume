import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'

import "@/assets/reset.css" // 初始化css
import "@/assets/font.css" // iconfont 图标
import "velocity-animate" // 动画插件

// import ElementUI from 'element-ui';
// import "element-ui/lib/theme-chalk/index.css"
// Vue.use(ElementUI)

Vue.prototype.$ = $; // jquery

Vue.config.productionTip = false

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
