<template>

    <div class="h-screen w-screen overflow-hidden absolute" v-if="obj">
      <img
        :src="imageUrl(obj)"
        alt="movie/serie banner"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="absolute w-screen h-screen bg-gradient-to-r from-slate-950 to-transparent"
    ></div>
    <div
      class="h-screen w-screen overflow-hidden absolute flex flex-col items-center md:items-start justify-center pl-10" v-if="obj"
    >
      <div class="w-3/4 md:w-1/3 items-start">
        <div class="flex items-center gap-5 flex-col sm:flex-row">
          <h1 class="text-4xl font-bold font-Roboto text-white">
            {{ props.type == "tv" ? obj.name : obj.title }}
          </h1>
          <div class="flex items-center gap-2">
            <h3 class="text-lg font-bold font-Roboto text-slate-300">
              {{
                props.type == "tv"
                  ? obj.first_air_date.split("-")[0]
                  : obj.release_date.split("-")[0]
              }}
            </h3>
            <h3 class="text-white md:text-green-300 font-Roboto">
              <i class="fa-solid fa-star"></i>
              {{ obj.vote_average }}
            </h3>
          </div>
        </div>
        <p
          class="font-Roboto text-xl italic text-slate-100 line-clamp-2 sm:line-clamp-4"
        >
          {{ obj.overview }}
        </p>
      </div>

      <iframe :src="trailer" class="w-5/6 h-2/6 md:w-1/3" allowfullscreen></iframe>
      <button
        v-if="!isFavorited"
        class="relative grtoup inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-10"
        @click="save(obj)"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"
        ></span>
        <span
          class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"
        ></span>
        <span class="relative">Salvar <i class="fa-solid fa-heart group-hover:animate-bounce"></i></span>
      </button>
      <button
        v-if="isFavorited"
        class=" group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-10"
        @click="remove(obj)"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56"
        ></span>
        <span
          class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"
        ></span>
        <span class="relative"
          ><i class="fa-solid fa-heart-crack group-hover:animate-bounce"></i> Remover</span
        >
      </button>
    </div>
    <div v-else class="h-screen w-screen overflow-hidden absolute flex flex-col justify-center items-center">
    <h1 class="text-4xl text-slate-200">Carregando...</h1>
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

const imageUrl = (obj) => {
  return "https://image.tmdb.org/t/p/original" + obj.backdrop_path;
};
</script>
