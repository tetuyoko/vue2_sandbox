import Vue from 'vue';

const eventHub = new Vue();

export default Vue.component('button-component', {
  template: '<div>\
               <button @click="doit">\
                 count: {{ count }} chillCount: {{ chillCount }}.\
               </button>\
               <chill />\
             </div>',
  created() {
    eventHub.$on('addCount', (delta) => {
      this.addCount(delta);
    });
  },
  data: () => {
    return {
      count: 0,
      chillCount: 0
    }
  },
  methods: {
    addCount(delta) {
      this.chillCount = this.chillCount + delta;
    },
    doit() {
      this.count++;
      //eventHub.$emit('addCount', 1);
    },
  },
})

Vue.component('chill', {
  template: '<button @click="doit">\
               You clicked me {{ count }} times.\
            </button>',
  data: () => {
    return {
      count: 0
    }
  },
  methods: {
    doit() {
      this.count++;
      eventHub.$emit('addCount', 1);
    },
  },
})
