<template>
  <div
   class="grid grid-cols-2 md:grid-cols-5 gap-10 py-4 px-12 md:px-24 self-center"
    v-if="!(favoriteList.length == 0)"
  >
    <CardView
      v-for="item in favoriteList"
      :key="item.id"
      :itemObj="item"
      :isInFavorite="true"
    />
  </div>
  
  <div class="grid grid-cols- md:grid-cols-5 gap-10 py-4 px-12 md:px-24 self-center" v-else>
    <h1 class="text-3xl font-Roboto text-slate-300">Não há nada aqui.</h1>
    <span class="text-3xl"> 😥</span>
  </div>
</template>
<script setup>
import CardView from "@/components/CardView.vue";
import storage from "@/service/storage.js";
import { reactive } from "vue";
const favoriteList = reactive(storage.getFavoriteList());
</script>
