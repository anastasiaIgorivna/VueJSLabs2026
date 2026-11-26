<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'

import { useSettingsStore } from './stores/settings'
import { useCartStore } from './stores/cart'
import i18n from './i18n'

const { t } = useI18n()

const settingsStore = useSettingsStore()
const cartStore = useCartStore()

const { locale: currentLocale } = storeToRefs(settingsStore)
const { totalCount } = storeToRefs(cartStore)

// Синхронізація мови Pinia та vue-i18n
watch(
  currentLocale,
  (newLocale) => {
    i18n.global.locale.value = newLocale
  },
  { immediate: true },
)

function changeLanguage(lang) {
  settingsStore.setLocale(lang)
}
</script>

<template>
  <div class="app-wrapper">
    <header class="site-header">
      <RouterLink to="/" class="logo">
        <span class="logo-icon">L.</span>
        <span class="logo-text">LUMIÈRE</span>
      </RouterLink>

      <nav class="main-nav">
        <RouterLink to="/" class="nav-link">
          {{ t('nav.catalog') }}
        </RouterLink>

        <RouterLink to="/cart" class="nav-link cart-link">
          {{ t('nav.cart') }}

          <span v-if="totalCount > 0" class="cart-badge">
            {{ totalCount }}
          </span>
        </RouterLink>

        <RouterLink to="/profile" class="nav-link">
          {{ t('nav.profile') }}
        </RouterLink>
      </nav>

      <div class="header-actions">
        <div class="language-switch">
          <button
            :class="{ selected: currentLocale === 'ua' }"
            @click="changeLanguage('ua')"
          >
            UA
          </button>

          <span>/</span>

          <button
            :class="{ selected: currentLocale === 'en' }"
            @click="changeLanguage('en')"
          >
            EN
          </button>
        </div>
      </div>
    </header>

    <RouterView />

    <footer class="site-footer">
      <div class="footer-logo">LUMIÈRE</div>

      <p>{{ t('app.tagline') }}</p>

      <span>© 2026 Lumière Store. All rights reserved.</span>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', Arial, sans-serif;
  background: #fdfcfb;
  color: #352d27;
}

button,
input {
  font: inherit;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-header {
  min-height: 85px;
  padding: 15px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  background: #fff;
  border-bottom: 1px solid #eee8e1;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #352d27;
  text-decoration: none;
}

.logo-icon {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #51463d;
  color: white;
  font-family: Georgia, serif;
  font-size: 19px;
}

.logo-text {
  font-family: Georgia, serif;
  font-size: 19px;
  letter-spacing: 3px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 35px;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  color: #756b62;
  font-size: 13px;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #352d27;
}

.nav-link.router-link-active::after {
  position: absolute;
  content: '';
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #a18b75;
}

.cart-badge {
  min-width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  padding: 0 5px;
  border-radius: 50%;
  background: #51463d;
  color: white;
  font-size: 10px;
}

.language-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b9afa5;
  font-size: 12px;
}

.language-switch button {
  padding: 5px;
  border: none;
  background: transparent;
  color: #a69b90;
  cursor: pointer;
}

.language-switch button.selected {
  color: #352d27;
  font-weight: 700;
}

.app-wrapper > main {
  flex: 1;
  width: 100%;
}

.site-footer {
  padding: 35px 20px;
  background: #51463d;
  color: #f5eee7;
  text-align: center;
}

.footer-logo {
  margin-bottom: 10px;
  font-family: Georgia, serif;
  font-size: 19px;
  letter-spacing: 4px;
}

.site-footer p {
  margin-bottom: 17px;
  color: #ded2c5;
  font-size: 13px;
}

.site-footer > span {
  color: #c0b3a6;
  font-size: 11px;
}

@media (max-width: 650px) {
  .site-header {
    padding: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .logo {
    width: 100%;
    justify-content: center;
  }

  .main-nav {
    gap: 20px;
  }

  .header-actions {
    display: flex;
  }

  .nav-link {
    font-size: 12px;
  }
}
</style>
