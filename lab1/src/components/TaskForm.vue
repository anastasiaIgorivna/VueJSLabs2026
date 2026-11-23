<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-task'])

const title = ref('')
const description = ref('')
const priority = ref('medium')
const errorMessage = ref('')

function submitTask() {
  if (!title.value.trim() || !description.value.trim()) {
    errorMessage.value = 'Заповніть назву та опис завдання!'
    return
  }

  emit('add-task', {
    title: title.value,
    description: description.value,
    priority: priority.value,
  })

  title.value = ''
  description.value = ''
  priority.value = 'medium'
  errorMessage.value = ''
}
</script>

<template>
  <section class="task-form card">
    <h2>Створити нове завдання</h2>

    <form @submit.prevent="submitTask">
      <div class="form-group">
        <label for="task-title">Назва завдання</label>

        <input
          id="task-title"
          v-model="title"
          type="text"
          placeholder="Наприклад, підготувати звіт"
          maxlength="100"
        />
      </div>

      <div class="form-group">
        <label for="task-description">Опис</label>

        <textarea
          id="task-description"
          v-model="description"
          placeholder="Детальніше опишіть завдання..."
          rows="3"
          maxlength="500"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="task-priority">Пріоритет</label>

        <select id="task-priority" v-model="priority">
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>
      </div>

      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>

      <button type="submit" class="add-button">
        + Додати завдання
      </button>
    </form>
  </section>
</template>
