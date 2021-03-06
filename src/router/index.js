import Vue from "vue";
import { getAccessToken } from "@/util/auth";
import VueRouter from "vue-router";
import BaseLayout from "@/layouts/BaseLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Echarts" */ "@/views/login/index.vue"),
    meta: { title: "登录" }
  },
  {
    path: "/",
    name: "Home",
    component: BaseLayout,
    meta: { title: "首页" },
    redirect: "/ant",
    children: [
      {
        path: "/ant",
        name: "ant",
        component: () =>
          import(/* webpackChunkName: "Ant" */ "@/views/ant/index.vue"),
        meta: { title: "UI组件" }
      },
      {
        path: "/echarts",
        name: "echarts",
        component: () =>
          import(/* webpackChunkName: "Echarts" */ "@/views/echarts/index.vue"),
        meta: { title: "图表" }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title; // 标题

  const token = getAccessToken();

  // 有token
  if (token) {
    //登录页
    if (to.path === "/login") {
      next("/");
    }
    // 非登录页
    else {
      next();
    }
  }

  //无token
  else {
    //登录页
    if (to.path === "/login") {
      next();
    } else {
      next({ name: "login", params: { redirect: to.path } });
    }
  }
});

export default router;
