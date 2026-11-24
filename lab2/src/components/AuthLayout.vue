<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <main class="auth-page">
    <section class="auth-card">
      <div class="auth-logo">AdminPanel</div>

      <h1>{{ title }}</h1>
      <p class="auth-subtitle">{{ subtitle }}</p>

      <div class="auth-content">
        <slot />
      </div>

      <footer class="auth-footer">
        Vue.js Laboratory Work №2
      </footer>
    </section>
  </main>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 16px;
  background: #f1f5f9;
}

.auth-card {
  width: 100%;
  max-width: 440px;
  padding: 36px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
}

.auth-logo {
  color: #2563eb;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 28px;
}

h1 {
  margin: 0 0 8px;
  color: #1e293b;
  font-size: 28px;
}

.auth-subtitle {
  margin-bottom: 28px;
  color: #64748b;
}

.auth-footer {
  margin-top: 28px;
  text-align: center;
  color: #94a3b8;
  font-size: 12px;
}
</style>
