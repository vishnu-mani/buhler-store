<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-1" v-for="(products, category) in productStore.groupedProducts" :key="category">
      <div class="font-bold">{{ productStore.getDisplayCategory(category) }}</div>
      <div class="flex flex-wrap gap-2.5">
          <ProductCard :product="product" @click="gotoProductDetails(product)" v-for="product in products"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useProductStore } from '@/stores/productStore'
import { useRouter } from 'vue-router';

defineOptions({ name: 'ProductList' })

const productStore = useProductStore()
const router = useRouter()

const gotoProductDetails = product => {
  router.push({name: 'product-details', params: {id: product.id}})
}
</script>