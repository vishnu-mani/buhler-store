<template>
    <div class="flex flex-col gap-10">
        <div class="font-bold text-[1.2em]">Checkout</div>
        <div class="flex flex-col gap-2.5">
            <CartItem :product="product" v-for="product in productStore.cart" :key="product.id" />
        </div>
        <div class="">
            <div class="text-right font-bold">Total: {{ formatPrice(totalAmount) }} </div>
        </div>
    </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import { useProductStore } from '@/stores/productStore'
import { computed } from 'vue';
import { formatPrice } from '@/utils/commonUtil';

const productStore = useProductStore()

const totalAmount = computed(() => productStore.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0))
</script>