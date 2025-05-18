<template>
  <main
    class="min-h-screen w-full flex flex-col items-center bg-gray-100 font-vazir"
    dir="rtl"
  >
    <header class="text-red-600 text-3xl font-bold my-6">
      <router-link to="/">دیجی‌کالا</router-link>
    </header>

    <div class="w-full max-w-4xl">
      <router-view />
    </div>

    <footer
      class="w-full max-w-4xl bg-white rounded-t-2xl mt-4 py-8 text-center"
    >
      <h4 class="text-lg mb-2">
        فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین
      </h4>
      <router-link to="/about" class="text-blue-500">درباره ما</router-link>
    </footer>
  </main>
</template>
