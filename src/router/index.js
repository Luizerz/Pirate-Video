import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import SeriesView from "../views/SeriesView.vue";
import FavoritesView from "../views/FavoritesView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      redirect: { name: "home", params: { page: 1 } },
      name: "initial",
      children: [
        {
          path: "/home/:page",
          name: "home",
          component: () => import('@/views/HomeView.vue'),
          props: true,
          meta: {
            watchParam: "page",
          },
        },
      ],
    },
    {
      path: "/movies/:page",
      name: "movies",
      component: MoviesView,
      props: true,
    },
    {
      path: "/series/:page",
      name: "series",
      component: SeriesView,
      props: true,
    },
    {
      path: "/detail/:type/:item",
      name: "detail",
      component: () => import("../views/DetailView.vue"),
      props: true,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView,
    },
  ],
});

export default router;
