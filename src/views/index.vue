<template>
  <div class="layou-box">
    <el-container>
      <sideBar />
      <div class="context">
        <div>
          <el-button class="loginout" @click="$router.push('/login')" type="primary">
            退出登录
          </el-button>
        </div>
        <router-view> </router-view>
      </div>
    </el-container>
  </div>
</template>

<script>
import sideBar from "../component/sidebar/sidebar.vue";
export default {
  components: {
    sideBar,
  },
};
</script>

<style scoped>
.context {
  padding-left: 20px;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.loginout {
  float: right;
  margin-right: 30px;
}
.el-container,
.layou-box {
  height: 100%;
}
</style>
