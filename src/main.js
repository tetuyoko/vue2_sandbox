import Vue from 'vue';
import App from './App.vue';
import './main.css';
import './component'

export default () => {
  new Vue(App).$mount('#app')
};
