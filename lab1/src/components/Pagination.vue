<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['change-page'])
</script>

<template>
  <nav v-if="totalPages > 1" class="pagination">
    <button
      type="button"
      :disabled="currentPage === 1"
      @click="emit('change-page', currentPage - 1)"
    >
      ← Назад
    </button>

    <span>
      Сторінка {{ currentPage }} з {{ totalPages }}
    </span>

    <button
      type="button"
      :disabled="currentPage === totalPages"
      @click="emit('change-page', currentPage + 1)"
    >
      Далі →
    </button>
  </nav>
</template>
