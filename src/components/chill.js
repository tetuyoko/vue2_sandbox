//export const Chill = {
export default {
  template: '<button @click="doit">\
               You clicked me {{ count }} times.\
               placeholder is {{ placeholder }}.\
             </button>',

  props: { 
    placeholder: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      count: 0,
      funcme: e => {
        console.log('mounted func')
      }
    };
  },

  methods: {
    doit() {
      this.count++;
      this.$eventHub.$emit('addCount', 1);
    }
  },

  // mounted: () => {
  //    this.$nextTick(() => {
  //   });
  // }
  mounted() {
    this.$nextTick(() => {
      console.log('hoge')
      document.addEventListener('click', this.funcme, false);
    })
  }

};
