<template>
    <section class="partner-promo">
      <div class="promo-label">
        <span>ПАРТНЕРСЬКА ПРОПОЗИЦІЯ</span>
        <span class="promo-tag">РЕКЛАМА</span>
      </div>
  
      <div class="promo-content">
        <div class="promo-info">
          <span class="promo-category">{{ promo.category }}</span>
  
          <h2>{{ promo.title }}</h2>
  
          <p>{{ promo.description }}</p>
  
          <button class="promo-button" @click="showAd = true">
            Дізнатися більше <span>→</span>
          </button>
        </div>
  
        <div class="promo-visual">
          <div class="visual-circle"></div>
          <div class="tech-card">
            <span class="tech-icon">{{ promo.icon }}</span>
            <strong>{{ promo.brand }}</strong>
            <span>{{ promo.subtitle }}</span>
            <small>{{ promo.slogan }}</small>
          </div>
        </div>
      </div>
  
      <Transition name="modal">
        <div
          v-if="showAd"
          class="promo-overlay"
          @click.self="showAd = false"
        >
          <div class="promo-modal">
            <button
              class="close-button"
              @click="showAd = false"
              aria-label="Закрити"
            >
              ×
            </button>
  
            <span class="modal-label">{{ promo.brand }}</span>
  
            <h2>{{ promo.modalTitle }}</h2>
  
            <p>{{ promo.modalDescription }}</p>
  
            <p class="modal-note">
              Це демонстраційна рекламна пропозиція,
              створена для навчального проєкту.
            </p>
  
            <button
              class="modal-button"
              @click="showAd = false"
            >
              Зрозуміло
            </button>
          </div>
        </div>
      </Transition>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'tech'
    }
  })
  
  const showAd = ref(false)
  
  const promo = computed(() => {
    if (props.variant === 'education') {
      return {
        category: 'LEARNING & DEVELOPMENT',
        title: 'Розвивай навички та відкривай нові можливості!',
        description:
          'Онлайн-курси, практичні заняття та корисні матеріали для тих, хто прагне розвиватися у цифровому світі.',
        icon: '✧',
        brand: 'DIGITAL',
        subtitle: 'EDUCATION',
        slogan: 'LEARN SOMETHING NEW',
        modalTitle: 'Навчання відкриває нові горизонти!',
        modalDescription:
          'DIGITAL EDUCATION — умовний освітній проєкт із навчальними матеріалами, онлайн-курсами та цифровими навичками.'
      }
    }
  
    return {
      category: 'TECHNOLOGY & INNOVATION',
      title: 'Відкривай світ сучасних технологій!',
      description:
        'Нові гаджети, корисні застосунки та цікаві технологічні рішення. Усе найцікавіше в одному місці.',
      icon: '✦',
      brand: 'TECH',
      subtitle: 'WORLD',
      slogan: 'FUTURE STARTS HERE',
      modalTitle: 'Технології відкривають нові можливості!',
      modalDescription:
        'TECH WORLD — умовний партнерський проєкт про сучасні гаджети, цифрові інструменти та інновації.'
    }
  })
  </script>
  
  <style scoped>
  .partner-promo {
    position: relative;
    overflow: hidden;
    margin: 45px 0;
    padding: 25px 35px 30px;
    border-radius: 20px;
    background: linear-gradient(120deg, #172554, #1e40af, #2563eb);
    color: white;
    box-shadow: 0 12px 30px rgba(30, 64, 175, 0.2);
  }
  
  .promo-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.5px;
  }
  
  .promo-tag {
    padding: 6px 12px;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 20px;
    font-size: 10px;
  }
  
  .promo-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  
  .promo-info {
    max-width: 570px;
    position: relative;
    z-index: 1;
  }
  
  .promo-category {
    color: #bfdbfe;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
  }
  
  .promo-info h2 {
    margin: 14px 0;
    font-size: clamp(24px, 3vw, 34px);
    line-height: 1.2;
  }
  
  .promo-info p {
    max-width: 500px;
    color: #dbeafe;
    font-size: 15px;
    line-height: 1.7;
  }
  
  .promo-button {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    margin-top: 23px;
    padding: 13px 22px;
    border: none;
    border-radius: 9px;
    background: white;
    color: #1d4ed8;
    font-weight: 800;
    cursor: pointer;
    transition: 0.25s;
  }
  
  .promo-button:hover {
    background: #dbeafe;
    transform: translateY(-3px);
  }
  
  .promo-button span {
    font-size: 20px;
  }
  
  .promo-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 210px;
    height: 190px;
  }
  
  .visual-circle {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgba(147, 197, 253, 0.2);
    border: 1px solid rgba(255,255,255,0.3);
  }
  
  .tech-card {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 160px;
    border: 1px solid rgba(255,255,255,0.35);
    border-radius: 16px;
    background: rgba(255,255,255,0.13);
    backdrop-filter: blur(10px);
    transform: rotate(5deg);
  }
  
  .tech-icon {
    color: #bfdbfe;
    font-size: 35px;
  }
  
  .tech-card strong {
    font-size: 25px;
    letter-spacing: 3px;
  }
  
  .tech-card > span:not(.tech-icon) {
    font-size: 14px;
    letter-spacing: 3px;
  }
  
  .tech-card small {
    margin-top: 12px;
    color: #bfdbfe;
    font-size: 7px;
    letter-spacing: 1px;
  }
  
  .promo-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(15, 23, 42, 0.75);
  }
  
  .promo-modal {
    position: relative;
    width: 100%;
    max-width: 520px;
    padding: 45px;
    border-radius: 20px;
    background: var(--card-color, white);
    color: var(--text-color, #1e293b);
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  }
  
  .close-button {
    position: absolute;
    top: 15px;
    right: 20px;
    border: none;
    background: none;
    color: var(--muted-color, #64748b);
    font-size: 30px;
    cursor: pointer;
  }
  
  .modal-label {
    color: #2563eb;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 2px;
  }
  
  .promo-modal h2 {
    margin: 18px 0 12px;
    font-size: 27px;
  }
  
  .promo-modal p {
    color: var(--muted-color, #64748b);
    line-height: 1.7;
  }
  
  .promo-modal .modal-note {
    margin-top: 15px;
    font-size: 12px;
  }
  
  .modal-button {
    margin-top: 20px;
    padding: 13px 25px;
    border: none;
    border-radius: 9px;
    background: #2563eb;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
  
  .modal-button:hover {
    background: #1d4ed8;
  }
  
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.25s ease;
  }
  
  .modal-enter-active .promo-modal,
  .modal-leave-active .promo-modal {
    transition: transform 0.25s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  
  .modal-enter-from .promo-modal,
  .modal-leave-to .promo-modal {
    transform: translateY(20px) scale(0.97);
  }
  
  @media (max-width: 650px) {
    .partner-promo {
      padding: 22px;
    }
  
    .promo-content {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .promo-visual {
      align-self: center;
    }
  
    .promo-modal {
      padding: 35px 25px;
    }
  }
  </style>
  
  