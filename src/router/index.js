import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const tree = () => import('../views/tree/index.vue')
const Cart = () => import('../views/cart/index.vue')
export const asyncRoute = [{
  path: "/",
  redirect: "/tree",
  component: () => import('../views/index.vue'),
  children: [{
      path: "tree",
      component: tree,
      meta: {
        title: '树形组件'
      }
    },
    {
      path: "table",
      component: () => import('../views/Table'),
      meta: {
        title: '表格组件',
        roles: ['zs', 'admin']
      }
    },
    {
      path: "leave",
      component: () => import('../views/leave'),
      meta: {
        title: '函数组件',
        roles: ['zs', 'admin']
      }
    },
    {
      path: "footer",
      component: (resolve) => require(["../views/footer"], resolve),
      meta: {
        title: "测试",
      },
      children: [{
        path: 'home',
        component: Cart,
        meta: {
          title: "首页",
        },
      }, {
        path: 'cate',
        component: Cart,
        meta: {
          title: "购物车",
        },
      }]
    },
  ]
}]
export const route = [{
  path: "/login",
  component: () => import("../views/login/index.vue"),
}, ...asyncRoute]

const router = new VueRouter({
  routes: route
})

export default router