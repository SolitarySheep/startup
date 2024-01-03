<template>
  <div class="min-h-screen bg-neutral-100">
    <nav class="bg-neutral-200 py-8 mb-10 shadow-xl">
      <div
        class="container mx-auto flex items-center justify-between text-neutral-600"
      >
        <NuxtLink
          to="/"
          class="text-3xl font-bold text-neutral-500 hidden md:block"
          >Startup hamsters</NuxtLink
        >

        <div class="lg:hidden">
          <button
            @click="toggleMenu"
            class="text-neutral-500 focus:outline-none focus:text-neutral-700"
          >
            <svg
              class="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          :class="{ 'md:flex': isMenuOpen, hidden: !isMenuOpen }"
          class="lg:flex lg:space-x-4 text-6xl md:text-2xl"
        >
          <NuxtLink
            to="/produit"
            class="hover:text-neutral-500 block lg:inline-block pt-6 md:pt-0"
            >Produits</NuxtLink
          >
          <NuxtLink
            to="/hamster"
            class="hover:text-neutral-500 block lg:inline-block pt-6 md:pt-0"
            >Hamsters</NuxtLink
          >
          <NuxtLink
            to="/equipe"
            class="hover:text-neutral-500 block lg:inline-block pt-6 md:pt-0"
            >Equipe</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="hover:text-neutral-500 block lg:inline-block pt-6 md:pt-0"
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="hover:text-neutral-500 block lg:inline-block pt-6 md:pt-0"
            >Contact</NuxtLink
          >
        </div>
      </div>
    </nav>

    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return { isMenuOpen, toggleMenu };
  },
};
</script>
