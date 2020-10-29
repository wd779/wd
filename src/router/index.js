import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Dome', component: () => import('../views/Dome.vue'), redirect: '/home',
  },
  {
    path: '/Login', name: 'Login', component: () => import('../views/login/Login.vue'), redirect: '/home',
  },

]
const router = new VueRouter({
  routes
})


export default router
