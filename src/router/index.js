import { createRouter, createWebHistory } from "vue-router";
import Layout from "/point/vite-project/src/Layout/index.vue"
import NProgress from "nprogress"; // 导入 nprogress模块
import "nprogress/nprogress.css";
// 默认路由
const constantRoutes = [
  {
    name: "to404",
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/bamboo/404.vue"),
    meta: { title: "404" },
  },
];

// 系统相关路由
const routes = [
  {
    path: "",
    component: Layout,
    name: "layout",
    meta: { menuName: "流域水循环关系平台" },
    redirect: "Hello",
    // 页面主体部分组件
    children: [
     
      {
        path: "OntoAdd",
        name: "OntoAdd",
        component: () => import("@/module/OntologyAdd.vue"),
        meta: {
          title: "类型添加",
          menu: false,
          visByUrl: false,
        },
      },
      
      {
        path: "Hello",
        name: "Hello",
        component: () => import("@/views/system/HelloWorld.vue"),
        meta: {
          title: "类型添加",
          menu: false,
          visByUrl: false,
        },
      },
      {
        path: "Member",
        name: "Member",
        component: () => import("@/views/system/member.vue"),
        meta: {
          title: "成员查看",
          menu: false,
          visByUrl: false,
        },
      },
    
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes.concat(constantRoutes),
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});
// 路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  // 不能通过url访问的路径重定向至首页
  // if (to.meta.visByUrl === false) next("/index");
  if (to.meta.title) document.title = to.meta.title;
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
export { routes };
