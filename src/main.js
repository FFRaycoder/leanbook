import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import Page from '#/Page.vue'

import { vuetify, i18n } from '@/plugins'

Vue.config.productionTip = false

Vue.component('Page', Page)

// eslint-disable-next-line vue/require-name-property
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
