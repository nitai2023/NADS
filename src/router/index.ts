import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import NotFoundViewVue from "../view/NotFoundView.vue";
import DashBoardView from "../view/dashboard/DashBoardView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoardView,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundViewVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token");
//   if (
//     token ||
//     to.path === "/login" ||
//     to.path === "/register" ||
//     to.path === "/"
//   ) {
//     if (to.path === "/login" && token) {
//       next("/dashboard");
//     } else next();
//   } else {
//     next("/login");
//   }
// });

export default router;
