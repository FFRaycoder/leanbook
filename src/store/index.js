import Vue from 'vue'
import Vuex from 'vuex'
import drawer from './modules/drawer'
import mock from './modules/mock' // TODO: 生产时要改成data
import loading from './modules/loading'
import i18n from './modules/i18n'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    drawer,
    mock, // TODO: 生产时要改成data
    loading,
    i18n,
    login
  }
})
