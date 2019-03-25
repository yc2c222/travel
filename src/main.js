// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//移动端设备、浏览器有点击延迟300ms事件，解决方案
import fastClick from 'fastclick'
//Css Reset
import './assets/styles/reset.css'
//1像素边框解决方案
import './assets/styles/border.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
