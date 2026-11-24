<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const router = useRouter()

const users = [
  {
    id: 1,
    name: 'Анна Коваленко',
    email: 'anna@example.com',
    role: 'Адміністратор',
    status: 'Активний',
    registrationDate: '12.03.2025',
  },
  {
    id: 2,
    name: 'Олександр Петренко',
    email: 'alex@example.com',
    role: 'Користувач',
    status: 'Активний',
    registrationDate: '25.04.2025',
  },
  {
    id: 3,
    name: 'Марія Шевченко',
    email: 'maria@example.com',
    role: 'Користувач',
    status: 'Неактивний',
    registrationDate: '08.06.2025',
  },
  {
    id: 4,
    name: 'Іван Мельник',
    email: 'ivan@example.com',
    role: 'Модератор',
    status: 'Активний',
    registrationDate: '19.07.2025',
  },
]

const user = computed(() =>
  users.find((item) => item.id === Number(props.id)),
)

function goBack() {
  router.push('/admin/users')
}
</script>

<template>
  <div class="details-page">
    <button class="back-button" @click="goBack">
      ← Назад до користувачів
    </button>

    <div v-if="user" class="details-card">
      <div class="profile-header">
        <div class="profile-avatar">
          {{ user.name.charAt(0) }}
        </div>

        <div>
          <h1>{{ user.name }}</h1>
          <p>{{ user.email }}</p>
        </div>
      </div>

      <h2>Інформація про користувача</h2>

      <div class="info-list">
        <div class="info-row">
          <span>Ідентифікатор</span>
          <strong>{{ user.id }}</strong>
        </div>

        <div class="info-row">
          <span>Повне ім'я</span>
          <strong>{{ user.name }}</strong>
        </div>

        <div class="info-row">
          <span>Електронна пошта</span>
          <strong>{{ user.email }}</strong>
        </div>

        <div class="info-row">
          <span>Роль</span>
          <strong>{{ user.role }}</strong>
        </div>

        <div class="info-row">
          <span>Статус</span>
          <strong>{{ user.status }}</strong>
        </div>

        <div class="info-row">
          <span>Дата реєстрації</span>
          <strong>{{ user.registrationDate }}</strong>
        </div>
      </div>
    </div>

    <div v-else class="not-found-card">
      <h2>Користувача не знайдено</h2>
      <p>Перевірте ідентифікатор користувача.</p>

      <button class="back-button" @click="goBack">
        Повернутися до списку
      </button>
    </div>
  </div>
</template>

<style scoped>
.back-button {
  margin-bottom: 22px;
  padding: 10px 15px;
  border: none;
  border-radius: 7px;
  background: #2563eb;
  color: white;
  font-size: 13px;
  cursor: pointer;
}

.back-button:hover {
  background: #1d4ed8;
}

.details-card,
.not-found-card {
  max-width: 700px;
  padding: 28px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 25px;
}

.profile-avatar {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #dbeafe;
  color: #2563eb;
  font-size: 25px;
  font-weight: 700;
}

.profile-header h1 {
  margin: 0 0 7px;
  color: #1e293b;
  font-size: 22px;
}

.profile-header p {
  margin: 0;
  color: #64748b;
  font-size: 13px;
}

.details-card h2 {
  margin-bottom: 20px;
  color: #334155;
  font-size: 17px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 13px;
}

.info-row span {
  color: #64748b;
}

.info-row strong {
  color: #1e293b;
  text-align: right;
}

.not-found-card h2 {
  color: #1e293b;
}

.not-found-card p {
  color: #64748b;
}
</style>
