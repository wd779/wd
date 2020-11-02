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
    meta: { 
      title: "设置", 
      pageTitle: "设置" 
    },
  },
  { path: '/info', name: 'Info', component: () => import('../views/my/Info.vue'), meta: { pageTitle: '个人信息' } }, // 个人信息
  { path: '/my-study', name: 'My-study', component: () => import('../views/my/My-study.vue'), meta: { pageTitle: '我的特色课 我的学习' } }, // 我的特色课 我的学习
  { path: '/my-currency', name: 'My-currency', component: () => import('../views/my/My-currency.vue'), meta: { pageTitle: '约课记录我的特色课 我的学习主页面' } }, // 我的特色课 我的学习
  { path: '/collect', name: 'Collect', component: () => import('../views/my/Collect.vue'), meta: { pageTitle: '我的收藏' } }, // 我的收藏
  { path: '/concern', name: 'Concern', component: () => import('../views/my/Concern.vue'), meta: { pageTitle: '我的关注 关注的老师' } }, // 我的关注 关注的老师
  { path: '/coupon', name: 'Coupon', component: () => import('../views/my/Coupon.vue'), meta: { pageTitle: '优惠券' } }, // 优惠券-hrj-zhy
  { path: '/card', name: 'Card', component: () => import('../views/my/Card.vue'), meta: { pageTitle: '学习卡' } }, // 学习卡-hrj-zhy
  { path: '/vip', name: 'Vip', component: () => import('../views/my/Vip.vue'), meta: { pageTitle: '会员' } }, // 会员-hrj-zhy
  { path: '/message', name: 'Message', component: () => import('../views/my/Message.vue'), meta: { pageTitle: '我的消息' } }, // 我的消息-hrj-zhy
  { path: '/feedback', name: 'Feedback', component: () => import('../views/my/Feedback.vue'), meta: { pageTitle: '意见反馈' } }, // 意见反馈-hrj-zhy
  { path: '/personOne', name: 'personOne', component: () => import('../views/my/personOne.vue'), meta: { pageTitle: '客服留言' } }, // 客服留言-zhy
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
  { path: "/email", name: "email", component: () => import("../views/practice/email.vue"), meta: { pageTitle: '弹出信封' } }, //弹出信封-zhy
  { path: "/point", name: "point", component: () => import("../views/practice/point.vue"), meta: { pageTitle: '考点练习' } }, //考点练习-zhy
  { path: "/paper_package", name: "paper_package", component: () => import("../views/practice/paper_package.vue"), meta: { pageTitle: '套卷练习' } }, //套卷练习-zhy
  { path: "/exam", name: "exam", component: () => import("../views/practice/exam.vue"), meta: { pageTitle: '仿真模考' } }, // 仿真模考-zhy
  { path: "/error_ques", name: "error_ques", component: () => import("../views/practice/error_ques.vue"), meta: { pageTitle: '错题练习' } },// 错题练习-zhy
  { path: "/assess", name: "assess", component: () => import("../views/practice/assess.vue"), meta: { pageTitle: '测评记录' } }, // 测评记录-zhy
  { path: "/ques_collect", name: "ques_collect", component: () => import("../views/practice/ques_collect.vue"), meta: { pageTitle: '习题收藏' } },// 习题收藏-zhy
  { path: "/shu", name: "shu", component: () => import("../views/practice/shu.vue"), meta: { pageTitle: '学习跳转页面' } },// 学习跳转页面-zhy
  // { path: "hua", name: "hua", component: () => import("../views/practice/hua.vue"), meta: { pageTitle: '化学跳转页面' } },// 化学跳转页面-zhy
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
