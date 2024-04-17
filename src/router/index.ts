import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import AptView from "../view/AptView.vue";
import AssetQuery from "../view/AssetQuery.vue";
import HomeView from "../view/HomeView.vue";
import LoginView from "../view/LoginView.vue";
import NotFoundViewVue from "../view/NotFoundView.vue";
import Register from "../view/RegisterView.vue";
import UserManagement from "../view/UserManagement.vue";
import VulnerabilityQuery from "../view/VulnerabilityQuery.vue";
import DashBoardView from "../view/dashboard/DashBoardView.vue";
import CreateTaskView from "../view/TargetedAssetView/CreateTaskView.vue";
import NodeManageView from "../view/TargetedAssetView/NodeManageView.vue";
import GoalDetailView from "../view/TargetedAssetView/GoalDetailView.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoardView,
    children: [
      { path: "/dashboard/assetquery", component: AssetQuery },
      { path: "/dashboard/vulnerability", component: VulnerabilityQuery },
      { path: "/dashboard/usermanagement", component: UserManagement },
      { path: "/dashboard/targetedasset",children:[{path:"/dashboard/targetedasset/createtask",component:CreateTaskView},{path:"/dashboard/targetedasset/nodemanage",component:NodeManageView},{path:"/dashboard/targetedasset/goaldetail",component:GoalDetailView}] },
      { path: "/dashboard/aptmanagement", component: AptView },
    ],
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (
    token ||
    to.path === "/login" ||
    to.path === "/register" ||
    to.path === "/"
  ) {
    if (to.path === "/login" && token) {
      next("/dashboard");
    } else next();
  } else {
    next("/login");
  }
});

export default router;
