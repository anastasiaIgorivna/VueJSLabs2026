<template>
    <section class="about-page">
      <div class="about-container">
        <div class="about-hero">
          <span class="subtitle">ЛАСКАВО ПРОСИМО ДО NEWSSPACE</span>
          <h1>Новини, які допомагають розуміти світ</h1>
          <p>
            NewsSpace — це навчальний проєкт новинного вебсайту,
            створений для зручного перегляду актуальних матеріалів
            та знайомства з важливими подіями.
          </p>
        </div>
  
        <div class="about-grid">
          <article class="info-card">
            <div class="icon">📰</div>
            <h2>Наша мета</h2>
            <p>
              Представляти новини у зрозумілому форматі,
              щоб читачі могли швидко знаходити потрібну інформацію.
            </p>
          </article>
  
          <article class="info-card">
            <div class="icon">💡</div>
            <h2>Наш підхід</h2>
            <p>
              Ми прагнемо зробити сайт простим у використанні,
              сучасним за дизайном та зручним на різних пристроях.
            </p>
          </article>
  
          <article class="info-card">
            <div class="icon">🌐</div>
            <h2>Наші можливості</h2>
            <p>
              Перегляд новин, відкриття окремих статей,
              навігація між сторінками та вибір теми оформлення.
            </p>
          </article>
        </div>
  
        <AdSlot variant="education" />
      </div>
    </section>
  </template>
  
  <script setup>
  import AdSlot from '../components/AdSlot.vue'
  </script>
  
  <style scoped>
  .about-page {
    min-height: 100%;
    padding: 60px 5%;
    background: var(--bg-color);
    color: var(--text-color);
  }
  
  .about-container {
    max-width: 1100px;
    margin: 0 auto;
  }
  
  .about-hero {
    max-width: 750px;
    margin: 0 auto 55px;
    text-align: center;
  }
  
  .subtitle {
    color: var(--accent-color);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
  }
  
  .about-hero h1 {
    margin: 18px 0;
    font-size: clamp(30px, 5vw, 46px);
    line-height: 1.2;
  }
  
  .about-hero p {
    color: var(--muted-color);
    font-size: 17px;
    line-height: 1.8;
  }
  
  .about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    margin-bottom: 45px;
  }
  
  .info-card {
    padding: 28px;
    background: var(--card-color);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }
  
  .icon {
    font-size: 32px;
    margin-bottom: 18px;
  }
  
  .info-card h2 {
    margin-bottom: 12px;
    font-size: 20px;
  }
  
  .info-card p {
    color: var(--muted-color);
    line-height: 1.7;
  }
  
  @media (max-width: 750px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
  