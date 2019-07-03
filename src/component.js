import Vue from 'vue';
export default Vue.component('button-component', {
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
  data: () => {
    return {
      count: 0
    }
  },
})
