//export const Chill = {
export default {
  template: `<div>
               <button @click="doit"
                       :required="required ? true : false"
                       :id="idName"
                       :class="className">
                 You clicked me {{ count }} times.
                 placeholder is {{ placeholder }}.
               </button>
               <input v-model="fuga"
                      @focus="onFocus"
                      @blur="onBlur"
                      @change="changer">
               {{ fuga }}
             </div>`,

  props: { 
    idx: {
      type: Object,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
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
    onFocus() {
      console.log(this.idx.hoge(1))
    },
    onBlur() {
      console.log(`Blur`)
    },
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
