<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'
import BaseInput from '../components/BaseInput.vue'

const router = useRouter()
const updateUser = inject('updateUser')

const email = ref('')
const password = ref('')
const error = ref('')

function login() {
  error.value = ''

  if (!email.value.trim() || !password.value.trim()) {
    error.value = 'Заповніть усі поля.'
    return
  }

  const user = {
    name: email.value.split('@')[0],
    email: email.value,
  }

  localStorage.setItem('isAuthenticated', 'true')
  localStorage.setItem('currentUser', JSON.stringify(user))

  updateUser(user)

  router.push('/admin/dashboard')
}
</script>

<template>
  <AuthLayout
    title="Вхід до системи"
    subtitle="Увійдіть, щоб отримати доступ до панелі адміністратора"
  >
    <form @submit.prevent="login">
      <BaseInput
        v-model="email"
        label="Електронна пошта"
        type="email"
        placeholder="example@email.com"
      />

      <BaseInput
        v-model="password"
        label="Пароль"
        type="password"
        placeholder="Введіть пароль"
      />

      <p v-if="error" class="error-message">{{ error }}</p>

      <button type="submit" class="submit-button">
        Увійти
      </button>
    </form>

    <p class="register-link">
      Ще не маєте облікового запису?
      <RouterLink to="/register">Зареєструватися</RouterLink>
    </p>
  </AuthLayout>
</template>

<style scoped>
.error-message {
  color: #dc2626;
  font-size: 13px;
  margin: 0 0 14px;
}

.submit-button {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.submit-button:hover {
  background: #1d4ed8;
}

.register-link {
  margin-top: 22px;
  text-align: center;
  color: #64748b;
  font-size: 13px;
}

.register-link a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}
</style>

