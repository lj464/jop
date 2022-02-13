import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
// 导出异步组件
export const asyncRoute = [{
    path: "tree",
    component: () => import('../views/tree/index.vue'),
    name: 'tree',
    meta: {
      title: '树形组件', //谁都可以看到页面的角色
    }
  },
  {
    path: "table",
    component: () => import('../views/Table'),
    meta: {
      title: '表格组件',
      roles: ['zs'] //admin 和 zs 可以看到的页面
    }
  },
  {
    path: "msg",
    component: () => import('../views/message'),
    meta: {
      title: '消息提示组件',
      roles: ['ls']
    }
  },
  {
    path: "drg",
    component: () => import('../views/drag'),
    meta: {
      title: '拖拽组件',
      roles: ['ls']
    }
  },
  {
    path: "swiper",
    component: () => import('../views/swiper'),
    meta: {
      title: '轮播图组件',
      roles: ['ls']
    }
  },
  {
    path: "cascader",
    component: () => import('../views/cascader'),
    meta: {
      title: '级联选择器',
      roles: ['zs']
    }
  },
  {
    path: "datepicker",
    component: () => import('../views/datepicker'),
    meta: {
      title: '日历组件',
      roles: ['zs']
    }
  },
  {
    path: "upload",
    component: () => import('../views/upload'),
    meta: {
      title: '上传组件',
      roles: ['zs']
    }
  },
  // 404页面不能放到静态路由中
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/status/not-found/index.vue')
  }
]
// 设置同步组件
export const route = [{
    path: "/",
    name: 'main',
    redirect: 'tree',
    component: () => import('../views/index.vue'),
  },
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
  },
]

const router = new VueRouter({
  routes: route
})

export default router