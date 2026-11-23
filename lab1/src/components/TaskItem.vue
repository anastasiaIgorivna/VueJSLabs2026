
<script setup>
import { ref } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits([
  'toggle-task',
  'delete-task',
  'edit-task',
])

const isEditing = ref(false)
const editedTitle = ref('')
const editedDescription = ref('')
const editedPriority = ref('medium')

function startEditing() {
  editedTitle.value = props.task.title
  editedDescription.value = props.task.description
  editedPriority.value = props.task.priority
  isEditing.value = true
}

function saveEditing() {
  if (!editedTitle.value.trim() || !editedDescription.value.trim()) {
    return
  }

  emit('edit-task', {
    id: props.task.id,
    title: editedTitle.value,
    description: editedDescription.value,
    priority: editedPriority.value,
  })

  isEditing.value = false
}

function cancelEditing() {
  isEditing.value = false
}
</script>

<template>
  <article
    class="task-card"
    :class="{
      'task-completed': task.status === 'done',
      [`priority-${task.priority}`]: true,
    }"
  >
    <div v-if="!isEditing" class="task-content">
      <div class="task-main">
        <div class="task-heading">
          <h3>{{ task.title }}</h3>

          <span class="priority-badge" :class="`badge-${task.priority}`">
            {{
              task.priority === 'high'
                ? 'Високий'
                : task.priority === 'medium'
                  ? 'Середній'
                  : 'Низький'
            }}
          </span>
        </div>

        <p class="task-description">{{ task.description }}</p>

        <p class="task-date">
          Створено:
          {{ new Date(task.createdAt).toLocaleString('uk-UA') }}
        </p>

        <span
          class="status-badge"
          :class="task.status === 'done' ? 'status-done' : 'status-active'"
        >
          {{ task.status === 'done' ? 'Виконано' : 'Активне' }}
        </span>
      </div>

      <div class="task-actions">
        <button
          class="complete-button"
          @click="emit('toggle-task', task.id)"
          :title="task.status === 'done' ? 'Повернути в активні' : 'Виконати'"
        >
          {{ task.status === 'done' ? '↩' : '✓' }}
        </button>

        <button class="edit-button" @click="startEditing" title="Редагувати">
          ✎
        </button>

        <button
          class="delete-button"
          @click="emit('delete-task', task.id)"
          title="Видалити"
        >
          ✕
        </button>
      </div>
    </div>

    <form v-else class="edit-form" @submit.prevent="saveEditing">
      <input
        v-model="editedTitle"
        type="text"
        placeholder="Назва завдання"
        maxlength="100"
      />

      <textarea
        v-model="editedDescription"
        placeholder="Опис завдання"
        maxlength="500"
      ></textarea>

      <select v-model="editedPriority">
        <option value="low">Низький пріоритет</option>
        <option value="medium">Середній пріоритет</option>
        <option value="high">Високий пріоритет</option>
      </select>

      <div class="edit-actions">
        <button type="submit" class="save-button">Зберегти</button>
        <button type="button" class="cancel-button" @click="cancelEditing">
          Скасувати
        </button>
      </div>
    </form>
  </article>
</template>
