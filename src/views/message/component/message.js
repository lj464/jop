import message from './message.vue'
import Vue from 'vue'
// 分装思路
let instance
// 先用Vue把虚拟DOM转换为真实DOM 然后放到document.body中
let getInstanceVue = () => {
    instance = new Vue({
        render: h => h(message)
    }).$mount()
    document.body.appendChild(instance.$el)
}
const Message = {
    config: {
        msg: "我是默认内容",
        duration: 3000, // 默认时间3秒
        type: 'success' //默认颜色绿色
    },
    success(message = {}) {
        !instance && getInstanceVue()
        // 设置消息类型为success并设置默认配置
        let data = {
            ...this.config,
            ...message,
        }
        console.log('data',data);
        // instance.$children[0]是组件实例可以调用message.vue中的add方法
        instance.$children[0].add(data)
    },
    err(message = {}) {
        !instance && getInstanceVue()
        // 设置消息类型为success并设置默认配置
        let data = {
            ...this.config,
            ...message,
            type: 'err'
        }
        // instance.$children[0]是组件实例可以调用message.vue中的add方法
        instance.$children[0].add(data)
    }
}
export {
    Message
}