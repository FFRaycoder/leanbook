<template>
  <v-app>
    <Drawer></Drawer>
    <Header></Header>
    <v-main>
      <v-container style="height: 100%">
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer></Footer>
    <Loading></Loading>
  </v-app>
</template>

<script>
import AV from 'leancloud-storage'
import config from '@/config'
import Drawer from '#/Drawer.vue'
import Header from '#/Header.vue'
import Loading from '#/Loading.vue'
import Footer from '#/Footer.vue'

export default {
  name: 'App',
  components: {
    Drawer,
    Header,
    Loading,
    Footer
  },
  metaInfo () {
    return {
      titleTemplate: '%s | LeanBook',
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
  setup () {
    AV.init({
      appId: config.appId,
      appKey: config.appKey
    })
  }
}
</script>

<style lang="scss" src="./assets/main.scss"></style>
