const state = {
  name: 'moduleB'
};

const mutations = {
  ['change'](state, payload) {
    state.name = payload;
  },
};

const actions = {
  changeName({ commit }) {
    commit('change', 'moduleB is change');

  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
