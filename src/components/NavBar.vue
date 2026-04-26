<template>
<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<nav class="relative bg-gray-800/50 border-b border-white/10">

  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div class="flex h-16 items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center gap-3">

        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="logo"
          class="h-8 w-auto"
        />

        <div class="text-white font-semibold text-lg tracking-wide">
          CRUD System
        </div>

      </div>

      <!-- Links -->
      <div class="hidden sm:flex items-center gap-2">

        <router-link
          to="/products"
          exact-active-class="bg-indigo-600 text-white"
          class="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
        >
          Products
        </router-link>

        <router-link
          to="/addProduct"
          exact-active-class="bg-indigo-600 text-white"
          class="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
        >
          Add Product
        </router-link>

        <button class="btn btn-error btn-sm" @click="logout">
          Log out
      </button>

      </div>

    </div>

  </div>

</nav>

</template>

<script>
    export default {
        name:"NavBar",
        methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
    }
</script>

<style scoped>

</style>