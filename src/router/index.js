import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const Cart = () => import('../views/cart')
const routes = [{
    path: "/",
    component: () => import('../views/tree/index.vue')
  },
  {
    path: "/btn",
    component: () => import('../views/btn')
  },
  {
    path: "/table",
    component: () => import('../views/Table')
  },
  {
    path: "/footer",
    component: (resolve) => require(["../views/footer"], resolve),
    children: [{
      path: '/home',
      component: Cart
    }, {
      path: '/cate',
      component: Cart
    }, {
      path: '/shoping',
      component: Cart
    }, {
      path: '/my',
      component: Cart
    }, ]
  }
]

const router = new VueRouter({
  routes
})

export default router