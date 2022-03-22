<template>
  <!-- 级联选择器的封装 -->
  <div>
    <h3 style="margin-bottom: 20px">级联选择器，主要运用的循环组件的技术</h3>
    <casder :option="data" v-model="value"></casder>
  </div>
</template>

<script>
import Casder from "./component/casder.vue";
let data = [
  {
    lable: "蔬菜",
    children: [
      {
        lable: "炒菜",
        children: [
          {
            lable: "土豆",
          },
        ],
      },
      {
        lable: "凉拌",
        children: [
          {
            lable: "黄瓜",
          },
        ],
      },
    ],
  },
  {
    lable: "肉类",
    children: [
      {
        lable: "生肉",
        children: [
          {
            lable: "羊肉",
          },
          {
            lable: "牛肉",
          },
        ],
      },
      {
        lable: "熟肉",
        children: [
          {
            lable: "熟牛肉",
          },
        ],
      },
    ],
  },
];
export default {
  components: {
    Casder,
  },
  data() {
    return {
      data,
      value: [],
    };
  },
};
</script>

<style></style>
