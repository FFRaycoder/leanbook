<template>
  <!-- 首页 -->
  <div>
    <v-row class="mx-auto">
      <!-- 无奈 这玩意儿没法啊 -->
      <template v-if="JSON.stringify(books) !== '[]'">
        <!-- 书本列表，用v-for遍历渲染 -->
        <Item
          v-for="(book, i) in books"
          :key="i"
          :book-id="book.id"
          :title="book.title"
          :description="book.description"
          :cover="book.cover"
          :author="book.author"
        ></Item>
        <v-card
          class="ma-4"
          width="344"
          height="334"
          ripple
        >
          <div
            class="d-flex align-center justify-center newbook-action"
            @click="handleNewBook"
          >
            <v-icon
              x-large
              color="blue"
            >
              mdi-plus-circle-outline
            </v-icon>
          </div>
        </v-card>
      </template>
      <template v-else>
        <v-card
          min-width="344"
          min-height="334"
          class="ma-4"
        >
          <v-skeleton-loader
            class="mx-auto"
            type="card, list-item"
          ></v-skeleton-loader>
        </v-card>
      </template>
    </v-row>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import AV from 'leancloud-storage'
import Item from '#/BookItem.vue'

export default {
  name: 'HomePage',
  metaInfo () {
    return {
      title: this.$t('title.home')
    }
  },
  components: { Item },
  setup (_, { root }) {
    const books = ref([])
    const handleNewBook = () => {
      root.$router.push('/new')
    }

    onMounted(() => {
      const data = new AV.Query('Books')
      data.find().then((results) => {
        results.forEach((book) => {
          books.value.push(book.attributes)
        })
      })
    })

    return {
      books,
      handleNewBook
    }
  }
}
</script>

<style lang="scss" scoped>
.newbook {
  &-action {
    cursor: pointer;
    height: 100%;
  }
}
</style>
