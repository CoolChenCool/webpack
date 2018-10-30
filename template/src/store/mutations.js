import * as types from './mutation-types'

const mutations = {
  [types.IS_LOADING](state, payload) {
    state.types = payload
  },
  [types.USER_LOGIN](state, payload) {
    state.user = payload.user;
    state.token = payload.token;
    localStorage.setItem('token', JSON.stringify(payload.token));
    localStorage.setItem('user', JSON.stringify(payload.user));
  },
  [types.USER_LOGOUT](state) {
    state.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}

export default mutations