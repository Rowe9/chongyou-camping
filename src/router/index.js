import { createRouter, createWebHashHistory } from "vue-router";

let router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/home/index.vue"),
      redirect: "/home",
    },
    // 注册
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/register/index.vue"),
      meta: {
        title: "注册",
      },
    },
    // 登录
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue"),
      meta: {
        title: "登录",
      },
    },
    // 首页
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
    // 其他
    {
      path: "/other",
      name: "other",
      component: () => import("@/views/other/index.vue"),
      meta: {
        title: "其他",
      },
    },
    // 关于我们
    {
      path: "/aboutUs",
      name: "aboutUs",
      component: () => import("@/views/aboutUs/index.vue"),
      meta: {
        title: "关于我们",
      },
    },
    // 找不到此页面
    {
      path: "/:pathMatch(.*)*", // 必备
      meta: {
        title: "找不到此页面",
      },
      component: () => import("@/views/error/404.vue"),
    },
  ],
});

export default router;
