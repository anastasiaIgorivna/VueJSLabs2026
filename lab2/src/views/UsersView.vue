<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserCard from '../components/UserCard.vue'

const router = useRouter()

const users = ref([
  {
    id: 1,
    name: 'Анна Коваленко',
    email: 'anna@example.com',
    role: 'Адміністратор',
    status: 'Активний',
  },
  {
    id: 2,
    name: 'Олександр Петренко',
    email: 'alex@example.com',
    role: 'Користувач',
    status: 'Активний',
  },
  {
    id: 3,
    name: 'Марія Шевченко',
    email: 'maria@example.com',
    role: 'Користувач',
    status: 'Неактивний',
  },
  {
    id: 4,
    name: 'Іван Мельник',
    email: 'ivan@example.com',
    role: 'Модератор',
    status: 'Активний',
  },
])

function openUser(userId) {
  router.push({
    name: 'user-details',
    params: { id: userId },
  })
}
</script>

<template>
  <div class="users-page">
    <div class="page-heading">
      <div>
        <h1>Користувачі</h1>
        <p>Перегляд інформації про зареєстрованих користувачів</p>
      </div>

      <span class="users-count">
        Усього: {{ users.length }}
      </span>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Електронна пошта</th>
            <th>Роль</th>
            <th>Статус</th>
            <th>Дія</th>
          </tr>
        </thead>

        <tbody>
          <UserCard
            v-for="user in users"
            :key="user.id"
            :user="user"
            @view-details="openUser"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;
}

.page-heading h1 {
  margin: 0 0 8px;
  color: #1e293b;
  font-size: 26px;
}

.page-heading p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
}

.users-count {
  padding: 9px 14px;
  border-radius: 8px;
  background: #eff6ff;
  color: #2563eb;
  font-size: 13px;
  font-weight: 600;
}

.table-container {
  overflow-x: auto;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
}

th {
  padding: 17px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 600px) {
  .page-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>

