// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import GloOS from './GloOS';
import router from './router';
import store from './store';

Vue.config.productionTip = true;

const moo = { cow: true };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // provide: { moo },
  render: h => h(GloOS),
});
