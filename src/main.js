import Vue from 'vue';
import App from './App.vue';
//import App from './app.js';
import './main.css';
//import './component'

const test =  new Vue({
    template: '<div>hoge</div>',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App!'
      }
    }
  });
export default () => {
  new Vue(App).$mount('#app')
};
