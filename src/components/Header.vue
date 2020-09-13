<template>
  <!-- 页头组件 -->
  <v-app-bar
    class="header"
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <!-- 切换Drawer状态 -->
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <!-- 标题 -->
    <v-toolbar-title class="ml-0 pl-4">
      <router-link
        style="cursor: pointer"
        to="/"
        tag="span"
        exact
      >
        Leanbook
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- 登录状态 -->
    <LoginStatus></LoginStatus>
  </v-app-bar>
</template>
<script>
import LoginStatus from '#/LoginStatus.vue'

/**
 * @method toggleDrawer 切换Drawer（侧边栏）的状态
 */
export default {
  name: 'LeanBookHeader',
  components: { LoginStatus },
  methods: {
    toggleDrawer () {
      this.$store.commit('drawer/toggleDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
$component-name: header;

.#{$component-name} {
  max-width: inherit;
}
</style>
