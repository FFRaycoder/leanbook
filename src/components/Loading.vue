<template>
  <div class="text-center">
    <v-overlay :value="loading">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoadingOverlay',
  computed: {
    ...mapState({
      loading: state => state.loading.loading
    })
  }
}
</script>
