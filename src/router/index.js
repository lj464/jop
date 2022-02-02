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
  // {
  //   path: "footer",
  //   component: (resolve) => require(["../views/footer"], resolve),
  //   meta: {
  //     title: "测试",
  //   },
  //   children: [{
  //     path: 'home',
  //     component: Cart,
  //     meta: {
  //       title: "首页",
  //     },
  //   }, {
  //     path: 'cate',
  //     component: Cart,
  //     meta: {
  //       title: "购物车",
  //     },
  //   }]
  // },
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
  }
]

const router = new VueRouter({
  routes: route
})

export default router