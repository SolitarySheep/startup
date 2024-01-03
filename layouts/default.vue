<template>
  <div class="min-h-screen bg-neutral-100">
    <nav class="bg-neutral-200 py-8 mb-10 shadow-xl px-20">
      <div
        class="container mx-auto flex items-center justify-between text-[#215a57] font-bold"
      >
        <NuxtLink
          to="/"
          class="text-3xl font-bold text-neutral-500 hidden md:flex"
        >
          <img
            src="/assets/images/logo.png"
            alt="Image du logo"
            width="70px"
            height="auto"
          />
          <p class="pt-10 pl-3 text-[#61b558]">Nature Hamster</p>
        </NuxtLink>

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
            class="hover:text-[#2C7773] block lg:inline-block pt-6 md:pt-0"
          >
            <div class="justify-center hidden md:flex">
              <img
                src="/assets/images/produit.png"
                alt="Image du logo"
                width="40px"
                height="auto"
              />
            </div>
            Produits</NuxtLink
          >
          <NuxtLink
            to="/hamster"
            class="hover:text-[#2C7773] block lg:inline-block pt-6 md:pt-0"
          >
            <div class="justify-center hidden md:flex">
              <img
                src="/assets/images/hamster.png"
                alt="Image du logo"
                width="66px"
                height="auto"
              />
            </div>
            Hamsters</NuxtLink
          >
          <NuxtLink
            to="/equipe"
            class="hover:text-[#2C7773] block lg:inline-block pt-6 md:pt-0"
          >
            <div class="justify-center hidden md:flex">
              <img
                src="/assets/images/equipe.png"
                alt="Image du logo"
                width="40px"
                height="auto"
              />
            </div>
            Equipe</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="hover:text-[#2C7773] block lg:inline-block pt-6 md:pt-0"
          >
            <div class="justify-center hidden md:flex">
              <img
                src="/assets/images/blog.png"
                alt="Image du logo"
                width="50
                px"
                height="auto"
              />
            </div>
            Blog</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="hover:text-[#2C7773] block lg:inline-block pt-6 md:pt-0"
          >
            <div class="justify-center hidden md:flex">
              <img
                src="/assets/images/contact.png"
                alt="Image du logo"
                width="67px"
                height="auto"
              />
            </div>
            Contact</NuxtLink
          >
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-20">
      <slot />
    </div>
  </div>

  <footer class="bg-neutral-200 pt-6 pb-3 text-neutral-600 text-xl px-20">
    <div class="container mx-auto md:flex justify-between">
      <p class="pb-6 md:pb-0">
        &copy;2023 Nature Hamster. Tous droits réservés.
      </p>
      <div class="ml-auto">
        <a
          href="#"
          target="_blank"
          class="text-neutral-600 hover:text-neutral-500 text-5xl md:text-3xl pr-3"
        >
          <i class="ri-instagram-fill"></i>
        </a>
        <a
          href="#"
          target="_blank"
          class="text-neutral-600 hover:text-neutral-500 ml-auto text-5xl md:text-3xl"
        >
          <i class="ri-facebook-box-fill"></i>
        </a>
      </div>
    </div>
  </footer>
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
