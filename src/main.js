import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ELementUi from 'element-ui'
// import Antd from 'ant-design-vue';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'
import './permission.js'
import "@/assets/gloabal.css";
// router.beforeEach((to,from,next)=>{
//   next('/login')
// })
Vue.config.productionTip = false
Vue.use(ELementUi);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')