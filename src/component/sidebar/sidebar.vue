<template>
  <el-menu>
    <sider-item
      v-for="(item, index) in addRoutes[0].children"
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
  },
};
</script>

<style></style>
