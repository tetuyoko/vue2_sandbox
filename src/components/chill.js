const chill = {
  template:
    '<button @click="doit">\
               You clicked me {{ count }} times.\
             </button>',

  data: () => {
    return {
      count: 0
    };
  },

  methods: {
    doit() {
      this.count++;
      this.$eventHub.$emit('addCount', 1);
    }
  }
};

export default chill;
