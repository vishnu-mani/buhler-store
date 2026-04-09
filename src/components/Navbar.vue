<template>
    <header class="flex items-center justify-between px-10 gap-2 h-12 bg-[#F3F3F3] border-b border-[#009B91]">
        <div class="flex items-center">
            <img alt="Buhler logo" src="@/assets/logo.svg" width="150" height="30" />
        </div>
        <div class="flex items-center">
            {{ dateTime }}
        </div>
        <router-link :to="{name: 'cart'}">
            <div class="flex items-center gap-1">
                <Icon name="cart" />
                Cart ({{ itemsCount }})
            </div>
        </router-link>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { formatDateTime } from '@/utils/commonUtil'

const productStore = useProductStore()
const dateTime = ref('')

function updateDateTime() {
  dateTime.value = formatDateTime(new Date())
}

const itemsCount = computed(() => productStore.cart.reduce((count, product) => count + product.quantity, 0))


let intervalId = null
onMounted(() => {
  updateDateTime()
  intervalId = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

</script>