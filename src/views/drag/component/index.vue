<template>
  <div class="parentbox" :style="{ left: minx + 'px', top: miny + 'px' }">
    <base-drag v-bind="$attrs">
      <template #default>
        <slot>
          <div class="Defaultdrag">我是默认推拽内容</div>
        </slot>
      </template>
    </base-drag>
  </div>
</template>

<script>
import BaseDrag from "../component/base-drag.vue";
export default {
  props: {
    minx: {
      type: Number,
      default: 0,
    },
    miny: {
      type: Number,
      default: 0,
    },
  },
  components: {
    BaseDrag,
  },
  data() {
    return {
      top: 0,
      left: 0,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
};
</script>

<style scoped>
.parentbox {
  position: absolute;
}
.Defaultdrag {
  width: 150px;
  height: 150px;
  border: 1px solid #000;
  user-select: none; /* 防止选中文本*/
}
</style>
