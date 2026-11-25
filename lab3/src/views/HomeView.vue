<template>
    <div class="home">
      <section class="hero">
        <span class="hero-label">NEWS SPACE</span>
        <h1>Світ новин — завжди поруч</h1>
        <p>
          Найважливіші події, технології та ідеї
          в одному інформаційному просторі.
        </p>
      </section>
  
      <section class="news-section">
        <div class="section-heading">
          <div>
            <span class="section-label">БУДЬ У КУРСІ</span>
            <h2>Останні новини</h2>
          </div>
          <span class="news-count">{{ news.length }} новини</span>
        </div>
  
        <div class="news-grid">
          <NewsCard
            v-for="article in news"
            :key="article.id"
            :article="article"
          />
        </div>
      </section>
  
      <AdSlot />
    </div>
  </template>
  
  <script setup>
  import { news } from '../data/news'
  import NewsCard from '../components/NewsCard.vue'
  import AdSlot from '../components/AdSlot.vue'
  </script>
  
  <style scoped>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 35px 25px 50px;
  }
  
  .hero {
    background: linear-gradient(120deg, #172554, #2563eb);
    color: white;
    padding: 65px 55px;
    border-radius: 20px;
    margin-bottom: 55px;
  }
  
  .hero-label,
  .section-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #93c5fd;
  }
  
  .hero h1 {
    font-size: clamp(30px, 5vw, 46px);
    margin: 18px 0;
  }
  
  .hero p {
    max-width: 550px;
    color: #dbeafe;
    font-size: 17px;
    line-height: 1.7;
  }
  
  .section-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 28px;
  }
  
  .section-heading h2 {
    font-size: 30px;
    color: var(--text-color, #172554);
    margin: 8px 0 0;
  }
  
  .section-label {
    color: #2563eb;
  }
  
  .news-count {
    color: var(--muted-color, #64748b);
    font-size: 14px;
  }
  
  .news-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }
  
  @media (max-width: 700px) {
    .hero {
      padding: 40px 25px;
    }
  
    .news-grid {
      grid-template-columns: 1fr;
    }
  
    .section-heading {
      align-items: start;
      gap: 10px;
    }
  }
  </style>
  
  