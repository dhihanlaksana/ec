import { createRouter, createWebHistory } from 'vue-router'
import { LayoutType } from './layouts'
import authenticate from './middleware/authenticate'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/index.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home/index.vue'),
      meta: {
        layout: LayoutType.ProtectedLayout,
      },
    },
    {
      path: '/order',
      name: 'Pesanan',
      component: () => import('@/pages/order/index.vue'),
      meta: {
        layout: LayoutType.ProtectedLayout,
      },
    },
    {
      path: '/checkout-link',
      name: 'Link Checkout',
      component: () => import('@/pages/checkout-link/index.vue'),
      meta: {
        layout: LayoutType.ProtectedLayout,
      },
    },
    {
      path: '/create-link',
      name: 'Create Link',
      component: () => import('@/pages/create-link/index.vue'),
      meta: {
        layout: LayoutType.ProtectedLayout,
      },
    },
  ],
})

// register authenticate middleware
router.beforeEach(authenticate)

export default router
