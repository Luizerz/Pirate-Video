<template>
  <div
    class="w-screen h-screen flex justify-center items-center absolute overflow-clip"
  >
    <div
      class="bg-gradient-to-r from-slate-900 to-transparent h-full w-full absolute"
    ></div>
    <img :src="imageUrl(obj)" class="w-full h-full object-cover" v-if="obj" />
    <div
      class="absolute items-center gap-5 justify-center flex flex-col w-2/3 h-3/4 sm:w-2/4 sm:h-2/3 "
      v-if="obj"
    >
      <h1
        class="text-4xl font-bold font-Roboto text-white text-start self-start"
      >
        {{ props.type == "tv" ? obj.name : obj.title }}
      </h1>
      <h2 class="text-start self-start text-wrap font-Roboto text-xl italic text-slate-400">{{obj.overview}}</h2>

      <div class="self-start flex justify-center items-center gap-3">
        <h3 class="text-lg font-bold font-Roboto text-slate-300 text-start">
          {{
            props.type == "tv"
              ? obj.first_air_date.split("-")[0]
              : obj.release_date.split("-")[0]
          }}
        </h3>
        <h3 class="text-green-300 font-Roboto">
          <i class="fa-solid fa-star"></i>
          {{ obj.vote_average }}
        </h3>
        <!-- <h3>{{ obj.runtime }}</h3> -->
      </div>
      <iframe class="w-full h-full " :src="trailer"></iframe>
      <button
        v-if="!isFavorited"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-bold rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-gray-300 hover:text-white font-Roboto text-xl"
        @click="save(obj)"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Salvar <i class="fa-solid fa-heart-circle-plus"></i>
        </span>
      </button>
      <button
        v-if="isFavorited"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-bold rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-gray-300 hover:text-white font-Roboto text-xl"
        @click="remove(obj)"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Remover <i class="fa-solid fa-heart-crack"></i>
        </span>
      </button>
    </div>
    <h1 v-else>loading...</h1>
  </div>
</template>
<script setup>
import { getDataByID, getTrailerByID } from "@/service/apiService.js";
import { ref } from "vue";
import storage from "@/service/storage";
import router from "@/router/index.js";
const props = defineProps(["item", "type"]);
const obj = ref(null);
const trailer = ref(null);
const isFavorited = storage.getItem(props.item);

const save = () => {
  storage.addItem(obj.value);
  router.go();
};
const remove = () => {
  storage.removeByID(obj.value.id);
  router.go();
};

await getDataByID(props.item, props.type).then((data) => (obj.value = data));
await getTrailerByID(props.item, props.type).then((data) => {
  if (data) {
    trailer.value = "https://www.youtube.com/embed/" + data;
  } else {
    trailer.value = "https://www.youtube.com/embed/";
  }
});
console.log(obj.value);
const imageUrl = (obj) => {
  return "https://image.tmdb.org/t/p/original" + obj.backdrop_path;
};
</script>
