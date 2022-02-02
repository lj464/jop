<template>
  <div>
    <input
      style="height: 25px; flex: 1"
      :value="value"
      @input="change"
      v-bind="$attrs"
      @blur="validate"
      class="lj-input"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["value"],
  methods: {
    change(e) {
      this.$emit("input", e.target.value);
    },
    validate() {
      this.$parent.$emit("validate");
    },
  },
};
</script>

<style scoped>
.lj-input {
  padding-left: 10px;
}
</style>
