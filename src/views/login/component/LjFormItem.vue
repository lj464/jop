<template>
  <div class="lj-lable">
    <label v-if="lable">{{ lable }}</label>
    <slot></slot>
    <p v-if="errmsg !== ''" class="lj-error-msg" style="color: red">{{ errmsg }}</p>
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

<style scoped>
.lj-lable {
  margin: 0 auto;
  display: flex;
  position: relative;
}
.lj-lable label {
  font-size: 20px;
  display: block;
  width: 150px;
}
.lj-error-msg {
  position: absolute;
  left: 50%;
  transform: translate(-22%, 130%);
}
</style>
