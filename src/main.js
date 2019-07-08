import Vue from 'vue';
import App from './App.vue';
import './main.css';
import eventHub from './plugins/eventHub';

Vue.use(eventHub);

export default () => {
  new Vue(App).$mount('#app');
};
