<template>
  <div class="viewport" @scroll="handleScroll" :style="{ height: viewHeught + 'px' }">
    <div
      :style="{
        transform: `translateY(${offsetTop}px)`,
        height: viewHeught + 'px',
        width: '100%',
      }"
    >
      <div
        class="content"
        v-for="(item, index) in showList"
        ref="item"
        :key="index"
        :data-myid="index"
        :style="{
          height: itemHeight + 'px',
        }"
      >
        <slot :item="item"></slot>
      </div>
    </div>
    <div ref="scrollBar" class="scrollBar" :style="{ height: barHeight + 'px' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    itemHeight: {
      type: Number,
      require: true, //每项多高
    },
    itemNum: {
      type: Number, //显示多少个
    },
    viewHeught: {
      type: Number, //视口高度
    },
    variable: {
      type: Boolean,
      default: false, //不确定子项多高
    },
  },
  data() {
    return {
      start: 0,
      offsetTop: 0,
      allPosition: [],
      barHeight: 0,
    };
  },
  computed: {
    // 多向上渲染一屏
    preStart() {
      return Math.min(this.start, this.itemNum);
    },
    // 多向下渲染一屏
    nextPre() {
      return Math.min(this.list.length - this.start + this.itemNum, this.itemNum);
    },
    showList() {
      return this.list.slice(
        this.start - this.preStart,
        this.start + this.itemNum + this.nextPre
      );
    },
  },
  methods: {
    handleScroll(e) {
      if (this.variable) {
        this.start = this.getitemStatr(e.target.scrollTop);
        // 设置高度
        this.setAllHeight();
        this.offsetTop = this.allPosition[this.start].top;
      } else {
        this.start = Math.floor(e.target.scrollTop / this.itemHeight);
        this.offsetTop = this.start * this.itemHeight - this.preStart * this.itemHeight; //多向下走多渲染的距离
      }
    },
    // 获得不确定高度的元素高度
    getitemStatr(data) {
      let sta = 0;
      let end = this.list.length;
      let middle = null;
      while (sta < end) {
        if (Math.floor((sta + end) / 2) === middle) {
          return middle;
        }
        middle = Math.floor((sta + end) / 2);
        let target = this.allPosition[middle].top;
        if (target === data) {
          return middle;
        } else if (target > data) {
          // 过了
          end = middle;
        } else if (target < data) {
          // 少了
          sta = middle;
        }
      }
    },
    // 修正allPosition里的高度
    setAllHeight() {
      let nodes = this.$refs.item;
      // 设置初始高度;
      // nodes.forEach((v) => {
      for (let i = 0; i < nodes.length; i++) {
        let v = nodes[i];
        let { height } = v.getBoundingClientRect();
        this.allPosition[v.getAttribute("data-myid")].height = height;
      }
      let top = 0;
      this.allPosition.forEach((v) => {
        v.top = top;
        top = v.height + top;
      });
      // 设置滚动条高度
      this.barHeight =
        this.allPosition[this.allPosition.length - 1].top +
        this.allPosition[this.allPosition.length - 1].height;
    },
  },
  beforeCreate() {},
  created() {
    // 记录所有点的位置信息系
    this.barHeight = this.list.length * this.itemHeight;
    if (this.variable) {
      this.list.forEach((v, index) => {
        let obj = {
          height: this.itemHeight,
          top: index * this.itemHeight,
        };
        this.allPosition.push(obj);
      });
    }
  },
  mounted() {
    if (this.variable) {
      this.setAllHeight();
    }
  },
};
</script>

<style scoped>
.viewport {
  overflow-y: scroll;
  flex-wrap: wrap;
  display: flex;
  overflow-x: hidden;
}
</style>
