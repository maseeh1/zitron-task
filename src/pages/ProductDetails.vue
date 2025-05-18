<template>
  <div class="w-full max-w-4xl mx-auto">
    <router-link to="/" class="text-blue-500 mb-4 inline-block"
      >← بازگشت به محصولات</router-link
    >

    <div v-if="product" class="bg-white p-6 rounded-xl shadow">
      <div class="flex flex-col md:flex-row gap-6">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full md:w-1/3 h-auto object-contain"
        />
        <div class="flex-1">
          <h1 class="text-2xl font-bold text-gray-800 mb-2">
            {{ product.name }}
          </h1>
          <p class="text-red-500 text-xl font-semibold mb-4">
            {{ product.price }} تومان
          </p>
          <div class="flex gap-4 mb-4 mt-6">
            <RouterLink
              :to="`/product/${product.id}`"
              class="pb-2 px-2"
              :class="{
                'border-b-2 border-red-500 text-red-500': isDescription,
              }"
            >
              معرفی محصول
            </RouterLink>
            <RouterLink
              :to="`/product/${product.id}/comments`"
              class="pb-2 px-2"
              :class="{ 'border-b-2 border-red-500 text-red-500': isComments }"
            >
              کامنت‌ها
            </RouterLink>
          </div>

          <router-view
            :description="product.description"
            :comments="product.comments"
          />
        </div>
      </div>
    </div>

    <div v-else class="text-center text-2xl py-10 text-gray-600">
      محصول مورد نظر پیدا نشد.
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import products from "../assets/product_data.json";

const route = useRoute();
const productId = route.params.id;

// find the product based on the route param
const product = products.find((p) => p.id === productId);

// isComment and isDescription booleans for the active tab
const isComments = computed(() => route.path.endsWith("/comments"));
const isDescription = computed(() => !isComments.value);
</script>
