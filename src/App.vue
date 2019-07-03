<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button-component />
  </div>
</template>

<script>
import './component'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  },
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>
