import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

const state = {
  token: null,
  user: {},
  isLoading: false
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    moduleA,
    moduleB
  }
})


