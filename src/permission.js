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
    // token就是角色名称，传入vueX中开始计算权限
    if (!store.getters.permission_routes.length) {
      console.log('添加路由');
      let routes = await store.dispatch('permission/generateRoutes', hasLogin)
      routes.forEach((route) => {
        router.addRoute(route)
      })
      // console.log(router.getRoute(), 'RouteConfig')
      next({ ...to, replace: true })
    } else {
      next()
    }
    // router.addRoutes('index',route)
  } else {
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  }
})