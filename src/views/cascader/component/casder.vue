<template>
  <div v-out-click-close="closeShow">
    <div class="seleceValue" @click="triggleShow">
      {{ lableVal }}
    </div>
    <div v-show="showList">
      <casder-item
        @change="change"
        :option="option"
        :value="value"
        :leve="0"
      ></casder-item>
    </div>
  </div>
</template>

<script>
import casderItem from "./casderItem.vue";
export default {
  props: {
    option: {
      type: Array,
      require: true,
    },
    value: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      showList: true,
    };
  },
  components: {
    casderItem,
  },
  methods: {
    triggleShow() {
      this.showList = !this.showList;
    },
    closeShow() {
      this.showList = false;
    },
    change(val) {
      this.$emit("input", val);
    },
  },
  directives: {
    //如果点击到document则关闭列表额
    outClickClose: {
      inserted(el, option) {
        const targetFun = function (e) {
          if (e.target === el || el.contains(e.target)) {
            return;
          } else {
            option.value();
          }
        };
        document.addEventListener("click", targetFun);
        // 保存关闭函数
        el.targetClickFn = targetFun;
      },
      unbind(el) {
        //移除事件
        document.removeEventListener("click", el.targetClickFn);
      },
    },
  },
  computed: {
    lableVal: function () {
      return this.value.map((v) => v.lable + "/").join("");
    },
  },
};
</script>

<style scoped>
.seleceValue {
  width: 200px;
  height: 30px;
  border: 1px solid #333;
}
</style>
