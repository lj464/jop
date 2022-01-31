<template>
  <div>
    <div>
      <LjFormModel :rules="rules" ref="form" :model="form" class="contet">
        <LjFormItem lable="用户名" prop="name" class="contet-item">
          <LJinput v-model="form.name" />
        </LjFormItem>
        <LjFormItem lable="密码" prop="password">
          <LJinput type="password" v-model="form.password" />
        </LjFormItem>
        <LjFormItem>
          <button @click="login">登录</button>
        </LjFormItem>
      </LjFormModel>
    </div>
  </div>
</template>

<script>
import LjFormModel from "./component/LjFormModel.vue";
import LjFormItem from "./component/LjFormItem.vue";
import LJinput from "./component/LJinput.vue";
export default {
  components: {
    LJinput,
    LjFormItem,
    LjFormModel,
  },
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((isok) => {
        if (isok) {
          this.$store
            .dispatch("login", this.form)
            .then(() => {
              this.$router.push("/tree");
              this.$LjMessage({
                title: "登录成功",
                duration: 1000,
              });
            })
            .catch((err) => {
              this.$LjMessage({
                title: "登录失败",
                duration: 1000,
              });
            });
        }
      });
    },
  },
};
</script>

<style scoped>
.contet {
  text-align: center;
}
.contet > div {
  margin-top: 20px;
}
</style>
