<script setup>
import { getDataToHomePage } from "@/service/apiService.js";
import PaginationView from "@/components/PaginationView.vue";
import router from "@/router/index.js";
import { defineAsyncComponent, watch, watchEffect } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

const props = defineProps(["page"]);
const page = Number(props.page);
const maxPage = 500;
const data = await getDataToHomePage(page);
const results = await data.results;
const Card = defineAsyncComponent(() => import("../components/CardView.vue"));

const nextPage = async () => {
  router
    .push({
      name: "home",
      params: { page: page < maxPage ? page + 1 : page },
    })
};
const prevPage = () => {
  router
    .push({
      name: "home",
      params: { page: page > 1 ? page - 1 : 1 },
    })
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-10 py-4 px-12 md:px-24 self-center">
    <Card v-for="item in results" :key="item.id" :itemObj="item" />
  </div>
  <PaginationView
    class="p-10"
    @next="nextPage"
    @prev="prevPage"
    :from="page"
    :to="maxPage"
  />
</template>
