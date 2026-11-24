<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <main class="not-found-page">
    <div class="error-code">404</div>

    <h1>Сторінку не знайдено</h1>

    <p>
      На жаль, сторінка, яку ви шукаєте, не існує
      або була переміщена.
    </p>

    <button @click="goHome">
      Повернутися на головну
    </button>
  </main>
</template>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #f8fafc;
  text-align: center;
}

.error-code {
  color: #2563eb;
  font-size: 110px;
  font-weight: 800;
  line-height: 1;
}

h1 {
  margin: 20px 0 10px;
  color: #1e293b;
  font-size: 28px;
}

p {
  max-width: 420px;
  color: #64748b;
  line-height: 1.6;
}

button {
  margin-top: 20px;
  padding: 13px 22px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}
</style>
