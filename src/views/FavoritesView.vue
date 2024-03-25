<template>
  <p v-for="item in favoriteList" :key="item.id">{{item.id}}</p>
</template>
<script setup>
import storage from "@/service/storage.js";
import { reactive } from "vue";
const favoriteList = reactive(storage.getFavoriteList());
console.log(favoriteList)

</script>
