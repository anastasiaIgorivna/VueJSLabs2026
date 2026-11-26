<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '../stores/settings'

defineOptions({
  name: 'ProfilePage',
})

const { t } = useI18n()

const settingsStore = useSettingsStore()
const { profile } = storeToRefs(settingsStore)

const form = reactive({
  name: profile.value.name,
  email: profile.value.email,
  password: profile.value.password,
  phone: profile.value.phone,
})

const errors = reactive({
  name: '',
  email: '',
  password: '',
  phone: '',
})

const notification = ref('')

function validateForm() {
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.phone = ''

  let isValid = true

  if (form.name.trim().length < 2) {
    errors.name = t('profile.errors.name')
    isValid = false
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(form.email)) {
    errors.email = t('profile.errors.email')
    isValid = false
  }

  if (form.password.length < 6) {
    errors.password = t('profile.errors.password')
    isValid = false
  }

  const phonePattern = /^\+?[0-9\s()-]{10,20}$/

  if (!phonePattern.test(form.phone)) {
    errors.phone = t('profile.errors.phone')
    isValid = false
  }

  return isValid
}

function saveProfile() {
  if (!validateForm()) {
    return
  }

  settingsStore.setProfile({ ...form })

  notification.value = t('profile.success')

  setTimeout(() => {
    notification.value = ''
  }, 3000)
}
</script>

<template>
  <main class="profile-page">
    <section class="profile-heading">
      <span class="eyebrow">PERSONAL ACCOUNT</span>
      <h1>{{ t('profile.title') }}</h1>
      <p>{{ t('profile.subtitle') }}</p>
    </section>

    <section class="profile-card">
      <div class="profile-avatar">
        {{ form.name ? form.name.charAt(0).toUpperCase() : 'U' }}
      </div>

      <form @submit.prevent="saveProfile">
        <div class="form-group">
          <label for="name">{{ t('profile.name') }}</label>

          <input
            id="name"
            v-model="form.name"
            type="text"
            :placeholder="t('profile.namePlaceholder')"
            :class="{ invalid: errors.name }"
          />

          <span v-if="errors.name" class="error-message">
            {{ errors.name }}
          </span>
        </div>

        <div class="form-group">
          <label for="email">{{ t('profile.email') }}</label>

          <input
            id="email"
            v-model="form.email"
            type="email"
            :placeholder="t('profile.emailPlaceholder')"
            :class="{ invalid: errors.email }"
          />

          <span v-if="errors.email" class="error-message">
            {{ errors.email }}
          </span>
        </div>

        <div class="form-group">
          <label for="password">{{ t('profile.password') }}</label>

          <input
            id="password"
            v-model="form.password"
            type="password"
            :placeholder="t('profile.passwordPlaceholder')"
            :class="{ invalid: errors.password }"
          />

          <span v-if="errors.password" class="error-message">
            {{ errors.password }}
          </span>
        </div>

        <div class="form-group">
          <label for="phone">{{ t('profile.phone') }}</label>

          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            :placeholder="t('profile.phonePlaceholder')"
            :class="{ invalid: errors.phone }"
          />

          <span v-if="errors.phone" class="error-message">
            {{ errors.phone }}
          </span>
        </div>

        <button type="submit" class="save-button">
          {{ t('common.save') }}
        </button>

        <div v-if="notification" class="success-message">
          {{ notification }}
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>
.profile-page {
  max-width: 750px;
  margin: 0 auto;
  padding: 55px 25px 80px;
}

.profile-heading {
  margin-bottom: 35px;
  text-align: center;
}

.eyebrow {
  color: #a18b75;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
}

.profile-heading h1 {
  margin: 15px 0;
  color: #352d27;
  font-family: Georgia, serif;
  font-size: 45px;
  font-weight: 400;
}

.profile-heading p {
  color: #8b8178;
}

.profile-card {
  padding: 40px;
  border: 1px solid #eee8e1;
  border-radius: 18px;
  background: white;
  box-shadow: 0 10px 35px rgba(70, 55, 40, 0.05);
}

.profile-avatar {
  width: 75px;
  height: 75px;
  margin: 0 auto 35px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #eee5dc;
  color: #51463d;
  font-family: Georgia, serif;
  font-size: 32px;
}

.form-group {
  margin-bottom: 22px;
}

.form-group label {
  display: block;
  margin-bottom: 9px;
  color: #51463d;
  font-size: 13px;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e8dfd6;
  border-radius: 9px;
  outline: none;
  background: #fdfcfb;
  color: #352d27;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-group input:focus {
  border-color: #a18b75;
}

.form-group input.invalid {
  border-color: #d66b6b;
}

.error-message {
  display: block;
  margin-top: 7px;
  color: #c75b5b;
  font-size: 12px;
}

.save-button {
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  border: none;
  border-radius: 30px;
  background: #51463d;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.save-button:hover {
  background: #a18b75;
  transform: translateY(-2px);
}

.success-message {
  margin-top: 20px;
  padding: 13px;
  border-radius: 9px;
  background: #e9eee5;
  color: #53664c;
  text-align: center;
  font-size: 13px;
}

@media (max-width: 550px) {
  .profile-card {
    padding: 25px 18px;
  }

  .profile-heading h1 {
    font-size: 36px;
  }
}
</style>
