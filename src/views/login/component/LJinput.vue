<template>
  <input type="text" :value="value" @input="change" v-bind="$attrs" @blur="validate" />
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

<style></style>
