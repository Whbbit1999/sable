import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  // {
  //   path: "/admin",
  //   component: () => import("@/layouts/admin.vue"),
  //   children: [
  //     { path: "user", component: () => import("@/views/admin/user.vue") },
  //   ],
  // },
  // {
  //   path: "/member",
  //   component: () => import("@/layouts/member.vue"),
  //   children: [
  //     { path: "", component: () => import("@/views/member/member.vue") },
  //   ],
  // },
] as RouteRecordRaw[];

export default routes;
