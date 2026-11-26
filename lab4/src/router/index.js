import { createRouter, createWebHistory } from 'vue-router'

import Catalog from '../pages/Catalog.vue'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/Cart.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/Profile.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

