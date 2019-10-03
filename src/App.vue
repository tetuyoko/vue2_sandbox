<template>
  <div id="app">
    <h1>Vuex Counter</h1>
    <counter></counter>
    <h1>{{ msg }}</h1>
    <button-component></button-component>
    <h2>Percel Vue2</h2>
    <div id="aaaa">
      <img src="./images/background.jpg" class="" alt="Photo of a kitten looking menacing.">
      <span>
        AAAA
      </span>
    </div>
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src="./images/background.jpg" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing.">
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <div class="dtc">
            <h1 class="f5 f4-ns mv0">Cat</h1>
          </div>
          <div class="dtc tr">
            <h2 class="f5 mv0">$1,000</h2>
          </div>
        </div>
        <p class="f6 lh-copy measure mt2 mid-gray">
        If it fits, i sits burrow under covers.
        Destroy couch leave hair everywhere,
        and touch water with paw then recoil
        in horror.
        </p>
      </div>
    </article>
  </div>
</template>

<style>
  #aaaa {
  }
</style>

<script>
import store from './store'
import buttonComponent from './components/button-component'
import Counter from './components/counter'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  },
  components: {
    buttonComponent,
    Counter
  },
  store
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>
