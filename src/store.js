import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    hoge: '',
  },

  mutations: {
    increment(state) {
      console.log(this)
      console.trace();

      //console.log(state)
      if (state) {
        state.count += 1;
      }
    },

    decrement(state) {
      if (state) {
        state.count -= 1;
      }
    },
  },
});
