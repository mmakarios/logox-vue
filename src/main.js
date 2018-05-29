// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  components: { App },
  data: {
    currentRoute: window.location.pathname
  },
  template: '<App/>'
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
