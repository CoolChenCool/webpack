export default {
  install(Vue) {
    Vue.prototype.isDev = () => process.env.NODE_ENV !== 'production';
  }
}