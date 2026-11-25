<template>
    <main class="not-found">
      <h1>404</h1>
      <h2>Сторінку не знайдено</h2>
      <p>На жаль, такої сторінки не існує.</p>
  
      <RouterLink to="/">
        Повернутися на головну
      </RouterLink>
    </main>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  