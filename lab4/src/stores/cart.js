import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalCount: (state) =>
      state.items.reduce((sum, item) => sum + item.qty, 0),

    totalPrice: (state) =>
      state.items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0,
      ),
  },

  actions: {
    add(product) {
      const existingItem = this.items.find(
        (item) => item.id === product.id,
      )

      if (existingItem) {
        existingItem.qty += 1
      } else {
        this.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1,
        })
      }
    },

    remove(productId) {
      this.items = this.items.filter(
        (item) => item.id !== productId,
      )
    },

    clear() {
      this.items = []
    },
  },

  persist: {
    key: 'greenbloom-cart',
  },
})
