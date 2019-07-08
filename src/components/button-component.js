import chill from './chill';

const buttonComponent = {
  components: {
    chill: chill
  },

  template: `<div>\
               <button @click="doit">\
                 count: {{ count }} chillCount: {{ chillCount }}.\
               </button>\
               <chill></chill>\
             </div>`,

  mounted() {
    this.$eventHub.$on('addCount', delta => {
      this.addCount(delta);
    });
  },

  data: () => {
    return { count: 0, chillCount: 0 };
  },

  methods: {
    addCount(delta) {
      this.chillCount = this.chillCount + delta;
    },
    doit() {
      this.count++;
      //eventHub.$emit('addCount', 1);
    }
  }
};

export default buttonComponent;
