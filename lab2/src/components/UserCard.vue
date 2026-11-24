<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['view-details'])

function showDetails() {
  emit('view-details', props.user.id)
}
</script>

<template>
  <tr>
    <td class="user-name">{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.role }}</td>
    <td>
      <span
        class="status"
        :class="user.status === 'Активний' ? 'active' : 'inactive'"
      >
        {{ user.status }}
      </span>
    </td>
    <td>
      <button class="details-button" @click="showDetails">
        Детальніше
      </button>
    </td>
  </tr>
</template>

<style scoped>
td {
  padding: 17px 20px;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
  font-size: 13px;
}

.user-name {
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

.status.active {
  background: #dcfce7;
  color: #15803d;
}

.status.inactive {
  background: #fee2e2;
  color: #dc2626;
}

.details-button {
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background: #eff6ff;
  color: #2563eb;
  font-size: 12px;
  cursor: pointer;
}

.details-button:hover {
  background: #dbeafe;
}
</style>

