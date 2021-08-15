import message from './message.vue'
import Vue from 'vue'
let instance 
let getInstanceVue =()=>{
    instance = new Vue({
        render :h => h(message)
    }).$mount()
    document.body.appendChild(instance.$el)
}
const Message = {
    success(message){
        !instance && getInstanceVue()
        console.log(instance);
        instance.$children[0].add(message)
        
    }
}
export {Message}