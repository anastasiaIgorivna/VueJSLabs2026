<template>
    <div class="article-page" v-if="article">
      <RouterLink to="/" class="back-link">
        ← Повернутися до новин
      </RouterLink>
  
      <article class="article">
        <span class="category">{{ article.category }}</span>
  
        <h1>{{ article.title }}</h1>
  
        <p class="date">{{ article.date }}</p>
  
        <img
          :src="article.image"
          :alt="article.title"
          class="article-image"
        />
  
        <div class="article-content">
          {{ article.content }}
        </div>
      </article>
  
      <AdSlot />
    </div>
  
    <div v-else class="not-found">
      <h2>Новину не знайдено</h2>
      <RouterLink to="/">Повернутися на головну</RouterLink>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute, RouterLink } from 'vue-router'
  import { news } from '../data/news'
  import AdSlot from '../components/AdSlot.vue'
  
  const route = useRoute()
  
  const article = computed(() =>
    news.find(item => item.id === Number(route.params.id))
  )
  </script>
  
  <style scoped>
  .article-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 25px;
  }
  
  .back-link {
    display: inline-block;
    color: #2563eb;
    text-decoration: none;
    margin-bottom: 30px;
    font-weight: 600;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  
  .article {
    background: var(--card-bg, white);
    padding: 35px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }
  
  .category {
    color: #2563eb;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
  }
  
  .article h1 {
    color: var(--text-color, #172554);
    font-size: 34px;
    line-height: 1.3;
    margin: 15px 0;
  }
  
  .date {
    color: var(--muted-color, #64748b);
    margin-bottom: 25px;
  }
  
  .article-image {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 12px;
  }
  
  .article-content {
    color: var(--text-color, #334155);
    font-size: 17px;
    line-height: 1.9;
    white-space: pre-line;
    margin-top: 25px;
  }
  
  .not-found {
    text-align: center;
    padding: 80px 20px;
  }
  
  .not-found a {
    color: #2563eb;
  }
  
  @media (max-width: 600px) {
    .article {
      padding: 20px;
    }
  
    .article h1 {
      font-size: 26px;
    }
  }
  </style>
  
  