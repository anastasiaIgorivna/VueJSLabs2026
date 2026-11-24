<script setup>
import { computed, ref } from 'vue'

const reports = ref([
  {
    id: 1,
    title: 'Звіт про користувачів',
    category: 'Користувачі',
    date: '20.11.2026',
    status: 'Готовий',
  },
  {
    id: 2,
    title: 'Звіт про активність',
    category: 'Активність',
    date: '21.11.2026',
    status: 'Готовий',
  },
  {
    id: 3,
    title: 'Звіт системи',
    category: 'Система',
    date: '23.11.2026',
    status: 'Обробляється',
  },
])

const totalReports = computed(() => reports.value.length)

const completedReports = computed(
  () => reports.value.filter((report) => report.status === 'Готовий').length,
)

function addReport() {
  const newReport = {
    id: Date.now(),
    title: 'Новий звіт',
    category: 'Загальний',
    date: new Date().toLocaleDateString('uk-UA'),
    status: 'Готовий',
  }

  reports.value.push(newReport)
}
</script>

<template>
  <div class="reports-page">
    <div class="page-heading">
      <div>
        <h1>Звіти</h1>
        <p>Перегляд та керування звітами системи</p>
      </div>

      <button class="add-button" @click="addReport">
        + Створити звіт
      </button>
    </div>

    <div class="report-statistics">
      <div class="stat-card">
        <span>Усього звітів</span>
        <strong>{{ totalReports }}</strong>
      </div>

      <div class="stat-card">
        <span>Готові звіти</span>
        <strong>{{ completedReports }}</strong>
      </div>

      <div class="stat-card">
        <span>В обробці</span>
        <strong>{{ totalReports - completedReports }}</strong>
      </div>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Назва звіту</th>
            <th>Категорія</th>
            <th>Дата створення</th>
            <th>Статус</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="report in reports" :key="report.id">
            <td class="report-title">{{ report.title }}</td>
            <td>{{ report.category }}</td>
            <td>{{ report.date }}</td>
            <td>
              <span
                class="status"
                :class="report.status === 'Готовий' ? 'completed' : 'processing'"
              >
                {{ report.status }}
              </span>
            </td>
          </tr>
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

.add-button {
  padding: 11px 16px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.add-button:hover {
  background: #1d4ed8;
}

.report-statistics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 26px;
}

.stat-card {
  padding: 22px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.stat-card span {
  display: block;
  margin-bottom: 12px;
  color: #64748b;
  font-size: 13px;
}

.stat-card strong {
  color: #1e293b;
  font-size: 28px;
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

th,
td {
  padding: 17px 20px;
  border-bottom: 1px solid #e2e8f0;
  font-size: 13px;
}

th {
  background: #f8fafc;
  color: #64748b;
}

td {
  color: #475569;
}

.report-title {
  color: #1e293b;
  font-weight: 600;
}

.status {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}

.status.completed {
  background: #dcfce7;
  color: #15803d;
}

.status.processing {
  background: #fef3c7;
  color: #b45309;
}

@media (max-width: 700px) {
  .report-statistics {
    grid-template-columns: 1fr;
  }

  .page-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
