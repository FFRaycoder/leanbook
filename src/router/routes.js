import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'Index',
    component: Home
  },
  {
    path: '/new',
    name: 'NewBook',
    component: () => import(/* webpackChunkName:"new-book" */ '@/views/NewBook.vue')
  },
  {
    path: '/book/:bookId',
    name: 'Book',
    component: () => import(/* webpackChunkName:"book" */ '@/views/Book.vue'),
    props: route => ({
      bookId: parseInt(route.params.bookId),
      showAll: Boolean(route.query.showAll)
    })
  },
  {
    path: '/book/:bookId/chapter/:chapterId',
    name: 'Chapter',
    component: () => import(/* webpackChunkName:"chapter" */ '@/views/Chapter.vue'),
    props: route => ({
      bookId: parseInt(route.params.bookId),
      chapterId: parseInt(route.params.chapterId)
    })
  },
  {
    path: '/book/:bookId/edit/:chapterId',
    name: 'ChapterEdit',
    meta: {
      requiresLogin: true
    },
    component: () => import(/* webpackChunkName:"chapter-edit" */ '@/views/ChapterEdit.vue'),
    props: route => ({
      bookId: parseInt(route.params.bookId),
      chapterId: parseInt(route.params.chapterId)
    })
  },
  {
    path: '*',
    redirect: '/'
  }
]
