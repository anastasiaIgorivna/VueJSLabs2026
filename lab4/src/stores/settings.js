import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    locale: 'ua',

    profile: {
      name: '',
      email: '',
      phone: '',
    },

    theme: 'light',
  }),

  actions: {
    setLocale(lang) {
      if (lang === 'ua' || lang === 'en') {
        this.locale = lang
      }
    },

    setProfile(profileData) {
      const { password: _password, ...safeProfileData } = profileData

      this.profile = {
        ...this.profile,
        ...safeProfileData,
      }
    },

    setTheme(theme) {
      if (theme === 'light' || theme === 'dark') {
        this.theme = theme
      }
    },
  },

  persist: {
    key: 'lumiere-settings',
  },
})

