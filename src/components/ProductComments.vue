<template>
  <div class="p-2" id="comments">
    <div class="pr-2 space-y-2" v-if="comments?.length">
      <div
        class="bg-gray-100 px-2 py-4 rounded-lg"
        v-for="(comment, i) in comments"
        :key="i"
      >
        {{ comment }}
      </div>
    </div>
    <div v-else>کامنتی ثبت نشده است.</div>
  </div>
</template>

<script setup>
defineProps(["comments"]);
</script>
