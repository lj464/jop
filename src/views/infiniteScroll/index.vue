<template>
  <div>
    <ul
      class="box"
      v-infiniteScroll
      infinite-scroll-delay="delay"
      infinite-scroll-immediate="immediate"
      infinite-scroll-disabled="disabled"
      infinite-scroll-distance="distance"
    >
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
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
      delay: 500, //节流计算时间
      distance: 20, //滚动距离
    };
  },
};
</script>

<style scoped>
.box {
  height: 150px;
  width: 200px;
  overflow-y: scroll;
}
</style>
