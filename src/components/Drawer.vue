<template>
  <!-- 侧边导航栏组件 -->
  <v-navigation-drawer
    v-model="$store.state.drawer.showDrawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list nav>
      <!-- 自定义侧栏 start -->
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="{ path: item.to }"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- 自定义侧栏 end -->
    </v-list>
    <template #append>
      <v-select
        v-model="$i18n.locale"
        :items="langs"
        item-text="name"
        item-value="lang"
        label="Select Lang"
        solo
      ></v-select>
      <v-divider></v-divider>
      <!-- Leanbook 广告😅 start -->
      <div class="pa-2">
        <v-btn
          href="//github.com/FFRaycoder/leanbook"
          target="_blank"
          color="success"
          block
        >
          <v-icon left>
            mdi-github
          </v-icon>
          Leanbook Github
        </v-btn>
      </div>
      <!-- Leanbook 广告 end -->
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LeanBookDrawer',
  computed: {
    ...mapGetters({
      langs: 'i18n/langs'
    }),
    items () {
      return [
        { title: this.$t('drawer.home'), icon: 'mdi-book', to: '/' },
        { title: this.$t('drawer.new-book'), icon: 'mdi-pencil', to: '/new' }
      ]
    }
  },
  watch: {
    '$i18n.locale' () {
      this.$store.commit('i18n/setLang', this.$i18n.locale)
    }
  }
}
</script>
