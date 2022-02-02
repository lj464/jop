<template>
  <div>
    <el-container>
      <sideBar />
      <div class="context">
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
}
</style>
