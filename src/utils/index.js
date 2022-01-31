import Vue from 'vue'
import message from '@/component/message.vue'
// 发布订阅库
let sub = function () {
    class subm {
        constructor() {
            this.$point = []
        }
        add(func) {
            this.$point.push(func)
        }
        remove(func) {
            this.$point.forEach((v, i) => {
                if (v === func) {
                    this.$point[i] = null
                }
            })
        }
        fire(...arg) {
            // this.$point.forEach(v=>{
            //     v.call(this,...arg)
            // })
            let point = this.$point
            for (let i = 0; i <= point.length; i++) {
                let item = point[i]
                if (item === null) {
                    point.splice(i, 1)
                    i--
                    continue
                }
                item.call(this, ...arg)
            }
        }
    }
    return subm
}()
export default sub
// 用函数创建消息组件
export function created(props) {
    const instance = new Vue({
        render(h) {
            return h(message, {
                props
            })
        }
    }).$mount()
    document.body.appendChild(instance.$el)
    const cop = instance.$children[0]
    cop.remove = () => {
        document.body.removeChild(instance.$el)
        instance.$destroy()
    }
    return cop
}