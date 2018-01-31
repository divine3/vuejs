import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes';

import Loading from './components/Loading.vue'; 

Vue.component('loading-i', Loading);

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes
});

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
});
