<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button-component></button-component>
  </div>
</template>

<script>
import buttonComponent from './components/button-component'

const ComponentA = {
  template: '<h1>\
               You clicked me {{ count }} times.\
            </h1>',
  data: () => {
    return {
      count: 0
    }
  },
}

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  },
  components: {
    'button-component': buttonComponent
  }
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>
