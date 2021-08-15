<template>
  <div>
    <p v-for="i in arr" :key="i.id">{{i.data}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
      id:0,
      timer:{}
    };
  },
  methods:{
    add(data){
      let option = {data , id : this.id }
      this.arr.push(option)
      option.timer = setTimeout(()=>{
        this.remove(option)
      } , 3000)
      this.id++
    },
    remove(option){
      // clearTimeout(option.timer)
      this.arr=this.arr.filter(v=>{
        return v.id!==option.id
      })
    }
  }
};
</script>