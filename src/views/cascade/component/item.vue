<template>
  <div class="fa">
    <div class="box">
      <p v-for="(i, index) in arr" v-show="visible" @click="fn(i)" :key="index">
        {{ i.label }}
      </p>
    </div>
    <item1 :arr="er" v-if="er && er.length" :visible="visible" :value='value' :leve='leve+1'  @input='input' />
  </div>
</template>

<script>
import deepClone from 'loadsh/cloneDeep'
export default {
  name: "item1",
  props: {
    arr: {},
    // 显示
    visible: {},
    // 存放层级
    leve:{},
    // 存放数据
    value:{}
  },
  data() {
    return {
      current: "",
    };
  },
  methods: {
    fn(da) {
      let cloneValue = deepClone(this.value)
      cloneValue[this.leve] = da
      cloneValue.splice(this.leve +1)
      this.$emit('input',cloneValue)
    },
    input(cloneValue){
      this.$emit('input',cloneValue)
    }
  },
  computed: {
    er() {
      return this.value[this.leve] && this.value[this.leve].chindren;
    },
  },
};
</script>

<style>
.box {
  flex: 1;
}
.fa {
  display: flex;
  flex: 1;
}
</style>