import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Resume from "@/components/Resume.vue";
import MediaLog from "@/components/MediaLog.vue";
import BlockHopper from "@/components/BlockHopper.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
  {
    path: "/media-log",
    name: "media-log",
    component: MediaLog,
  },
  {
    path: "/block-hopper",
    name: "blockHopper",
    component: BlockHopper,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
