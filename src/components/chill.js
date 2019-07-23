//export const Chill = {
export default {
  template: `<div>
               <button @click="doit"
                       :id="idName"
                       :class="className">
                 You clicked me {{ count }} times.
                 placeholder is {{ placeholder }}.
               </button>
               <input v-model="fuga"
                      @change="changer">
               {{ fuga }}
             </div>`,

  props: { 
    placeholder: {
      type: String,
      required: true,
    },
    idName: {
      type: String,
      required: false,
    },
    className: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      count: 0,
      fuga: 0,
      funcme: e => {
        console.log('mounted func')
      }
    };
  },

  methods: {
    changer() {
      console.log(`chage ${this.fuga}`)
    },
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
