<template>
  <div
    class="bg-white rounded-2xl shadow p-4 transition hover:shadow-lg hover:-translate-y-1"
  >
    <router-link :to="`/product/${product.id}`">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-48 object-contain mb-4"
      />
      <h2 class="text-base font-semibold text-gray-700 mb-2 md:h-20">
        {{ product.name }}
      </h2>
      <p class="text-red-500 font-bold text-lg">{{ product.price }} تومان</p>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
