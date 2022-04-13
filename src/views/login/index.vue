<template>
  <div>
    <div class="loginbox">
      <LjFormModel :rules="rules" ref="form" :model="form" class="contet">
        <Lj-form-item lable="用户名" prop="name" class="contet-item">
          <lj-input v-model="form.name" />
        </Lj-form-item>
        <Lj-form-item lable="密码" prop="password" class="contet-item">
          <lj-input type="password" v-model="form.password" />
        </Lj-form-item>
        <el-button @click="login" type="primary" style="margin-top: 39px">登录</el-button>
      </LjFormModel>
    </div>
  </div>
</template>

<script>
import LjFormModel from "./component/LjFormModel.vue";
import LjFormItem from "./component/LjFormItem.vue";
import LjInput from "./component/LJinput.vue";
export default {
  components: {
    LjFormItem,
    LjFormModel,
    LjInput,
  },
  data() {
    return {
      form: {
        name: "admin",
        password: "123",
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
              this.$message.success({
                message: "登录成功",
                duration: 1000,
              });
            })
            .catch((err) => {
              this.$message({
                message: "登录失败",
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
  margin-top: 30px;
}
.loginbox {
  margin: 0 auto;
  width: 400px;
  margin-top: 100px;
}
</style>
