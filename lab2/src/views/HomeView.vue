<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="home-page">
    <div class="home-card">
      <div class="logo">AdminPanel</div>

      <div class="welcome-icon">▦</div>

      <h1>Вітаємо в AdminPanel!</h1>

      <p>
        Це демонстраційна система адміністрування,
        створена за допомогою Vue.js.
      </p>

      <div class="home-actions">
        <RouterLink to="/login" class="primary-button">
          Увійти
        </RouterLink>

        <RouterLink to="/register" class="secondary-button">
          Зареєструватися
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: #f1f5f9;
}

.home-card {
  width: 100%;
  max-width: 560px;
  padding: 48px 36px;
  border-radius: 18px;
  background: white;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.logo {
  margin-bottom: 35px;
  color: #2563eb;
  font-size: 22px;
  font-weight: 700;
}

.welcome-icon {
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  margin: 0 auto 24px;
  border-radius: 18px;
  background: #eff6ff;
  color: #2563eb;
  font-size: 38px;
}

h1 {
  margin-bottom: 14px;
  color: #1e293b;
  font-size: 28px;
}

p {
  margin: 0 auto;
  max-width: 390px;
  color: #64748b;
  line-height: 1.7;
}

.home-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.primary-button,
.secondary-button {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
}

.primary-button {
  background: #2563eb;
  color: white;
}

.primary-button:hover {
  background: #1d4ed8;
}

.secondary-button {
  border: 1px solid #cbd5e1;
  color: #334155;
}

.secondary-button:hover {
  background: #f1f5f9;
}
</style>
