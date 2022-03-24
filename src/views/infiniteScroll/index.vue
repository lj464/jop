<template>
  <div>
    <h3 style="margin-bottom: 20px">模仿element-ui的无线滚动功能实现</h3>
    <ul
      class="box"
      v-infinite-scroll="handleAdd"
      infinite-scroll-delay="delay"
      infinite-scroll-immediate="immediate"
      infinite-scroll-disabled="disabled"
      infinite-scroll-distance="distance"
    >
      <li v-for="(item, index) in arr" :key="index">{{ index + 1 }}</li>
    </ul>
  </div>
</template>

<script>
import infiniteScroll from "./infiniteScroll";
export default {
  directives: {
    infiniteScroll,
  },
  data() {
    return {
      delay: 200, //节流计算时间
      distance: 20, //滚动距离
      arr: ["1", "1"],
    };
  },
  methods: {
    handleAdd() {
      this.arr.push("1", "1");
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  height: 150px;
  overflow-y: scroll;
  width: 500px;
  margin: 50px auto;
  border: 1px solid;
  padding-right: 20px;
  li {
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
  }
}
/*滚动条样式*/
.box::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
.box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
