import i18n from '@/plugins/i18n'

export default {
  namespaced: true,
  getters: {
    langs () {
      const options = []
      const names = {
        'zh-CN': '中文(简体)',
        en: 'English'
      }
      i18n.availableLocales.forEach((item) => {
        const name = names[item] || item
        options.push({ name, lang: item })
      })
      return options
    }
  },
  mutations: {
    setLang (_, lang) {
      i18n.locale = lang
      localStorage.setItem('lang', lang)
    },
    initI18n () {
      const lang = localStorage.getItem('lang') || process.env.VUE_APP_I18N_LOCALE
      i18n.locale = lang
    }
  }
}
