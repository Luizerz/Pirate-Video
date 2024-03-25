<template>
  <div
    class="w-screen h-screen flex justify-center items-center absolute overflow-clip"
  >
    <div
      class="bg-gradient-to-r from-slate-900 to-transparent h-full w-full absolute"
    ></div>
    <img :src="imageUrl(obj)" class="w-full h-full object-cover" v-if="obj"/>
    <h1 v-else>loading...</h1>

  </div>
</template>
<script setup>
import { getDataByID } from "@/service/apiService.js";
import { ref } from "vue";
const props = defineProps(["item", "type"]);
const obj = ref(null)
await getDataByID(props.item, props.type).then((data) => obj.value = data)
const imageUrl = (obj) => {
  return "https://image.tmdb.org/t/p/original" + obj.backdrop_path;
};
</script>
