<template>
  <div>
    <!-- 登录组件，以后分离，需要检测是否登录切换样式：按钮或者是头像，这里模拟 -->
    <template v-if="isLogin">
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          ></v-img>
        </v-avatar>
      </v-btn>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginStatus',
  computed: {
    ...mapState({
      isLogin: state => state.login.login
    })
  },
  mounted () {
    this.$store.dispatch('login/getLoginStatus')
  }
}
</script>
