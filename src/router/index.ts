import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import AptView from "../view/AptView.vue";
import AssetMapView from "../view/AssetMapView.vue";
import HomeView from "../view/HomeView.vue";
import LoginView from "../view/LoginView.vue";
import NotFoundViewVue from "../view/NotFoundView.vue";
import Register from "../view/RegisterView.vue";
import GoalDetailView from "../view/TargetedAssetView/GoalDetailView.vue";
import NodeManageView from "../view/TargetedAssetView/NodeManageView.vue";
import TaskView from "../view/TargetedAssetView/TaskView.vue";
import UserManagement from "../view/UserManagement.vue";
import VulnerabilityQuery from "../view/VulnerabilityQuery.vue";
import DashBoardView from "../view/dashboard/DashBoardView.vue";
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
    redirect: "/dashboard/assetmap",
    children: [
      { path: "/dashboard/assetmap", component: AssetMapView },
      { path: "/dashboard/vulnerability", component: VulnerabilityQuery },
      { path: "/dashboard/usermanagement", component: UserManagement },
      {
        path: "/dashboard/targetedasset",
        children: [
          {
            path: "/dashboard/targetedasset/taskmanagement",
            component: TaskView,
          },
          {
            path: "/dashboard/targetedasset/nodemanage",
            component: NodeManageView,
          },
          {
            path: "/dashboard/targetedasset/goaldetail",
            component: GoalDetailView,
          },
        ],
      },
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

// 检测token时效是否过期
router.beforeEach((to, from, next) => {
  // Exclude the home and login routes
  if (to.path !== "/" && to.path !== "/login") {
    // Check if the timer has already been started
    if (!localStorage.getItem("timerStarted")) {
      let dueTime = Number(localStorage.getItem("dueTime"));
      let timer = setInterval(() => {
        if (Date.now() > dueTime) {
          localStorage.clear();
          router.push("/login");
          ElMessage({
            message: "token时效已过，请重新登录",
            type: "error",
          });
          clearInterval(timer);
          localStorage.removeItem("timerStarted"); // 可选，如果你希望在用户再次登录后重启计时器
        }
      }, 1000);

      // Set the timerStarted item in localStorage so that the timer won't start again
      localStorage.setItem("timerStarted", "true");
    }
  }

  next();
});

export default router;
