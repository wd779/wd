import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import '../src/assets/rem' // rem适配
Vue.config.productionTip = false
// 全局路由守卫
router.beforeEach((to, from, next) => {
  if(to.name=='Login'){
    if(sessionStorage.getItem('token')){
      next('/home')
    }
    next()
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
