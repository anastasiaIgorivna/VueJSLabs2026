<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-info">
          <h3>NewsSpace</h3>
          <p>Актуальні новини щодня.</p>
        </div>
  
        <div class="footer-links">
          <RouterLink to="/">Головна</RouterLink>
          <RouterLink to="/about">Про нас</RouterLink>
        </div>
      </div>
  
      <div class="copyright">
        © 2026 NewsSpace. Усі права захищені.
      </div>
    </footer>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>
  .footer {
    background: #172554;
    color: #dbeafe;
    padding: 35px 40px 20px;
    margin-top: 60px;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  
  .footer-info h3 {
    color: white;
    font-size: 22px;
    margin: 0 0 8px;
  }
  
  .footer-info p {
    margin: 0;
    color: #bfdbfe;
  }
  
  .footer-links {
    display: flex;
    gap: 25px;
  }
  
  .footer-links a {
    color: #dbeafe;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: #60a5fa;
  }
  
  .copyright {
    max-width: 1200px;
    margin: 30px auto 0;
    padding-top: 18px;
    border-top: 1px solid #334155;
    text-align: center;
    font-size: 13px;
    color: #93a4bd;
  }
  
  @media (max-width: 600px) {
    .footer-container {
      flex-direction: column;
      text-align: center;
    }
  
    .footer-links {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  </style>
  