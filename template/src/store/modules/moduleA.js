const state = {
  name: 'moduleA'
};

const mutations = {
  ['change'](state, payload) {
    state.name = payload;
  },
};

const actions = {
  changeName({ commit }) {
    commit('change', 'moduleA is change');

  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
