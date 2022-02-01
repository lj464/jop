<template>
  <div class="messagebox">
    <p
      v-for="i in arr"
      :key="i.id"
      :style="{ color: i.type === 'err' ? 'red' : 'green' }"
    >
      {{ i.msg }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
      id: 0,
    };
  },
  methods: {
    // add并没有通过组件props传值，而是通过形参传递过来的
    // add方法第一把消息放到消息arr数组队列中，第二利用remove函数造成的闭包保存option对象，
    add(data) {
      let option = { ...data, id: this.id };
      this.arr.push(option);
      console.log("arr", this.arr);
      option.timer = setTimeout(() => {
        this.remove(option);
      }, option.duration);
      this.id++;
    },
    remove(option) {
      // 利用闭包保存的option对象获得消息id，然后对arr消息列表进行操作达到
      this.arr = this.arr.filter((v) => {
        return v.id !== option.id;
      });
    },
  },
};
</script>
<style scoped>
.messagebox {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
