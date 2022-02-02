<template>
  <div>
    <swiper v-model="currentSele">
      <swiper-item name="box1">
        <div class="swiper-content" style="background-color: red">内1</div>
      </swiper-item>
      <swiper-item name="box2">
        <div class="swiper-content" style="background-color: blue">内容2</div>
      </swiper-item>
      <swiper-item name="box3">
        <div class="swiper-content" style="background-color: green">内容3</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import swiper from "./component/swiper.vue";
import swiperItem from "./component/swiperItem.vue";
export default {
  components: { swiper, swiperItem },
  data() {
    return {
      currentSele: "box1",
    };
  },
  mounted() {},
};
</script>

<style scoped>
.swiper-content {
  width: 400px;
  height: 250px;
}
</style>
