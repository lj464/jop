<template>
  <el-menu>
    <sider-item
      v-for="(item, index) in targetaAddRoutes"
      :key="index"
      :item="item"
      :route="true"
    >
    </sider-item>
  </el-menu>
</template>

<script>
import siderItem from "./sidebarItem.vue";
import { mapState } from "vuex";
export default {
  components: {
    siderItem,
  },
  created() {
    console.log(this.$router, "8888888888");
  },
  computed: {
    ...mapState("permission", ["addRoutes"]),
    targetaAddRoutes() {
      // 找到有title属性的路由进行渲染侧边栏
      let target = [];
      for (let i = 0; i < this.addRoutes.length; i++) {
        if (this.addRoutes[i].meta?.title) {
          target.push(this.addRoutes[i]);
        }
      }
      return target;
    },
  },
};
</script>

<style></style>
