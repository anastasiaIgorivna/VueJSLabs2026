<script setup>
import { inject } from 'vue'

const user = inject('currentUser')

const statistics = [
  {
    title: 'Усього користувачів',
    value: 128,
    description: 'Зареєстровані користувачі',
    icon: '♙',
  },
  {
    title: 'Активні користувачі',
    value: 96,
    description: 'Активні облікові записи',
    icon: '✓',
  },
  {
    title: 'Кількість звітів',
    value: 24,
    description: 'Створені звіти',
    icon: '▤',
  },
]
</script>

<template>
  <div class="dashboard">
    <div class="welcome-section">
      <h1>Вітаємо, {{ user.name }}!</h1>
      <p>Ось короткий огляд роботи адміністративної панелі.</p>
    </div>

    <h2 class="section-title">Загальна статистика</h2>

    <div class="statistics-grid">
      <article
        v-for="item in statistics"
        :key="item.title"
        class="stat-card"
      >
        <div class="stat-icon">{{ item.icon }}</div>

        <div>
          <p class="stat-title">{{ item.title }}</p>
          <h3>{{ item.value }}</h3>
          <small>{{ item.description }}</small>
        </div>
      </article>
    </div>

    <section class="activity-card">
      <h2>Інформація про систему</h2>
      <p>
        Ви перебуваєте в адміністративній панелі. Тут можна переглядати
        інформацію про користувачів та ознайомлюватися зі звітами.
      </p>
      <span class="status">
        <span class="status-dot"></span>
        Система працює
      </span>
    </section>
  </div>
</template>

<style scoped>
.welcome-section {
  margin-bottom: 32px;
}

.welcome-section h1 {
  margin: 0 0 8px;
  color: #1e293b;
  font-size: 27px;
}

.welcome-section p {
  margin: 0;
  color: #64748b;
}

.section-title {
  margin-bottom: 18px;
  color: #334155;
  font-size: 18px;
}

.statistics-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.stat-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 22px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.stat-icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: #eff6ff;
  color: #2563eb;
  font-size: 23px;
}

.stat-title {
  margin: 0 0 8px;
  color: #64748b;
  font-size: 13px;
}

.stat-card h3 {
  margin: 0 0 6px;
  color: #1e293b;
  font-size: 27px;
}

.stat-card small {
  color: #94a3b8;
  font-size: 11px;
}

.activity-card {
  margin-top: 28px;
  padding: 24px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.activity-card h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 18px;
}

.activity-card p {
  color: #64748b;
  line-height: 1.6;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  color: #15803d;
  font-size: 13px;
  font-weight: 600;
}

.status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #22c55e;
}

@media (max-width: 900px) {
  .statistics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
