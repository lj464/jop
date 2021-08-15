import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ELementUi from 'element-ui'
// import Antd from 'ant-design-vue';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ELementUi);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
