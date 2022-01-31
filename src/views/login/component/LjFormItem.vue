<template>
  <div>
    <label v-if="lable">{{ lable }}</label>
    <slot></slot>
    <p v-if="errmsg !== ''">{{ errmsg }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    lable: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errmsg: "",
    };
  },
  methods: {
    validate() {
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];
      const desc = { [this.prop]: rules };
      // 创建Schema实例
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errmsg = errors[0].message;
        } else {
          // 校验通过
          this.errmsg = "";
        }
      });
    },
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
};
</script>

<style></style>
