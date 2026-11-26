<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '../stores/cart'

defineOptions({
  name: 'CatalogPage',
})

const { t, locale } = useI18n()
const cartStore = useCartStore()

const searchQuery = ref('')
const activeCategory = ref('all')
const notification = ref('')

const products = [
  {
    id: 1,
    titleUa: 'Базова футболка',
    titleEn: 'Basic T-shirt',
    category: 'clothing',
    price: 650,
    emoji: '👕',
    color: '#f2e7dc',
  },
  {
    id: 2,
    titleUa: 'Класична сумка',
    titleEn: 'Classic Bag',
    category: 'accessories',
    price: 1250,
    emoji: '👜',
    color: '#e9dfd2',
  },
  {
    id: 3,
    titleUa: 'Кросівки Urban',
    titleEn: 'Urban Sneakers',
    category: 'shoes',
    price: 1890,
    emoji: '👟',
    color: '#e8e8e4',
  },
  {
    id: 4,
    titleUa: 'Теплий светр',
    titleEn: 'Warm Sweater',
    category: 'clothing',
    price: 1450,
    emoji: '🧶',
    color: '#e8ddd4',
  },
  {
    id: 5,
    titleUa: 'Сонцезахисні окуляри',
    titleEn: 'Sunglasses',
    category: 'accessories',
    price: 890,
    emoji: '🕶️',
    color: '#e5e3db',
  },
  {
    id: 6,
    titleUa: 'Міські кеди',
    titleEn: 'City Sneakers',
    category: 'shoes',
    price: 1590,
    emoji: '👟',
    color: '#eee3dc',
  },
]

const categories = ['all', 'clothing', 'accessories', 'shoes']

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const title =
      locale.value === 'ua' ? product.titleUa : product.titleEn

    const matchesCategory =
      activeCategory.value === 'all' ||
      product.category === activeCategory.value

    const matchesSearch = title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())

    return matchesCategory && matchesSearch
  })
})

function addToCart(product) {
  const title =
    locale.value === 'ua' ? product.titleUa : product.titleEn

  cartStore.add({
    id: product.id,
    title,
    price: product.price,
  })

  notification.value = t('catalog.added')

  setTimeout(() => {
    notification.value = ''
  }, 2500)
}
</script>

<template>
  <main class="catalog-page">
    <section class="catalog-heading">
      <span class="eyebrow">LUMIÈRE COLLECTION</span>

      <h1>{{ t('catalog.title') }}</h1>

      <p>{{ t('catalog.subtitle') }}</p>
    </section>

    <section class="catalog-controls">
      <div class="categories">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: activeCategory === category }"
          @click="activeCategory = category"
        >
          {{ t(`catalog.${category}`) }}
        </button>
      </div>

      <input
        v-model="searchQuery"
        type="search"
        :placeholder="t('catalog.search')"
        class="search-input"
      />
    </section>

    <div v-if="notification" class="notification">
      {{ notification }}
    </div>

    <section class="products-grid">
      <article
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
      >
        <div
          class="product-image"
          :style="{ backgroundColor: product.color }"
        >
          <span>{{ product.emoji }}</span>
          <span class="product-number">
            № {{ String(product.id).padStart(2, '0') }}
          </span>
        </div>

        <div class="product-info">
          <span class="product-category">
            {{ t(`catalog.${product.category}`) }}
          </span>

          <h3>
            {{ locale === 'ua' ? product.titleUa : product.titleEn }}
          </h3>

          <div class="product-bottom">
            <strong>
              {{ product.price.toLocaleString('uk-UA') }}
              {{ t('common.currency') }}
            </strong>

            <button
              class="add-button"
              :aria-label="t('common.add')"
              @click="addToCart(product)"
            >
              +
            </button>
          </div>
        </div>
      </article>
    </section>

    <div v-if="filteredProducts.length === 0" class="empty-products">
      {{ t('catalog.empty') }}
    </div>
  </main>
</template>

<style scoped>
.catalog-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 55px 30px 80px;
}

.catalog-heading {
  text-align: center;
  margin-bottom: 45px;
}

.eyebrow {
  color: #a18b75;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
}

.catalog-heading h1 {
  margin: 15px 0 12px;
  font-family: Georgia, serif;
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 400;
  color: #352d27;
}

.catalog-heading p {
  color: #8b8178;
  font-size: 15px;
}

.catalog-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 35px;
  flex-wrap: wrap;
}

.categories {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.categories button {
  padding: 10px 18px;
  border: 1px solid #e8dfd6;
  border-radius: 30px;
  background: white;
  color: #71665d;
  cursor: pointer;
  transition: 0.2s;
}

.categories button:hover,
.categories button.active {
  background: #51463d;
  color: white;
  border-color: #51463d;
}

.search-input {
  width: 230px;
  padding: 12px 16px;
  border: 1px solid #e8dfd6;
  border-radius: 30px;
  outline: none;
  background: #fff;
}

.search-input:focus {
  border-color: #a18b75;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.product-card {
  overflow: hidden;
  border-radius: 15px;
  background: white;
  border: 1px solid #eee8e1;
  transition: transform 0.25s, box-shadow 0.25s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(70, 55, 40, 0.09);
}

.product-image {
  position: relative;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image > span:first-child {
  font-size: 95px;
  transition: transform 0.3s;
}

.product-card:hover .product-image > span:first-child {
  transform: scale(1.1);
}

.product-number {
  position: absolute;
  bottom: 14px;
  left: 17px;
  font-size: 10px;
  letter-spacing: 2px;
  color: #81776e;
}

.product-info {
  padding: 20px;
}

.product-category {
  color: #a18b75;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.product-info h3 {
  margin: 10px 0 20px;
  color: #352d27;
  font-size: 17px;
  font-weight: 500;
}

.product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-bottom strong {
  color: #352d27;
  font-size: 17px;
}

.add-button {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: #51463d;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;
}

.add-button:hover {
  background: #a18b75;
  transform: rotate(90deg);
}

.notification {
  margin-bottom: 20px;
  padding: 14px 20px;
  border-radius: 10px;
  background: #e9eee5;
  color: #53664c;
}

.empty-products {
  padding: 50px;
  text-align: center;
  color: #8b8178;
}

@media (max-width: 850px) {
  .products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 550px) {
  .catalog-page {
    padding: 35px 16px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .search-input {
    width: 100%;
  }
}
</style>
