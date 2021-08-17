import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
]

const router = new VueRouter({
  routes
})

export default router