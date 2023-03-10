import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import StaticPage from "./views/StaticPage.vue";
 
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:industry",
    name: "Industry",
    component: Home,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;