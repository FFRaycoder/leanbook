<template>
  <!-- 这是书本章节的详情页 -->
  <Page class="chapter">
    <template v-if="JSON.stringify(currentChapter) !== '{}'">
      <h1 class="chapter-title">
        {{ currentChapter.title }}
      </h1>
      <div class="chapter-info">
        <span class="chapter-info-title">
          <v-icon>mdi-bookmark-outline</v-icon>
          {{ currentChapter.title }}
        </span>
        <span class="chapter-info-date">
          <v-icon>mdi-clock-outline</v-icon>
          {{ currentChapter.postDate }}
        </span>
      </div>
      <div
        class="chapter-content markdown-body"
        v-html="currentChapter.rendered">
      </div>
    </template>
    <template v-else>
      <v-skeleton-loader type="article"></v-skeleton-loader>
    </template>
  </Page>
</template>

<script>
import { computed, onMounted } from '@vue/composition-api'

export default {
  name: 'ChapterPage',
  props: {
    bookId: {
      type: Number
    },
    chapterId: {
      type: Number
    }
  },
  metaInfo () {
    return {
      title: this.currentChapter.title
    }
  },
  setup (props, { root }) {
    const currentChapter = computed(() => root.$store.state.mock.currentChapter)

    onMounted(() => {
      root.$store.dispatch('mock/getCurrentChapter', {
        book: props.bookId,
        chapter: props.chapterId
      })
    })

    return {
      currentChapter
    }
  }
}
</script>

<style lang="scss" scoped>
$page-class: chapter;

.#{$page-class} {
  padding: 50px;
  &-title {
    font-size: 20px;
    color: #000;
    line-height: 26px;
  }
  &-info {
    margin-top: 12px;
    margin-bottom: 30px;
    color: #979797;
    &-title {
      margin-right: 20px;
    }
    span,
    span * {
      font-size: 10px;
    }
  }
  &-content {
    font-size: 16px;
  }
}
</style>
<style src="github-markdown-css/github-markdown.css"></style>
<style src="highlight.js/styles/github.css"></style>
