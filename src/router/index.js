import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '@/views/ProductsList.vue'
import productsData from '@/data/products.json'

const productIds = new Set(productsData.map(p => String(p.id)))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsList
    },
    {
      path: '/products/:id(\\d+)',
      name: 'product-details',
      component: () => import('@/views/ProductDetails.vue'),
      beforeEnter: (to, from, next) => {
        productIds.has(to.params.id) ? next() : next({ name: 'page-not-found' })
      }
    },
    {
      path: '/checkout',
      name: 'cart',
      component: () => import('@/views/Cart.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: () => import('@/views/PageNotFound.vue')
    }
  ],
})

export default router
