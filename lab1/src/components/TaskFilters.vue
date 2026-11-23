<script setup>
import { VueDatePicker } from '@vuepic/vue-datepicker'

defineProps({
  filters: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['clear-filters'])
</script>

<template>
  <section class="filters card">
    <div class="filters-heading">
      <div>
        <h2>Фільтрація завдань</h2>
        <p>Знайдіть потрібні завдання за параметрами</p>
      </div>

      <button
        type="button"
        class="clear-filters-button"
        @click="emit('clear-filters')"
      >
        Очистити фільтри
      </button>
    </div>

    <div class="filters-grid">
      <div class="form-group">
        <label for="filter-title">Назва завдання</label>
        <input
          id="filter-title"
          v-model="filters.title"
          type="text"
          placeholder="Пошук за назвою..."
        />
      </div>

      <div class="form-group">
        <label for="filter-description">Опис завдання</label>
        <input
          id="filter-description"
          v-model="filters.description"
          type="text"
          placeholder="Пошук за описом..."
        />
      </div>

      <div class="form-group">
        <label for="filter-status">Статус</label>
        <select id="filter-status" v-model="filters.status">
          <option value="all">Усі завдання</option>
          <option value="active">Активні</option>
          <option value="done">Виконані</option>
        </select>
      </div>

      <div class="form-group">
        <label for="filter-priority">Пріоритет</label>
        <select id="filter-priority" v-model="filters.priority">
          <option value="all">Усі пріоритети</option>
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>
      </div>

      <div class="form-group">
        <label>Дата створення від</label>
        <VueDatePicker
          v-model="filters.dateFrom"
          model-type="yyyy-MM-dd"
          :enable-time-picker="false"
          auto-apply
          placeholder="Оберіть початкову дату"
        />
      </div>

      <div class="form-group">
        <label>Дата створення до</label>
        <VueDatePicker
          v-model="filters.dateTo"
          model-type="yyyy-MM-dd"
          :enable-time-picker="false"
          auto-apply
          placeholder="Оберіть кінцеву дату"
        />
      </div>
    </div>
  </section>
</template>
