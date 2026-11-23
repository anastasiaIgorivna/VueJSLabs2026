<script setup>
import { ref, reactive, computed, watch } from 'vue'

import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskFilters from './components/TaskFilters.vue'
import TaskStats from './components/TaskStats.vue'
import Pagination from './components/Pagination.vue'

// Завантаження завдань із LocalStorage
function loadTasks() {
  try {
    const savedTasks = localStorage.getItem('todo-tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  } catch (error) {
    console.error('Помилка завантаження завдань:', error)
    return []
  }
}

// Реактивний список завдань
const tasks = ref(loadTasks())

// Реактивний об'єкт фільтрів
const filters = reactive({
  title: '',
  description: '',
  status: 'all',
  dateFrom: null,
  dateTo: null,
  priority: 'all',
})

// Поточна сторінка
const currentPage = ref(1)
const tasksPerPage = 5

// Лічильники завдань
const totalTasks = computed(() => tasks.value.length)

const activeTasks = computed(
  () => tasks.value.filter(task => task.status === 'active').length,
)

const completedTasks = computed(
  () => tasks.value.filter(task => task.status === 'done').length,
)

// Фільтрація завдань
const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    const titleMatch = task.title
      .toLowerCase()
      .includes(filters.title.toLowerCase())

    const descriptionMatch = task.description
      .toLowerCase()
      .includes(filters.description.toLowerCase())

    const statusMatch =
      filters.status === 'all' || task.status === filters.status

    const priorityMatch =
      filters.priority === 'all' || task.priority === filters.priority

    const taskDate = new Date(task.createdAt)
    taskDate.setHours(0, 0, 0, 0)

    const fromDate = filters.dateFrom
      ? new Date(filters.dateFrom)
      : null

    const toDate = filters.dateTo
      ? new Date(filters.dateTo)
      : null

    if (fromDate) fromDate.setHours(0, 0, 0, 0)
    if (toDate) toDate.setHours(23, 59, 59, 999)

    const fromMatch = !fromDate || taskDate >= fromDate
    const toMatch = !toDate || taskDate <= toDate

    return (
      titleMatch &&
      descriptionMatch &&
      statusMatch &&
      priorityMatch &&
      fromMatch &&
      toMatch
    )
  })
})

// Пагінація
const totalPages = computed(() =>
  Math.ceil(filteredTasks.value.length / tasksPerPage),
)

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * tasksPerPage

  return filteredTasks.value.slice(start, start + tasksPerPage)
})

// Додавання нового завдання
function addTask(taskData) {
  const title = taskData.title.trim()
  const description = taskData.description.trim()

  if (!title || !description) return

  const newTask = {
    id: Date.now(),
    title,
    description,
    status: 'active',
    createdAt: new Date().toISOString(),
    priority: taskData.priority,
  }

  tasks.value.unshift(newTask)
  currentPage.value = 1
}

// Перемикання статусу
function toggleTask(id) {
  const task = tasks.value.find(item => item.id === id)

  if (task) {
    task.status = task.status === 'active' ? 'done' : 'active'
  }
}

// Видалення завдання
function deleteTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id)
}

// Редагування завдання
function editTask(updatedTask) {
  const index = tasks.value.findIndex(
    task => task.id === updatedTask.id,
  )

  if (index !== -1) {
    tasks.value[index] = {
      ...tasks.value[index],
      title: updatedTask.title.trim(),
      description: updatedTask.description.trim(),
      priority: updatedTask.priority,
    }
  }
}

// Очищення фільтрів
function clearFilters() {
  filters.title = ''
  filters.description = ''
  filters.status = 'all'
  filters.dateFrom = null
  filters.dateTo = null
  filters.priority = 'all'
  currentPage.value = 1
}

// Перехід між сторінками
function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// Скидання сторінки після зміни фільтрів
watch(
  filters,
  () => {
    currentPage.value = 1
  },
  { deep: true },
)

// Автоматичне збереження завдань
watch(
  tasks,
  newTasks => {
    localStorage.setItem('todo-tasks', JSON.stringify(newTasks))
  },
  { deep: true },
)
</script>

<template>
  <main class="app">
    <header class="app-header">
      <div class="header-content">
        <div class="logo">✓ TaskFlow</div>
        <p>Організовуй завдання. Досягай більшого.</p>
      </div>
    </header>

    <section class="container">
      <div class="page-heading">
        <h1>Мої завдання</h1>
        <p>Керуй своїми справами в одному місці</p>
      </div>

      <TaskStats
        :total="totalTasks"
        :active="activeTasks"
        :completed="completedTasks"
      />

      <TaskForm @add-task="addTask" />

      <TaskFilters
        :filters="filters"
        @clear-filters="clearFilters"
      />

      <TaskList
        :tasks="paginatedTasks"
        @toggle-task="toggleTask"
        @delete-task="deleteTask"
        @edit-task="editTask"
      />

      <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @change-page="changePage"
      />
    </section>

    <footer class="app-footer">
      <p>TaskFlow © 2026 | Vue.js 3 — Composition API</p>
    </footer>
  </main>
</template>

