import api from '../api/http'

const state = {
  login: true
}

const actions = {
  alert({ commit }, sub) {
    api.tologin((res) => {
      commit('clear', res)
    }, sub)
  }
}

const mutations = {
  clear(state, res) {
    console.log(res)
    state.buymenu = {}
  }
}

export default {
  state,
  actions,
  mutations
}
