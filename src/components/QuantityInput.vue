<template>
  <div class="flex items-center gap-2 border h-7">
    <button class="size-7 cursor-pointer text-lg border-r leading-7" @click="decrease"
      :disabled="quantity <= min">-</button>
    <span>{{ quantity }}</span>
    <button class="size-7 cursor-pointer text-lg border-l leading-7" @click="increase"
      :disabled="quantity >= max">+</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  min: { type: Number, default: 1 },
  max: { type: Number, default: Infinity }
})

const emit = defineEmits(['update:modelValue'])

const quantity = ref(props.modelValue);

watch(() => quantity.value,
  (newValue) => {
    emit('update:modelValue', newValue)
  }, { immediate: true })

const increase = () => {
  if (quantity.value < props.max) {
    quantity.value += 1
  }
}

const decrease = () => {
  if (quantity.value > props.min) {
    quantity.value -= 1
  }
}
</script>