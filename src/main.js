// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

import navHeader from './components/common/navHeader.vue'
Vue.component('pc-navHeader', navHeader)

import bottomFooter from './components/common/bottomFooter.vue'
Vue.component('pc-bottomFooter', bottomFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
