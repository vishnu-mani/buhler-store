<template>
  <div class="flex flex-col overflow-hidden h-dvh">
    <Navbar />
    <div class="py-5 px-10 overflow-auto flex-1">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['ProductList', 'ProductDetail']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
</script>