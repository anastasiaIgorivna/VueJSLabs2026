import { createI18n } from 'vue-i18n'

import ua from './locales/ua'
import en from './locales/en'

const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',

  messages: {
    ua,
    en,
  },

  globalInjection: true,
})

export default i18n
