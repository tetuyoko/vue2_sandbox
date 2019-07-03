<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button-component></button-component>
  </div>
</template>

<script>
import buttonComponent from './components/button-component'

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
