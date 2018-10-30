<template>
  <div class="login-wrapper">
    <div>
      <input type="text" name="name" v-model="loginForm.userName">
    </div>
    <div>
      <input type="password" name="password" v-model="loginForm.passWorld">
    </div>
    <button @click="login" class="ct-mrm">登陆</button>
    {{moduleAname}}- {{moduleBname}}
    <button @click="change">改名字</button>
    <span class="es-icon es-icon-people"></span>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import api from "@/apis/base";
import mixins from "@/mixins";

export default {
  components: {},
  props: {},
  mixins: [mixins],
  data() {
    return {
      loginForm: {
        userName: "",
        passWorld: ""
      }
    };
  },
  created() {
    console.log(this.isDev());
  },
  mounted() {
    this.resolveAfter();
  },
  computed: {
    ...mapState({
      moduleAname: state => state.moduleA.name,
      moduleBname: state => state.moduleB.name
    }),
    ...mapGetters(["token"])
  },
  methods: {
    ...mapActions(["userLogin", "moduleA/changeName"]),
    login() {
      const username = this.loginForm.userName;
      const password = this.loginForm.passWorld;

      this.userLogin({ username, password }).then(res => {
        this.$router.push({ path: "/" });
      });
    },
    change() {
      this["moduleA/changeName"]();
    },
    async resolveAfter() {
      let a = await this._async();
      console.log(a, "60");
    },
    _async() {
      const data = {
        query: {
          id: 2
        }
      };

      return api.mock(data);
    }
  },
  watch: {}
};
</script>
<style scoped lang='less'>
.login-wrapper {
  div {
    margin: 10px;
    opacity: 0.6;
  }
}
</style>