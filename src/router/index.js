import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import config from '@/config'
import routes from './routes'

const _routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return _routerPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: config.routerHistoryMode ? 'history' : 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('loading/setLoading', true)
  if (to.meta.requiresLogin) {
    if (store.state.login.login) next()
    else next('/login')
  } else {
    next()
  }
})

router.afterEach(() => {
  store.commit('loading/setLoading', false)
})

export default router
