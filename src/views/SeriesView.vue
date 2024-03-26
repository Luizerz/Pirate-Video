<script setup>
import { getDataToSeriesPage } from "../service/apiService.js";
import CardView from "@/components/CardView.vue";
import PaginationView from "@/components/PaginationView.vue";
import router from "@/router/index.js";

const props = defineProps(["page"]);
const page = Number(props.page);
const maxPage = 500;
const data = await getDataToSeriesPage(page);
const results = await data.results;

const nextPage = () => {
  router
    .push({
      name: "series",
      params: { page: page < maxPage ? page + 1 : page },
      replace: true,
    })
};
const prevPage = () => {
  router
    .push({
      name: "series",
      params: { page: page > 1 ? page - 1 : 1 },
      replace: true,
    })
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-10 py-4 px-12 self-center">
    <CardView v-for="item in results" :key="item.id" :itemObj="item" />
  </div>
  <PaginationView
    class="p-10"
    @next="nextPage"
    @prev="prevPage"
    :from="page"
    :to="maxPage"
  />
</template>
