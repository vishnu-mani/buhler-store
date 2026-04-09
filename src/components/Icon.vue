<template>
  <svg 
    v-if="iconContent"
    v-html="iconContent"
    :width="size"
    :height="size"
    fill="currentColor"
    class="icon">
  </svg>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 20
  }
})

const iconContent = ref(null)

watchEffect(async () => {
  try {
    const svgModule = await import(`@/assets/icons/${props.name}.svg?raw`)
    iconContent.value = svgModule.default
  } catch {
    console.warn(`Icon "${props.name}" not found`)
    iconContent.value = null
  }
})
</script>