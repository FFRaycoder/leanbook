<template>
  <Page>
    <div
      v-if="JSON.stringify(currentBook) !== '{}'"
      class="book"
    >
      <v-img
        class="book-cover"
        :src="currentBook.cover"
      ></v-img>
      <div class="book-detail">
        <div class="book-detail-title mb-5">
          <h1>{{ currentBook.title }}</h1>
        </div>
        <div class="book-detail-tags mb-5">
          <span>{{ currentBook.tagsString }}</span>
        </div>
        <div class="book-detail-description">
          {{ currentBook.description }}
        </div>
        <div class="book-detail-controls">
          <v-btn
            color="error"
            :to="`${$route.path}/chapter/1`"
          >
            {{ $t('book.read-now') }}
          </v-btn>
        </div>
      </div>
      <div class="book-latest-chapter">
        <h1 class="book-latest-chapter-module-title">
          {{ $t('book.latest-chapter') }}
        </h1>
        <h2 class="book-latest-chapter-chapter-title">
          <router-link :to="{ path: `${$route.path}/chapter/${latestChapter.chapter}` }">
            {{ latestChapter.title }}
          </router-link>
        </h2>
        <p>
          {{ latestChapterContentSliced }}
        </p>
      </div>
      <div class="book-chapters-list">
        <div class="book-chapters-list-title">
          <h1>{{ $t('book.all-chapters', { total: currentBook.chapters.length }) }}</h1>
        </div>
        <ul
          class="book-chapters-list-list"
          :class="{ 'show-all': showAll }"
        >
          <router-link
            v-for="chapter in chapters"
            :key="chapter.chapter"
            :to="{ path: `${$route.path}/chapter/${chapter.chapter}` }"
            tag="li"
          >
            <h1>{{ chapter.title }}</h1>
          </router-link>
        </ul>
        <v-btn
          v-show="!showAll && chapters.length > 8"
          outlined
          class="book-chapters-list-read-more mx-auto"
          width="96"
          height="34"
          @click="showAll = true"
        >{{ $t('book.view-all') }}</v-btn>
      </div>
    </div>
    <template v-else>
      <div
        class="pl-7 pt-7"
        style="max-width: 350px"
      >
        <v-skeleton-loader
          class="mx-auto"
          type="image, text@3"
        ></v-skeleton-loader>
      </div>
    </template>
  </Page>
</template>

<script>
import { ref, computed, onMounted } from '@vue/composition-api'

export default {
  name: 'BookDetailsPage',
  props: {
    bookId: {
      type: Number
    }
  },
  metaInfo () {
    return {
      title: this.$t('title.book', { name: this.currentBook.title })
    }
  },
  setup (props, { root }) {
    const showAll = ref(!!root.$route.query.showAll)
    const currentBook = computed(() => root.$store.state.mock.currentBook)
    const latestChapter = computed(() => {
      const allChapters = currentBook.value?.chapters
      return allChapters ? allChapters.slice(-1) : undefined
    })
    const latestChapterContentSliced = computed(() => (
      latestChapter
      .value
      ?.rendered
      ?.replace(/<\/?.+?\/?>/g, '')
      ?.slice(0, 100)
    ))
    const slicedChapters = computed(() => (
      currentBook
      .value
      ?.chapters
      ?.slice(0, 8)
    ))
    const chapters = computed(() => {
      return showAll.value ? currentBook.value.chapters : slicedChapters.value
    })

    onMounted(() => {
      root.$store.dispatch('mock/getCurrentBook', props.bookId)
    })

    return {
      showAll,
      currentBook,
      latestChapter,
      latestChapterContentSliced,
      slicedChapters,
      chapters
    }
  }
}
</script>

<style lang="scss" scoped>
$page-class: book;

@mixin title-before {
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background: #b8b8b8;
  }
}

.#{$page-class} {
  height: 240px;
  position: relative;
  top: 25px;
  left: 25px;
  &-cover {
    position: absolute;
    width: 180px;
    height: 240px;
    float: left;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  &-detail {
    position: relative;
    margin-left: 200px;
    width: auto;
    height: 100%;
    font-size: 14px;
    color: #979797;
    text-align: left;
    line-height: 14px;
    &-title {
      height: 24px;
      h1 {
        display: inline-block;
        font-size: 24px;
        line-height: 24px;
        color: #000;
        font-weight: 500;
      }
    }
    &-tag {
      span {
        line-height: 20px;
      }
    }
    &-description {
      line-height: 24px;
      line-clamp: 2;
      box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
      height: 48px;
    }
    &-controls {
      width: 207px;
      position: absolute;
      left: 0;
      bottom: 5px;
    }
  }
  &-latest-chapter {
    margin-top: 40px;
    width: 100%;
    text-align: left;
    &-module-title {
      @include title-before;
      width: 100%;
      height: 38px;
      font-size: 18px;
      color: #000;
      line-height: 18px;
      position: relative;
      font-weight: 500;
    }
    &-chapter-title {
      margin-top: 20px;
      display: flex;
      box-pack: justify;
      justify-content: space-between;
      a {
        font-size: 14px;
        color: #000;
        line-height: 24px;
        &:hover {
          color: #ff5519;
        }
      }
    }
    p {
      font-size: 14px;
      color: #979797;
      line-height: 24px;
      line-clamp: 2;
      box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
      height: 48px;
    }
  }
  &-chapters-list {
    position: relative;
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 40px;
    &-title {
      @include title-before;
      position: relative;
      display: flex;
      width: 100%;
      height: 38px;
      font-size: 18px;
      color: #000;
      justify-content: space-between;
      h1 {
        font-weight: 500;
        line-height: 18px;
      }
    }
    &-list {
      max-height: 216px;
      width: 100%;
      list-style: none;
      overflow: hidden;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      li {
        display: block;
        position: relative;
        width: 45%;
        height: 54px;
        text-align: left;
        font-size: 14px;
        overflow: hidden;
        h1 {
          display: inline-block;
          color: #000;
          line-height: 54px;
          cursor: pointer;
        }
        &::before {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 880px;
          height: 1px;
          transform: scaleY(0.5);
          background: #ebebeb;
        }
      }
      &.show-all {
        max-height: 432px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    &-read-more {
      display: block;
      font-size: 14px;
      border-color: #dbdbdb;
      &:hover {
        border-color: #333;
      }
    }
  }
}
</style>
