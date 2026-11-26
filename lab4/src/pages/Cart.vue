<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'

defineOptions({
  name: 'CartPage',
})

const { t } = useI18n()
const cartStore = useCartStore()

const { items, totalCount, totalPrice } = storeToRefs(cartStore)

const notification = ref('')

function formatPrice(price) {
  return price.toLocaleString('uk-UA')
}

function checkout() {
  if (items.value.length === 0) return

  cartStore.clear()
  notification.value = t('cart.orderSuccess')

  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main class="cart-page">
    <section class="cart-heading">
      <span class="eyebrow">YOUR SHOPPING BAG</span>
      <h1>{{ t('cart.title') }}</h1>
    </section>

    <div v-if="notification" class="success-message">
      <span>✓</span>
      {{ notification }}
    </div>

    <section v-if="items.length > 0" class="cart-content">
      <div class="cart-list">
        <article
          v-for="item in items"
          :key="item.id"
          class="cart-item"
        >
          <div class="item-placeholder">
            {{ item.title.charAt(0).toUpperCase() }}
          </div>

          <div class="item-details">
            <h3>{{ item.title }}</h3>
            <p>{{ formatPrice(item.price) }} {{ t('common.currency') }}</p>
          </div>

          <div class="item-quantity">
            {{ item.qty }} × {{ formatPrice(item.price) }}
          </div>

          <strong class="item-total">
            {{ formatPrice(item.price * item.qty) }}
            {{ t('common.currency') }}
          </strong>

          <button
            class="remove-button"
            @click="cartStore.remove(item.id)"
            :aria-label="t('common.remove')"
          >
            ×
          </button>
        </article>
      </div>

      <aside class="cart-summary">
        <h2>{{ t('cart.title') }}</h2>

        <div class="summary-row">
          <span>{{ t('cart.count') }}</span>
          <strong>{{ totalCount }}</strong>
        </div>

        <div class="summary-row total-row">
          <span>{{ t('cart.total') }}</span>
          <strong>
            {{ formatPrice(totalPrice) }} {{ t('common.currency') }}
          </strong>
        </div>

        <button class="checkout-button" @click="checkout">
          {{ t('cart.checkout') }}
        </button>

        <button class="clear-button" @click="cartStore.clear()">
          {{ t('common.clear') }}
        </button>
      </aside>
    </section>

    <section v-else class="empty-cart">
      <div class="empty-icon">🛍️</div>
      <h2>{{ t('cart.empty') }}</h2>
      <p>{{ t('cart.emptyHint') }}</p>

      <RouterLink to="/" class="catalog-button">
        {{ t('nav.catalog') }}
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.cart-page {
  max-width: 1150px;
  margin: 0 auto;
  padding: 55px 30px 80px;
}

.cart-heading {
  text-align: center;
  margin-bottom: 45px;
}

.eyebrow {
  color: #a18b75;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
}

.cart-heading h1 {
  margin-top: 15px;
  color: #352d27;
  font-family: Georgia, serif;
  font-size: 46px;
  font-weight: 400;
}

.success-message {
  max-width: 600px;
  margin: 0 auto 30px;
  padding: 18px 22px;
  border: 1px solid #c9dfca;
  border-radius: 12px;
  background: #edf6ed;
  color: #35643b;
  text-align: center;
  font-size: 14px;
}

.success-message span {
  margin-right: 8px;
  font-weight: 700;
}

.cart-content {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 35px;
  align-items: start;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px;
  border: 1px solid #eee8e1;
  border-radius: 13px;
  background: white;
}

.item-placeholder {
  width: 65px;
  height: 65px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: #eee7df;
  color: #66564a;
  font-family: Georgia, serif;
  font-size: 28px;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  margin-bottom: 7px;
  color: #352d27;
  font-size: 15px;
}

.item-details p,
.item-quantity {
  color: #92877d;
  font-size: 13px;
}

.item-total {
  white-space: nowrap;
  color: #352d27;
  font-size: 14px;
}

.remove-button {
  border: none;
  background: transparent;
  color: #a18b75;
  font-size: 25px;
  cursor: pointer;
}

.cart-summary {
  padding: 28px;
  border-radius: 15px;
  background: #f5f0ea;
}

.cart-summary h2 {
  margin-bottom: 25px;
  color: #352d27;
  font-family: Georgia, serif;
  font-size: 25px;
  font-weight: 400;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  color: #81766d;
  font-size: 14px;
}

.summary-row strong {
  color: #352d27;
}

.total-row {
  padding-top: 20px;
  border-top: 1px solid #ded5cb;
  font-size: 15px;
}

.checkout-button,
.clear-button,
.catalog-button {
  display: block;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 30px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
}

.checkout-button {
  background: #51463d;
  color: white;
  transition: background 0.2s, transform 0.2s;
}

.checkout-button:hover {
  background: #756253;
  transform: translateY(-2px);
}

.clear-button {
  margin-top: 12px;
  background: transparent;
  color: #76685d;
}

.empty-cart {
  padding: 70px 20px;
  text-align: center;
}

.empty-icon {
  margin-bottom: 20px;
  font-size: 65px;
}

.empty-cart h2 {
  color: #352d27;
  font-family: Georgia, serif;
  font-size: 28px;
  font-weight: 400;
}

.empty-cart p {
  margin: 15px 0 25px;
  color: #8b8178;
}

.catalog-button {
  width: fit-content;
  margin: 0 auto;
  padding: 13px 28px;
  background: #51463d;
  color: white;
  text-decoration: none;
}

@media (max-width: 800px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 550px) {
  .cart-page {
    padding: 35px 15px;
  }

  .cart-item {
    flex-wrap: wrap;
  }

  .item-total {
    margin-left: auto;
  }
}
</style>

