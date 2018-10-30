<template>
  <div id="app">
    <!-- <img src=".././assets/logo.png"> -->
    <my-header></my-header>
    <my-footer v-if="isShow"></my-footer>
    <router-view />
  </div>
</template>

<script>
import MyHeader from "@/view/header/Header";

const MyFooter = () => import("@/view/footer/Footer");

export default {
  name: "Layout",
  data: function() {
    return {
      isShow: false
    };
  },
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
