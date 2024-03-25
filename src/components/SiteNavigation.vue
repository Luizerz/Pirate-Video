<template>
  <header class="sticky overflow top-0 bg-movie-primary shadow-lg z-10 ">
    <nav
      :class="navOpenMenu"
      class="container flex sm:flex-row items-center justify-between sm:justify-normal gap-4 text-white py-6"
    >
      <RouterLink
        :to="{ path:'/'}"
        class="hover:text-slate-400 text-slate-300"
      >
        <div class="flex items-center gap-3 flex-1">
          <i class="fa-solid fa-clapperboard text-4xl"></i>
          <p class="text-3xl font-Roboto">Pirate Video</p>
        </div>
      </RouterLink>
      <RouterLink
        :class="navItensOpenMenu"
        :to="{ path:'/' }"
        class="text-slate-300 hover:text-slate-400 relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-gray-100 after:to-transparent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        <h2 class="text-xl hover:scale-110">Home</h2>
      </RouterLink>
      <RouterLink
        :class="navItensOpenMenu"
        :to="{ name: 'movies', params: { page: 1 } }"
        class="text-slate-300 hover:text-slate-400 relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-gray-100 after:to-transparent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        <h2 class="text-xl hover:scale-110">Filmes</h2>
      </RouterLink>
      <RouterLink
        :class="navItensOpenMenu"
        :to="{ name: 'series', params: { page: 1 } }"
        class="text-slate-300 hover:text-slate-400 relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-gray-100 after:to-transparent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        <h2 class="text-xl hover:scale-110">Series</h2>
      </RouterLink>
      <RouterLink
        :class="navItensOpenMenu"
        :to="{ name: 'favorites'}"
        class="text-slate-300 hover:text-slate-400 ml-0 sm:ml-auto relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-gray-100 after:to-transparent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
      >
        <h2 class="text-xl hover:scale-110">Favoritos <i class="fa-solid fa-heart"></i></h2>
      </RouterLink>
      <i
        :class="menu"
        class="block sm:hidden cursor-pointer"
        @click="openMenu"
      ></i>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
let navOpenMenu = ref("flex-row");
let navItensOpenMenu = ref("hidden");
let menu = ref("fa-solid fa-bars");
function openMenu() {
  if (navItensOpenMenu.value !== "") {
    navItensOpenMenu.value = "";
    navOpenMenu.value = "flex-col";
    menu.value = "fa-solid fa-xmark";
  } else {
    navItensOpenMenu.value = "hidden";
    navOpenMenu.value = "flex-row";
    menu.value = "fa-solid fa-bars";
  }
  
}
</script>
