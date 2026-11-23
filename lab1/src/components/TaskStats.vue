<script setup>
defineProps({
  total: {
    type: Number,
    required: true,
  },
  active: {
    type: Number,
    required: true,
  },
  completed: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <section class="stats">
    <div class="stat-card total-card">
      <div class="stat-icon">📋</div>
      <div>
        <p class="stat-label">Усього завдань</p>
        <h2>{{ total }}</h2>
      </div>
    </div>

    <div class="stat-card active-card">
      <div class="stat-icon">⏳</div>
      <div>
        <p class="stat-label">Активні</p>
        <h2>{{ active }}</h2>
      </div>
    </div>

    <div class="stat-card completed-card">
      <div class="stat-icon">✅</div>
      <div>
        <p class="stat-label">Виконані</p>
        <h2>{{ completed }}</h2>
      </div>
    </div>
  </section>
</template>
