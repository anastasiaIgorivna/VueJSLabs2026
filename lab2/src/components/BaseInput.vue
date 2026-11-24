<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
})

const model = defineModel()
</script>

<template>
  <div class="input-group">
    <label>{{ label }}</label>

    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      class="form-input"
    />

    <span v-if="error" class="input-error">
      {{ error }}
    </span>
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 18px;
}

label {
  color: #334155;
  font-size: 14px;
  font-weight: 600;
}

.form-input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #2563eb;
}

.input-error {
  color: #dc2626;
  font-size: 12px;
}
</style>
