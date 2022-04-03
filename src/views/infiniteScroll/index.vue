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
    <h3 style="margin-bottom: 20px">vue虚拟长列表优化10000个节点长列表流畅滚动</h3>
    <div class="scrollBox">
      <Virtuallist
        :list="list"
        :itemHeight="50"
        :itemNum="5"
        :viewHeught="300"
        :variable="true"
      >
        <div class="item" slot-scope="{ item }">{{ item.value }}</div>
      </Virtuallist>
    </div>
  </div>
</template>

<script>
import infiniteScroll from "./infiniteScroll";
import Virtuallist from "./Virtuallist.vue";
// import Mock from "mockjs";
export default {
  directives: {
    infiniteScroll,
  },
  data() {
    return {
      delay: 200, //节流计算时间
      distance: 20, //滚动距离
      arr: ["1", "1"],
      list: [],
    };
  },
  components: {
    Virtuallist,
  },
  created() {
    let list = [];
    // 模拟不确定高度问题
    // for (let i = 0; i < 1000; i++) {
    //   list.push({ id: i, value: Mock.Random.sentence(5, 50) });
    // }
    for (let i = 0; i < 10000; i++) {
      list.push({ id: i, value: i });
    }
    this.list = list;
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
.item {
  border: 1px solid red;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 50px;
}
.scrollBox {
  width: 600px;
  margin: 0 auto;
  text-align: center;
}
</style>
