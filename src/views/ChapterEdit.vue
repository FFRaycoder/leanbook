<template>
  <Page class="chapter-edit-page">
    <v-row class="chapter-edit-page-title-row">
      <v-text-field
        v-model="title"
        style="margin-right: 10px"
        :label="$t('chapter-edit.title-text-field')"
        :disabled="hasNoData"
        single-line
      ></v-text-field>
      <v-btn
        class="my-auto"
        color="error"
        :disabled="hasNoData"
        @click="handleSave"
      >{{ $t('chapter-edit.save') }}</v-btn>
    </v-row>
    <mavon-editor
      v-model="content"
      :language="$i18n.locale"
      :editable="!hasNoData"
      :toolbars="editorConfig"
      class="mavon-editor"
      @save="handleSave"
    ></mavon-editor>
  </Page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LeanbookChapterEditPage',
  props: {
    bookId: {
      type: Number
    },
    chapterId: Number
  },
  data () {
    return {
      editorConfig: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: true,
        help: false,
        undo: true,
        redo: true,
        trash: true,
        save: true,
        navigation: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        subfield: true,
        preview: true
      }
    }
  },
  computed: {
    ...mapState({
      currentChapter: state => state.mock.currentChapter
    }),
    hasNoData () {
      return JSON.stringify(this.currentChapter) === '{}'
    },
    content: {
      get () {
        return this.currentChapter.original || ''
      },
      set () {}
    },
    title () {
      return this.currentChapter.title || ''
    }
  },
  mounted () {
    this.$store.dispatch('mock/getCurrentChapter', {
      book: this.bookId,
      chapter: this.chapterId
    })
  },
  methods: {
    handleSave (content, rendered) {
      console.log(JSON.stringify(content))
      console.log(JSON.stringify(rendered))
    }
  }
}
</script>

<style lang="scss" scoped>
$page-class: chapter-edit-page;

.#{$page-class} {
  height: 100%;
  &-title-row {
    margin-left: auto;
    margin-right: auto;
  }
  .mavon-editor {
    width: 100%;
    height: 100%;
    z-index: inherit;
  }
}
</style>
