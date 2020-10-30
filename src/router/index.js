import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 主页
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      isNavBar: false,
      isTabBar: true,
      title: "首页",
      pageTitle: "首页",
    },
  },
  // 课程
  {
    path: "/Appointment",
    name: "Appointment",
    component: () => import("../views/Appointment.vue"),
    meta: {
      isNavBar: true,
      isTabBar: true,
      icon: "search",
      title: "精品课程",
      pageTitle: "课程",
      isBack: true,
    },
  },
   // 我的
   {
    path: "/mine",
    name: "mine",
    component: () => import("../views/mine.vue"),
    meta: {
      isNavBar: false,
      isTabBar: true,
      pageTitle: "我的",
    },
  },
  // 约课记录
  {
    path: "/order",
    name: "order",
    component: () => import("../views/order/order.vue"),
    meta: {
      isNavBar: true,
      isTabBar: true,
      title: "约课记录",
      pageTitle: "约课记录主页面",
    },
  },
  // 练习页面
  {
    path: "/practice",
    name: "Practice",
    component: () => import("../views/practice/Practice.vue"),
    meta: {
      title: "练习",
      pageTitle: "练习",
      isNavBar: true,
      isTabBar: true,
    },
  },
  // 密码登录
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
    meta: {
      isNavBar: false,
      isTabBar: false,
      pageTitle: "密码登录",
    },
  },
  // 修改密码
  {
    path: "/ForgetPass",
    name: "ForgetPass",
    component: () => import("../views/login/ForgetPass.vue"),
    meta: {
      isNavBar: false,
      isTabBar: false,
      pageTitle: "修改密码",
    },
  },
  // 验证码登录
  {
    path: "/SmsLogin",
    name: "SmsLogin",
    component: () => import("../views/login/SmsLogin.vue"),
    meta: {
      isNavBar: false,
      isTabBar: false,
      pageTitle: "验证码登录",
    },
  },
  // 设置密码
  {
    path: "/SetPass",
    name: "SetPass",
    component: () => import("../views/login/SetPass.vue"),
    meta: {
      isNavBar: false,
      isTabBar: false,
      pageTitle: "设置密码",
    },
  },
 
];
const router = new VueRouter({
  routes,
});
// 路由导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.pageTitle;
  next();
  // 判断本地存储中 token 是否存在 若存在 则不做操作
  // if (localStorage.getItem('token')) {
  //   next()
  // }else{
  //   // 若即将要去的路径为登录界面时 不做操作
  //   if (to.path == '/Login') {
  //     next()
  //     // 不为时 跳转为登录页面
  //   } else {
  //     next('/Login')
  //   }
  // }
});

export default router;
