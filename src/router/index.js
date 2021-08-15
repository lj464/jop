import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:()=>import('../views/tree/index.vue')
  },
  {
    path:"/btn",
    component:()=>import('../views/btn')
  },
]

const router = new VueRouter({
  routes
})

export default router
