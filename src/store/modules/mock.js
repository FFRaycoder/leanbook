/**
 * UI完成时这个module改名为data.js
 * 要从LC获取数据
 */
import data from '@/Mock' // 从LC获取数据时删除

export default {
  namespaced: true,
  state: {
    books: [],
    currentChapter: {},
    currentBook: {}
  },
  mutations: {
    setCurrentChapter (state, currentChapter) {
      state.currentChapter = currentChapter
    },
    setCurrentBook (state, currentBook) {
      state.currentBook = currentBook
    },
    setBooksData (state, booksData) {
      state.books = booksData
    }
  },
  actions: {
    getCurrentChapter ({ commit }, source) {
      setTimeout(() => {
        const currentChapter = data.chapters.find(
          chapter => chapter.chapter === source.chapter && chapter.book === source.book
        )
        commit('setCurrentChapter', currentChapter)
      }, 500)
    },
    getCurrentBook ({ commit }, bookId) {
      setTimeout(() => {
        const currentBook = data.books.find(book => book.id === bookId)
        currentBook.tagsString = currentBook.tags.join(' · ')
        currentBook.chapters = data.chapters.filter(chapter => chapter.book === bookId)
        commit('setCurrentBook', currentBook)
      }, 500)
    },
    getBooksData ({ commit }) {
      setTimeout(() => {
        commit('setBooksData', data.books)
      }, 500)
    }
  }
}
