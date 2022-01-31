import Vue from 'vue'
import Vuex from 'vuex'
import {
    getStorage,
    setStorage
} from '@/utils/storage.js'
// import permission from './permission.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: getStorage('token') || ''
    },
    actions: {
        login({
            commit
        }, data) {
            return new Promise((resolve, reject) => {
                if (data.password == 123) {
                    commit('settoken', '123')
                    resolve('登录成功')
                } else {
                    reject('密码错了')
                }
            })
        }
    },
    mutations: {
        settoken(state, token) {
            setStorage('token', token)
            state.token = token
        }
    },
    // modules: {
    //     permission
    // },
    // getters: {
    //     permission_routes: state => state.permission.routes,
    //   }
})
export default store