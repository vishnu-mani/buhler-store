import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import productsData from '@/data/products.json'

export const useProductStore = defineStore('product-store', () => {
  const categoryNames = {
    machine_roller: "Rollers",
    machine_sorter: "Optical Sorters",
    machine_dryer: "Dryers",
    machine_die_casting: "Die Casting Machines"
  };

  const products = ref(
    productsData.map(product => ({
        ...product,
        id: Number(product.id),
        displayCategory: categoryNames[product.category] || p.category
    }))
  )

  const getDisplayCategory = category => categoryNames[category] || category;

  const groupedProducts = computed(() => {
    return products.value.reduce((acc, product) => {
      const category = product.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(product)
      return acc
    }, {})
  })

  const getProductById = id => {
    return products.value.find(product => Number(product.id) === Number(id))
  }

  // Cart
  const cart = ref([])

  const addToCart = product => {
    const existing = cart.value.find(item => item.id === product.id)
    if (existing) {
        existing.quantity += 1
    } else {
        cart.value.push({ ...product, quantity: 1 })
    }
  }
  const removeItemFromCart = id => {
    const item = cart.value.find(item => item.id === id)
    if (item && item.quantity > 1) {
        item.quantity -= 1
    } else {
        cart.value = cart.value.filter(item => item.id !== id)
    }
  }
  const removeProductFromCart = id => {
    cart.value = cart.value.filter(product => product.id !== id)
  }

  const setCartQuantity = (productId, quantity) => {
    const item = cart.value.find(product => product.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  return {
    products,
    groupedProducts,
    getDisplayCategory,
    getProductById,
    
    cart,
    addToCart,
    removeProductFromCart,
    removeItemFromCart,
    setCartQuantity
  }
})
