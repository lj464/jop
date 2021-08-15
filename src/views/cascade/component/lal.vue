<template>
  <div v-outClick='close' class="box">
    <div class="title" @click='toggleshow'>
      {{resule}}
    </div>
    <item :arr="arr" :leve='0' :visible='visible' :value="value" @input="select" />
  </div>
</template>

<script>
import directive from '../directive/index' 
import item from './item.vue'
export default {
  components:{
    item
  },
  props:{
    arr:{
    },
    value:{

    }
  },
  data(){
    return {
      visible:false,
      current:'',
    }
  },
  directives:{
    outClick:directive
  },
  computed:{
    resule(){
      return this.value.map(v=>v.label).join('-')
    }
  },
  methods:{
    toggleshow(){
      this.visible = !this.visible
    },
    close(){
      console.log('1');
      this.visible = false
    },
    change(data){
      this.value = data
    },
     select(data){
      this.$emit('input' , data)
    }
  },
}
</script>

<style>
  .title {
    width: 250px;
    height: 50px;
    border: 1px solid #000;
  }
  .box {
    display: inline-block;
  }
</style>