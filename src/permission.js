// 路由全局守卫
// 权限控制逻辑在这里
import router from './router'
import { getStorage } from '@/utils/storage' // 从cookie获取令牌

router.beforeEach((to,from,next)=>{
  let hasLogin = getStorage('token')
  if(hasLogin){
    next()
  }else {
    if(to.path !== '/login'){
      next('/login')
    }else {
      next()
    }
  }
})