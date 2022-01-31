<template>
  <div>
    <el-container>
      <sideBar />
      <router-view> </router-view>
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

<style></style>
