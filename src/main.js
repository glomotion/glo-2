// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = true;
Vue.config.devtools = true;

const moo = { cow: true };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  data: {},
  router,
  store,
  provide: { moo },
  created() {
    // console.log('app created', this);
  },
  mounted() {
    // console.log('app mounted', this);
  },
  template: '<App />',
});
