import * as types from './mutation-types';

import api from '@/apis/base';

export const userLogin = ({ commit }, { username, password }) => {
  api.login({
    headers: {
      Authorization: `Basic ${btoa(unescape(encodeURIComponent(`${username}:${password}`)))}`,
    }
  }).then((res) => {
    console.log(res);
    commit(types.USER_LOGIN, res)
    return res;
  }).catch(e => {
    console.log(e)
  })
}
