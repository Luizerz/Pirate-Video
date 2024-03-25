<template>
  <div
    class="self-center rounded-lg group cursor-pointer hover:scale-95 transition-all duration-500 group flex flex-col justify-center items-center"

  >
    <i v-if="isInFavorite" class="block group-hover:opacity-100 text-2xl opacity-0  fa-solid fa-xmark hover:text-red-600" @click="remove"></i>
    <img
    @click="goToUrl"
      class="rounded-lg shadow-md dark:shadow-gray-800 object-cover"
      :src="url"
    />
  </div>
</template>

<script setup>
import router from "@/router";
import storage from "@/service/storage";
import { RouterLink } from "vue-router";
const props = defineProps(["itemObj", "isInFavorite"]);
const url = `https://image.tmdb.org/t/p/original/${props.itemObj.poster_path}`;
const remove = () => {
  storage.removeByID(props.itemObj.id);
  router.go();
};
const goToUrl = () => {
  if (props.isInFavorite == true) {
    router
      .push({
        name: "detail",
        params: {
          type: props.itemObj.title ? "movie" : "tv",
          item: props.itemObj.id,
        },
      })
      .then(() => router.go())
      .catch((err) => console.error(err));
  } else {
    router
      .push({
        name: "detail",
        params: { type: props.itemObj.media_type, item: props.itemObj.id },
      })
      .then(() => router.go())
      .catch((err) => console.error(err));
  }
};
</script>
