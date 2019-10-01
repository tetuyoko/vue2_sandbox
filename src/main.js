import Vue from 'vue';
import 'es6-promise/auto';

Vue.use(eventHub);

import App from './App.vue';
import './main.css';
import eventHub from './plugins/eventHub';

export default () => {
  new Vue(App).$mount('#app');
};
