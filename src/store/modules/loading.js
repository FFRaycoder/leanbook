export default {
  namespaced: true,
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, status) {
      state.loading = status
    }
  }
}
