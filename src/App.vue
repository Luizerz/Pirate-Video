<script setup>
import { RouterLink, RouterView } from "vue-router";
import SiteNavigation from "@/components/SiteNavigation.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-movie-secondary">
    <SiteNavigation />
    <Suspense>
      <RouterView />
      <template #fallback>
        <p class="text-white text-5xl">Loading...</p>
      </template>
    </Suspense>
  </div>
</template>
