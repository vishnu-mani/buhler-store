<template>
    <div class="flex flex-col gap-12.5">
        <!-- <router-link :to="{name: 'products'}">Back</router-link> -->
        <a @click="router.back()" class="cursor-pointer">Back</a>
        <div class="flex items-center gap-10" v-if="product">
            <div class="size-64">
                <img :src="product.imageUrl" :alt="product.name" loading="lazy" class="object-cover h-full" />
            </div>
            <div class="flex flex-col h-64 py-2.5 gap-5">
                <div class="font-bold text-[1.2em]">{{ product.name }}</div>
                <div class="italic">{{ product.displayCategory }}</div>
                <div class="">{{ formatPrice(product.price) }}</div>
                <div class="" v-if="productCountInCart">{{ productCountInCart }} {{product.name}} in the cart</div>
                <select v-model="quantity" class="border rounded">
                    <option value="">Select Quantity</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
                <a class="flex gap-1 mt-auto cursor-pointer" @click="addToCart">
                    <Icon name="cart" />
                    Add to Cart
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { formatPrice } from '@/utils/commonUtil';

defineOptions({ name: 'ProductDetail' })

const route = useRoute()
const router = useRouter()
const productStore = useProductStore();
const product = computed(() => productStore.getProductById(route.params.id))
const productCountInCart = computed(() => productStore.getProductQuantityInCart(product.value.id))

const quantity = ref()
const addToCart = () => {
    productStore.addToCart(product.value, quantity.value ?? 1)
    quantity.value = null;
}
</script>