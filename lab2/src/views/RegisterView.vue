<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'
import BaseInput from '../components/BaseInput.vue'

const router = useRouter()
const updateUser = inject('updateUser')

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

function register() {
  error.value = ''

  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !password.value ||
    !confirmPassword.value
  ) {
    error.value = 'Заповніть усі поля.'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Паролі не збігаються.'
    return
  }

  const user = {
    name: name.value,
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
    title="Реєстрація"
    subtitle="Створіть обліковий запис для роботи з панеллю"
  >
    <form @submit.prevent="register">
      <BaseInput
        v-model="name"
        label="Ім'я"
        placeholder="Ваше ім'я"
      />

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
        placeholder="Створіть пароль"
      />

      <BaseInput
        v-model="confirmPassword"
        label="Підтвердження пароля"
        type="password"
        placeholder="Повторіть пароль"
      />

      <p v-if="error" class="error-message">{{ error }}</p>

      <button type="submit" class="submit-button">
        Зареєструватися
      </button>
    </form>

    <p class="login-link">
      Уже маєте обліковий запис?
      <RouterLink to="/login">Увійти</RouterLink>
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

.login-link {
  margin-top: 22px;
  text-align: center;
  color: #64748b;
  font-size: 13px;
}

.login-link a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}
</style>

