<template>
    <div class="flex flex-col border-2 border-[#DADADA] h-75 w-50 shrink-0 hover:border-[#009B91] cursor-pointer">
        <div class="p-2.5 bg-[#F3F3F3] h-full">
            <img :src="product.imageUrl" :alt="product.name" loading="lazy" class="h-full object-cover" />
        </div>
        <div class="flex flex-col justify-between bg-[#DADADA] text-[#009B91] text-[12px] px-5 py-1 h-18 shrink-0">
            <div class="font-bold">{{ product.name }}</div>
            <div class="flex items-center justify-between">
                <div class="font-bold">{{ productCountInCart }} {{ formatPrice(product.price) }}</div>
                <a @click.stop="addToCart" class="">
                    <Icon name="cart"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import { formatPrice } from '@/utils/commonUtil';
import { computed } from 'vue';

const props = defineProps({
    product: {
        type: Object,
        default: () => {}
    }
})

const productStore = useProductStore()
const addToCart = () => {
    productStore.addToCart(props.product)
}
const productCountInCart = computed(() => productStore.getProductQuantityInCart(product.value.id))
</script>