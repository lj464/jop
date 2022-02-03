import Vue from 'vue'
import Vuex from 'vuex'
import { getStorage, setStorage} from '@/utils/storage.js'
import permission from './permission.js'
import {
    addRoute
} from '@/permission.js'
Vue.use(Vuex)
import message from 'element-ui/lib/message'
const store = new Vuex.Store({
    state: {
        token: getStorage('token') || ''
    },
    mutations: {
        settoken(state, token) {
            setStorage('token', token)
            state.token = token
        },
    },
    actions: {
        login({ commit}, data) {
            return new Promise((resolve, reject) => {
                if (data.password == 123) {
                    commit('settoken', data.name)
                    resolve('登录成功')
                    // 添加路由
                    addRoute(data.name)
                } else {
                    reject('密码错了')
                }
            })
        },
        //退出登录 
        Loginout({ commit}) {
            message.success({
                message:"退出成功"
            })
            commit('settoken','')
        }
    },
    modules: {
        permission
    },
    getters: {
        permission_routes: state => state.permission.addRoutes,
    }
})
export default store