// 路由全局守卫
// 权限控制逻辑在这里
import router from './router'
import {
  getStorage
} from '@/utils/storage' // 从cookie获取令牌
import store from '@/store'
router.beforeEach(async (to, from, next) => {
  let hasLogin = getStorage('token')
  if (hasLogin) {
    // 如果在登录状态下去登录页面则执行退出登录操作
    if(to.path === '/login'){
      store.dispatch('Loginout')
      next()
    }
    // token就是角色名称，传入vueX中开始计算权限
    if (!store.getters.permission_routes.length) {
      console.log('添加路由');
      // console.log(router.getRoute(), 'RouteConfig')
      addRoute(hasLogin)
      next({
        ...to,
        replace: true
      })
    } else {
      next()
    }
  } else {
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  }
})
export const addRoute  = async (hasLogin)=> {
  let routes = await store.dispatch('permission/generateRoutes', [hasLogin])
  routes.forEach((route) => {
    router.addRoute('main', route)
  })
}