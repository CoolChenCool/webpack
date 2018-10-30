// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Layout from './view/Layout';
import router from './router';
import store from './store';
import plugins from './plugins';

import './assets/less/main.less'
Vue.config.productionTip = false

Vue.use(plugins);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>'
})

