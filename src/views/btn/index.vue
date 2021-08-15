<template>
  <button @click="fn">按钮</button>
</template>

<script>

import {Message} from './component/message'
// 引入事件池
import sub from '../../utils/index'
const pond = new sub()
export default {
    methods:{
        fn(){
            pond.add(this.fn1)
            pond.add(this.fn2)
            pond.add(this.fn3)
            pond.fire()
        },
        fn1(){
            console.log('1');
        },
        fn2(){
            console.log('2');
        },
        fn3(){
            Message.success('123')
        }
    }
}
</script>

<style>

</style>