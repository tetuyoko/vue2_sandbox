export default {
  // view
  template: `
    <div id="app">
      <p>Vuex Counter</p>
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
  `,
  // state
  computed: {
    count() {
      return this.$store.state.count;
    },
    //hoge() {
    //  return this.$store.state.hoge;
    //}
  },
  // actions
  methods: {
    increment() {
      this.$store.state.count++;
    },
    decrement() {
      this.$store.state.count--;
    }
  }
};
