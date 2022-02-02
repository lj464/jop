<template>
  <div class="lj-swiper" style="position: relative">
    <div class="view-port" @mouseenter="stop" @mouseleave="keepRun">
      <slot> </slot>
      <div class="point-box">
        <span
          :class="{ 'lj-point': true, activecolor: i === currentIndex }"
          v-for="(item, i) in names"
          :key="item + i"
          @click="currentIndex = i"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      Type: String,
      default: "",
    },
  },
  data() {
    return {
      names: [], //子组件所有的名称
      timer: "",
    };
  },
  mounted() {
    this.getChildData();
    this.runSwiper();
    this.keepRun();
  },
  methods: {
    // 将传入的选中值传入子swiper组件中
    runSwiper() {
      let value = this.value || this.names[0];
      this.$children.forEach((v) => {
        v.currentName = value;
      });
    },
    // 获取子组件的名称
    getChildData() {
      this.$children.forEach((v) => {
        this.names.push(v.name);
      });
    },
    // 设置定时器
    keepRun() {
      if (this.timer) return; // 防止重复设置定时器
      this.timer = setInterval(() => {
        let currentIndex = this.names.findIndex((v) => v === this.value);
        let nextIndex = currentIndex + 1;
        if (nextIndex === this.names.length) nextIndex = 0;
        // if (nextIndex === -1) nextIndex = this.names.length - 1;
        this.$children.forEach((v) => {
          v.reverse = nextIndex < this.currentIndex;
          if (nextIndex === 0) v.reverse = false;
        }); //设置子节点是否反向
        this.$emit("input", this.names[nextIndex]);
      }, 2000);
    },
    // 清除定时器
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  watch: {
    value: function () {
      console.log("触发了", this.value);
      this.runSwiper();
    },
  },
  computed: {
    // 获的当前索引和设置索引
    currentIndex: {
      get() {
        let currentIndex = this.names.findIndex((v) => v === this.value);
        return currentIndex;
      },
      set(val) {
        console.log(val, this.currentIndex);
        this.$children.forEach((v) => (v.reverse = val < this.currentIndex)); //设置子节点是否反向
        this.$emit("input", this.names[val]);
      },
    },
  },
  beforeDestroy() {
    this.stop();
  },
};
</script>

<style scoped>
.view-port {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #999;
  overflow: hidden;
}
.point-box {
  position: absolute;
  z-index: 20;
  bottom: 10px;
  left: 20px;
  display: flex;
}
.lj-point {
  width: 20px;
  height: 20px;
  display: block;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 10px;
}
.activecolor {
  background-color: #fff;
}
</style>
