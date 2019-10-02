import Vue from 'vue';

const eventHub = {
  install: (Vue, options) => {
    Vue.prototype.$eventHub = new Vue();
  },
};

export default eventHub;
