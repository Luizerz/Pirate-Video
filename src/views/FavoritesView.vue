<template>
<div class="grid grid-cols-2 md:grid-cols-5 gap-10 py-4 px-12 self-center">
    <CardView v-for="item in favoriteList" :key="item.id" :itemObj="item" :isInFavorite='true' />
  </div>
</template>
<script setup>
import CardView from "@/components/CardView.vue";
import storage from "@/service/storage.js";
import { reactive } from "vue";
const favoriteList = reactive(storage.getFavoriteList());

</script>
