//import Chill from './chill';

const buttonComponent = {
  components: {
    //Chill
  },

  template: `<div>
               <h1>{{ hoge('i') }}</h1>
               <button @click="doit">
                 count: {{ count }} chillCount: {{ chillCount }}.
               </button>
             </div>`,
  //<chill :idx="this" idName="thisId" required className="hoge" placeHolder="hage"></chill>

  mounted() {
    this.$eventHub.$on('addCount', delta => {
      this.addCount(delta);
    });
  },

  data: () => {
    return { count: 0, chillCount: 0 };
  },

  methods: {
    hoge(i) {
      return 'fuga' + i;
    },
    addCount(delta) {
      this.chillCount = this.chillCount + delta;
    },
    doit() {
      this.count++;
      //eventHub.$emit('addCount', 1);
    },
  },
};

export default buttonComponent;
