import data from '@/Mock' // 从LC获取数据时删除

export default {
  namespaced: true,
  state: {
    login: false
  },
  mutations: {
    setLoginStatus (state, status) {
      state.login = status
    }
  },
  actions: {
    getLoginStatus ({ commit }) {
      setTimeout(() => {
        commit('setLoginStatus', data.login)
      }, 500)
    }
  }
}
