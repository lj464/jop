<template>
  <div>
    <h3 style="margin-bottom: 20px">
      给document注册拖拽事件利用冒泡，可以100%检测到拖拽结束
    </h3>
    <div class="parent">
      可以移动的区域
      <drag v-bind="dragData"></drag>
    </div>
  </div>
</template>

<script>
import Drag from "./component";
export default {
  components: {
    Drag,
  },
  data() {
    return {
      dragData: {
        minx: 0, //x方向拖拽最小值
        miny: 0, // y方向拖拽最小值
        maxx: 200, //x方向最大值
        maxy: 300, //y方向最大值
        leftval: 200, //手动控制x方向的移动值
        topval: 250, //手动控制y方向的移动值
        isDrag: true, //是否可拖拽
      },
    };
  },
};
</script>

<style scoped>
.parent {
  position: relative;
  width: 350px;
  height: 450px;
  background-color: skyblue;
}
</style>
