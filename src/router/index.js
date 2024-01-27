import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login";
// import home from "@/views/home";
// import console from "@/views/console";
// import hirunner from "@/views/hirunner";

import MenuIndex from "@/menu/menuIndex.vue";
import Dashboard from "@/views/home/dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    meta: {
      title: "测试平台登录",
    },
    component: login,
  },
  {
    path: "/",
    name: "home",
    redirect:"/index",
    meta: {
      title:"首页",
      requireAuth: true,
      hasSubMenu: false,
    },
    component: MenuIndex,
    children: [
      {
        path: "/index",
        name: "dashboard",
        component:Dashboard,
        meta: {
          title: "仪表盘",
        }
      }
    ],
  },
  {
    path:"/config",
    name:"config",
    meta:{
      title:"配置管理",
      requireAuth:true,
      hasSubMenu:true,
    },
    component:MenuIndex,
    children: [
        {
          path: "/config/userManagement",
          name:"userManagement",
          meta: {
            title: "用户管理",
          },
          component: () => import("@/views/console/userManagement.vue"),
          children:[],
        },
        {
          path: "/config/productManagement",
          name:"productManagement",
          meta: {
            title: "产品管理",
          },
          component: () => import("@/views/console/ProductManagement.vue"),
          children:[
            {
              path:"/config/productManagement/testPlanConfigList",
              name:"testPlanConfigList",
              meta:{
                title:"版本默认计划",
              },
              component:() => import("@/views/console/TestPlanConfigList"),
            }
          ]
        },
      ]
    },
  {
    path:"/testplan",
    name:"testplan",
    meta:{
      title:"测试计划",
      requireAuth:true,
      hasSubMenu:true,
    },
    component:MenuIndex,
    children: [
        {
          path: "/testplan/testPlanManagement",
          name:"testPlanManagement",
          meta: {
            title: "计划执行",
          },
          component: () => import("@/views/hirunner/testPlan/TestPlanManagement.vue"),
          children:[
            {
              path:"/testplan/testPlanManagement/addTestPlan",
              name:"addTestPlan",
              meta:{
                title:"添加计划",
              },
              component:() => import("@/views/hirunner/testPlan/TestPlanEditor"),
            },
            {
              path:"/testplan/testPlanManagement/editTestPlan",
              name:"editTestPlan",
              meta:{
                title:"编辑计划",
              },
              component:() => import("@/views/hirunner/testPlan/TestPlanEditor"),
            },
            {
              path:"/testplan/testPlanManagement/testPlanResultList",
              name:"testPlanResultList",
              meta:{
                title:"计划运行历史",
              },
              component:() => import("@/views/hirunner/testPlan/TestPlanResultList"),
            }
          ],
        },
      ]
    }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(auth => auth.meta.requireAuth)) {
    let token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});
export default router;
