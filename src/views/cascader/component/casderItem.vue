<template>
  <div class="contextBox">
    <div class="context">
      <div
        v-for="(item, i) in option"
        :key="i"
        @click="selece(item)"
        class="context-item"
      >
        {{ item.lable }}
      </div>
    </div>
    <div v-if="sonOption && sonOption.length">
      <ljcasderItem
        :option="sonOption"
        @change="cahnge"
        :leve="leve + 1"
        :value="value"
      ></ljcasderItem>
    </div>
  </div>
</template>

<script>
export default {
  name: "ljcasderItem",
  props: {
    option: {
      type: Array,
    },
    leve: {
      type: Number, //当前层级
    },
    value: {
      type: Array,
    },
  },
  data() {
    return {
      currentSelect: {},
    };
  },
  methods: {
    selece(val) {
      let cloneValue = JSON.parse(JSON.stringify(this.value));
      cloneValue[this.leve] = val;
      cloneValue = cloneValue.splice(0, this.leve + 1);
      this.$emit("change", cloneValue);
      this.currentSelect = val;
    },
    // 子向上触发change事件
    cahnge(val) {
      this.$emit("change", val);
    },
  },
  computed: {
    sonOption: function () {
      return this.value[this.leve]?.children;
    },
  },
};
</script>

<style scoped>
.contextBox {
  display: flex;
}
.context {
  width: 80px;
  min-height: 200px;
  border: 1px solid #ccc;
  margin-right: -1px;
}
.context-item {
  text-align: center;
}
.context-item:hover {
  background-color: #ccc;
}
</style>
