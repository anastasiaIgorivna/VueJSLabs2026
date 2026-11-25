<template>
    <header class="header">
      <div class="header-container">
        <RouterLink to="/" class="logo">
          <span class="logo-icon">N</span>
          <span>NewsSpace</span>
        </RouterLink>
  
        <nav class="navigation">
          <RouterLink to="/">Головна</RouterLink>
          <RouterLink to="/about">Про нас</RouterLink>
        </nav>
  
        <button class="theme-button" @click="toggleTheme">
          <span v-if="theme === 'light'">🌙 Темна тема</span>
          <span v-else>☀️ Світла тема</span>
        </button>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { RouterLink } from 'vue-router'
  
  const theme = ref('light')
  
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
  
    if (savedTheme) {
      theme.value = savedTheme
    }
  
    document.documentElement.setAttribute('data-theme', theme.value)
  })
  
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
  
  watch(theme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  })
  </script>
  
  <style scoped>
  .header {
    background: #172554;
    color: white;
    padding: 18px 5%;
  }
  
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    text-decoration: none;
    font-size: 23px;
    font-weight: 700;
  }
  
  .logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #60a5fa;
    border-radius: 10px;
  }
  
  .navigation {
    display: flex;
    gap: 28px;
  }
  
  .navigation a {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 15px;
    transition: color 0.3s;
  }
  
  .navigation a:hover,
  .navigation a.active-link {
    color: white;
  }
  
  .theme-button {
    padding: 10px 16px;
    border: 1px solid #64748b;
    border-radius: 8px;
    background: transparent;
    color: white;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s;
  }
  
  .theme-button:hover {
    background: #334155;
  }
  
  @media (max-width: 600px) {
    .header-container {
      flex-wrap: wrap;
    }
  
    .navigation {
      order: 3;
      width: 100%;
      justify-content: center;
    }
  }
  </style>
  