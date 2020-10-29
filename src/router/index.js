import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Dome', component: () => import('../views/Dome.vue'), redirect: '/home',
    children: [
      { path: 'home', name: 'Home', component: Home },//首页
      { path: 'mine', name: 'mine', component: () => import('../views/mine.vue') }, // 我的
      { path: 'Appointment', name: 'Appointment', component: () => import('../views/Appointment.vue') }, // 课程
      { path: "practice", name: "Practice", component: () => import("../views/practice/Practice.vue"), },// 练习页面主页面-zhy
      { path: "point", name: "point", component: () => import("../views/practice/point.vue") }, //考点练习-zhy
      { path: "paper_package", name: "paper_package", component: () => import("../views/practice/paper_package.vue") }, //套卷练习-zhy
      { path: "exam", name: "exam", component: () => import("../views/practice/exam.vue") }, // 仿真模考-zhy
      { path: "error_ques", name: "error_ques", component: () => import("../views/practice/error_ques.vue") },// 错题练习-zhy
      { path: "assess", name: "assess", component: () => import("../views/practice/assess.vue") }, // 测评记录-zhy
      { path: "ques_collect", name: "ques_collect", component: () => import("../views/practice/ques_collect.vue") },// 习题收藏-zhy
      { path: "shu", name: "shu", component: () => import("../views/practice/shu.vue") },// 学习跳转页面-zhy
      { path: "order", name: "order", component: () => import("../views/order/order.vue") },// 约课记录主页面-zhy
    ]
  }, // 主页面
  { path: '/login', name: 'Login', component: () => import('../views/login/Login.vue') }, // 密码登录
  { path: '/forgetPass', name: 'ForgetPass', component: () => import('../views/login/ForgetPass.vue') }, // 修改密码
  { path: '/smsLogin', name: 'SmsLogin', component: () => import('../views/login/SmsLogin.vue') }, // 验证码登录
  { path: '/info', name: 'Info', component: () => import('../views/my/Info.vue') }, // 个人信息
  { path: '/my-study', name: 'My-study', component: () => import('../views/my/My-study.vue') }, // 我的特色课 我的学习
  { path: '/my-currency', name: 'My-currency', component: () => import('../views/my/My-currency.vue') }, // 我的特色课 我的学习
  { path: '/collect', name: 'Collect', component: () => import('../views/my/Collect.vue') }, // 我的收藏
  { path: '/concern', name: 'Concern', component: () => import('../views/my/Concern.vue') }, // 我的关注 关注的老师
  { path: '/coupon', name: 'Coupon', component: () => import('../views/my/Coupon.vue') }, // 优惠券
  { path: '/card', name: 'Card', component: () => import('../views/my/Card.vue') }, // 学习卡
  { path: '/vip', name: 'Vip', component: () => import('../views/my/Vip.vue') }, // 会员
  { path: '/message', name: 'Message', component: () => import('../views/my/Message.vue') }, // 我的消息-hrj-zhy
  { path: '/feedback', name: 'Feedback', component: () => import('../views/my/Feedback.vue') }, // 意见反馈-hrj-zhy
  { path: '/options', name: 'Options', component: () => import('../views/my/Options.vue') }, // 设置-hrj-zhy
  { path: '/personOne', name: 'personOne', component: () => import('../views/my/personOne.vue') }, // 客服留言-zhy
  { path: '/study', name: 'study', component: () => import('../views/Home/Study.vue') },// 学习日历
  { path: '/fudao', name: 'fudao', component: () => import('../views/Home/FuDao.vue') },// 一对一辅导页面,
  { path: '/Details', name: 'Details', component: () => import('../views/Appointment/Details.vue') },// 详情,
  { path: '/teacher_details', name: 'teacher_details', component: () => import('../views/Home/Teacher_Details.vue') },// 教师详情,

]
const router = new VueRouter({
  routes
})

export default router
