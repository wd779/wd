import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 主页
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta:{
      isNavBar:false,
      isTabBar:true,
      title:"首页",
    }
  },
  // 课程
  {
    path: "/Appointment",
    name: "Appointment",
    component: () => import("../views/Appointment.vue"),
    meta:{
      isNavBar:true,
      isTabBar:true,
      icon:"search",
      title:"精品课程",
    }
  },
  // 密码登录
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
    meta:{
      isNavBar:false,
      isTabBar:false,
    }
  },
  // 修改密码
  {
    path: "/ForgetPass",
    name: "ForgetPass",
    component: () => import("../views/login/ForgetPass.vue"),
    meta:{
      isNavBar:false,
      isTabBar:false,
    }
  },
  // 验证码登录
  {
    path: "/SmsLogin",
    name: "SmsLogin",
    component: () => import("../views/login/SmsLogin.vue"),
    meta:{
      isNavBar:false,
      isTabBar:false,
    }
  },
  // 设置密码
  {
    path: "/SetPass",
    name: "SetPass",
    component: () => import("../views/login/SetPass.vue"),
    meta:{
      isNavBar:false,
      isTabBar:false,
    }
  },
];
const router = new VueRouter({
  routes,
});
// 路由导航守卫
// router.beforeEach((to,from,next)=>{
//   // 判断本地存储中 token 是否存在 若存在 则不做操作
//   if (localStorage.getItem('token')) {
//     next()
//   }else{
//     // 若即将要去的路径为登录界面时 不做操作
//     if (to.path == '/Login') {
//       next()
//       // 不为时 跳转为登录页面
//     } else {
//       next('/Login')
//     }
//   }
// })

export default router;
