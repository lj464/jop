<template>
  <el-menu>
    <sider-item
      v-for="(item, index) in $router.options.routes[1].children"
      :key="index"
      :item="item"
      :route="true"
    >
    </sider-item>
  </el-menu>
</template>

<script>
import siderItem from "./sidebarItem.vue";

export default {
  components: {
    siderItem,
  },
  created() {
    console.log(this.$router, "8888888888");
  },
};
</script>

<style></style>
