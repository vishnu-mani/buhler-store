<template>
    <div>
        <div class="flex items-center justify-between">
            <div class="flex gap-5">
                <div class="size-25">
                    <img :src="product.imageUrl" :alt="product.name" loading="eager" class="object-cover h-full" />
                </div>
                <div class="flex flex-col items-start justify-center">
                    <div class="font-bold">{{ product.name }}</div>
                    <div class="text-[12px] italic">{{ product.displayCategory }}</div>
                </div>
            </div>
            <div class="flex items-center justify-between gap-10">
                <div class="">{{ formatPrice(product.price) }}</div>
                <div class="">
                    <QuantityInput v-model="quantity"/>
                </div>
                <a @click="removeProductFromCart" class="cursor-pointer">
                    <Icon name="close" :size="15" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import QuantityInput from '@/components/QuantityInput.vue';
import { formatPrice } from '@/utils/commonUtil';
import { ref, watch } from 'vue';

const props = defineProps({
    product: {
        type: Object,
        default: () => {}
    }
})
const quantity = ref(props.product.quantity)
const productStore = useProductStore()

const removeProductFromCart = () => {
    productStore.removeProductFromCart(props.product.id)
}

watch(quantity, (newQty) => {
    productStore.setCartQuantity(props.product.id, newQty)
})
</script>