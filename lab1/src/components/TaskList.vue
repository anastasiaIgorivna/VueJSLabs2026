<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits([
  'toggle-task',
  'delete-task',
  'edit-task',
])
</script>

<template>
  <section class="task-list-section">
    <div class="list-heading">
      <h2>Список завдань</h2>
      <span>{{ tasks.length }} завдань на сторінці</span>
    </div>

    <div v-if="tasks.length > 0" class="task-list">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-task="emit('toggle-task', $event)"
        @delete-task="emit('delete-task', $event)"
        @edit-task="emit('edit-task', $event)"
      />
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">📝</div>
      <h3>Завдань не знайдено</h3>
      <p>Додайте нове завдання або змініть параметри фільтрації.</p>
    </div>
  </section>
</template>
