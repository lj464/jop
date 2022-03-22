<template>
  <div class="">
    <!-- <div>
      <div>基本表格</div>
      <LJTable
        :data="data"
        :columns="columns"
        :Schecked.sync="checked"
        :scrollHeight="scrollHeight"
      />
    </div> -->
    <div>
      <!-- 基于基本表格二次封装具有导入导出功能的表格 -->
      <h3 style="margin-bottom: 20px">
        基于基本表格二次封装具有前端解析导入导出功能的表格
      </h3>
      <export-table
        :data="data"
        :columns="columns"
        :Schecked.sync="checked"
        :scrollHeight="scrollHeight"
        @import="importTable"
      />
    </div>
  </div>
</template>

<script>
import ExportTable from "./component/exportTable/exportTable.vue";
// import LJTable from "./component/LJTable/LJTable.vue";
export default {
  components: {
    ExportTable,
    // LJTable,
  },
  data() {
    return {
      columns: [
        { title: "Name", key: "name" },
        { title: "Age", key: "age" },
        { title: "Sex", key: "sex" },
      ],
      data: [
        {
          id: 1,
          name: "zs",
          age: "14",
          sex: "男",
        },
        {
          id: 2,
          name: "ls",
          age: "14",
          sex: "男",
        },
        {
          id: 3,
          name: "w5",
          age: "14",
          sex: "男",
        },
        {
          id: 4,
          name: "w5",
          age: "14",
          sex: "男",
        },
        {
          id: 5,
          name: "w5",
          age: "14",
          sex: "男",
        },
        {
          id: 6,
          name: "w5",
          age: "14",
          sex: "男",
        },
        {
          id: 7,
          name: "w5",
          age: "14",
          sex: "男",
        },
        {
          id: 8,
          name: "w5",
          age: "14",
          sex: "男",
        },
        {
          id: 9,
          name: "w5",
          age: "14",
          sex: "男",
        },
        {
          id: 10,
          name: "w5",
          age: "14",
          sex: "男",
        },
      ],
      // 选中行
      checked: [],
      scrollHeight: 300, // 滚动条出现的高度
    };
  },
  methods: {
    importTable(data) {
      console.log("data", data); //获取导入数据
      this.data = [...this.data, ...data];
      this.$message.success("导入成功，此次导入" + data.length + "条数据");
    },
  },
  mounted() {
    console.log(this, "thissssssss");
  },
};
</script>

<style></style>
