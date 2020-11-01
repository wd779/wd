import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // =========================  首页相关  =======================================
  // 主页
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      isNavBar: false,
      isTabBar: true,
      pageTitle: "首页",
    },
  },
  // 课程详情,
  {
    path: "/Details",
    name: "Details",
    component: () => import("../views/Appointment/Details.vue"),
    meta: {
      pageTitle: "课程详情",
      isNavBar: true,
      title: "课程详情",
      isBack: true,
      icon: "share-o",
    },
  },
  // 教师详情,
  {
    path: "/Teacher_Details",
    name: "Teacher_Details",
    component: () => import("../views/Home/Teacher_Details.vue"),
    meta: {
      pageTitle: "教师详情",
      isNavBar: false,
      title: "教师详情",
      isBack: true,
    },
  },
  // 学习界面,
  {
    path: "/Study",
    name: "Study",
    component: () => import("../views/Home/Study.vue"),
    meta: {
      pageTitle: "学习日历",
      isNavBar: true,
      isBack: true,
      title: "学习日历",
    },
  },
  // 辅导界面,
  {
    path: "/FuDao",
    name: "FuDao",
    component: () => import("../views/Home/FuDao.vue"),
    meta: {
      pageTitle: "一对一辅导",
      isNavBar: true,
      isBack: true,
      title: "一对一辅导",
      icon: "search",
    },
  },

  // =====================      课程相关     ================================
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
      isBack: false,
    },
  },
  // ==========================      我的相关      =================================
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
  // 设置
  {
    path: "/options",
    name: "Options",
    component: () => import("../views/my/Options"),
    meta: { title: "设置" },
  }, 
  // ===========================   约课相关    =====================================
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
  // ==========================   练习相关   ======================================
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
  // ===========================  登录相关  ======================================
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
  if (to.path == "/mine" || to.path == "/order") {
    if (localStorage.getItem("user")) {
      next();
    } else {
      next("/Login");
    }
  }
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
