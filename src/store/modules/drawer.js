export default {
  namespaced: true,
  state: {
    showDrawer: true // 是否显示Drawer
  },
  mutations: {
    toggleDrawer (state) {
      state.showDrawer = !state.showDrawer
    }
  }
}
