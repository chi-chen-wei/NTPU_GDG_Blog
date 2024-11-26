import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/projects",
    name: "ProjectPage",
    component: () => import("../views/ProjectPage.vue"),
  },
  {
    path: "/events",
    name: "EventPage",
    component: () => import("../views/EventPage.vue"),
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: () => import("../views/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
