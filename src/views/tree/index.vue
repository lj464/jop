<template>
  <!-- 树形组件   -->
  <div style="width: 1200px">
    <lj-tree :data="data" @ChangeData="ChangeData" />
  </div>
</template>

<script>
import LjTree from "./component/LJTree.vue";
export default {
  components: {
    LjTree,
  },
  data() {
    return {
      data: [
        { label: "文件夹1", pid: 0, id: 1 },
        { label: "文件夹2", pid: 0, id: 2 },
        { label: "文件夹3", pid: 0, id: 3 },
        { label: "文件夹1-1", pid: 1, id: 4 },
        { label: "文件夹2-1", pid: 2, id: 5 },
        { label: "文件一", pid: 1, id: 10001, type: "fa" },
        { label: "文件二", pid: 1, id: 10002, type: "fa" },
        { label: "文件三", pid: 2, id: 10003, type: "fa" },
        { label: "文件四", pid: 2, id: 10004, type: "fa" },
        { label: "文件五", pid: 4, id: 10005, type: "fa" },
        { label: "文件六", pid: 5, id: 10006, type: "fa" },
      ],
    };
  },
  methods: {
    ChangeData(data) {
      this.data = data;
    },
  },
};
</script>

<style></style>
