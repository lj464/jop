<template>
  <div>
    <div
      class="box"
      @mousedown="dragStart"
      :style="{ left: moveX + 'px', top: moveY + 'px', cursor: isDrag?'move':'default' }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftval: {
      type: Number, //修正值X
      default: 0,
    },
    topval: {
      type: Number, //修正值Y
      default: 0,
    },
    isDrag: {
      type: Boolean,
      default: true,
    },
    maxx: {
      type: Number,
      default: Infinity,
    },
    maxy: {
      type: Number,
      default: Infinity,
    },
  },
  data() {
    return {
      diffX: 0, //鼠标起點X
      diffY: 0, //鼠标终点y
      moveX: 0,
      moveY: 0,
      startDrag: false,
    };
  },
  methods: {
    dragStart(e) {
      if (!this.isDrag) return;
      this.diffX = e.clientX - e.target.offsetLeft - this.moveX;
      this.diffY = e.clientY - e.target.offsetTop - this.moveY;
      document.addEventListener("mousemove", this.dragMove);
      document.addEventListener("mouseup", this.dragEnd);
      // e.target.startDrag = true;
      this.startDrag = true;
      if (typeof e.target.setCapture !== "undefined") {
        e.target.setCapture();
      }
    },
    dragMove(e) {
      if (!this.startDrag) return;
      var moveX = e.clientX - this.diffX;
      var moveY = e.clientY - this.diffY;
      if (moveX < 0) {
        moveX = 0;
      } else if (moveX > this.maxx) {
        moveX = this.maxx;
      }
      if (moveY < 0) {
        moveY = 0;
      } else if (moveY > this.maxy) {
        moveY = this.maxy;
      }
      this.moveX = moveX;
      this.moveY = moveY;
    },
    dragEnd(e) {
      if (typeof e.target.setCapture !== "undefined") {
        e.target.setCapture();
      }
      document.removeEventListener("mousemove", this.dragMove);
      document.removeEventListener("mouseup", this.dragEnd);
      this.startDrag = false;
    },
  },
  watch: {
    leftval: {
      handler: function () {
        this.moveX = this.leftval;
      },
      immediate: true,
    },
    topval: {
      handler: function () {
        this.moveY = this.topval;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped >
.box {
  position: absolute;
  z-index: 10;
}
</style>
