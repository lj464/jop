<template>
  <div>
    <!-- 没有孩子并且有title -->
    <router-link v-if="!item.children" :to="basePath + item.path">
      <el-menu-item>{{ item.meta.title }} </el-menu-item>
    </router-link>
    <el-submenu v-else>
      <router-link :to="basePath + item.path" slot="title">
        <el-menu-item>{{ item.meta.title }} </el-menu-item>
      </router-link>
      <sidebar-item
        v-for="child in item.children"
        :basePath="basePath + item.path + '/'"
        :key="child.path"
        :item="child"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    basePath: {
      type: String, //基本路径
      default: "/",
    },
  },
  methods: {
    // resolvePath(routePath) {
    //   return path.resolve(this.basePath, routePath);
    // },
  },
  name: "sidebarItem",
};
</script>

<style></style>
