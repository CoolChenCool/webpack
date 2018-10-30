export default {
  data: function () {
    return {
      mixinName: 'from mixins'
    }
  },
  created() {
    this.helloWorld()
  },
  methods: {
    helloWorld() {
      console.log('i am from' + this.mixinName)
    }
  }
};