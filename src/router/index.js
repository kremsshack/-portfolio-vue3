import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "../components/Portfolio.vue";
import Memory from "../components/memory.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Portfolio,
  },
  {
    path: "/memory",
    name: "MemoryGame",
    component: Memory,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
