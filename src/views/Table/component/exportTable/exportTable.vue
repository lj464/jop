<template>
  <div>
    <LJTable v-bind="$attrs" v-on="$listeners" />
    <div style="margin-top: 20px">
      <el-button @click="getTableAllData" type="primary">导出当前表格数据</el-button>
      <el-button @click="exportTemplate" type="primary">下载模板</el-button>
      <!-- <el-button @click="importButton" type="primary"> 导入数据 </el-button> -->
      <importButton :onSuccess="importButton" />
    </div>
  </div>
</template>

<script>
// import LJTable from "../LJTable/LJTable.vue";
import LJTable from "../LJTable/LJTable.vue";
// import importButton from "./component/importButton.vue";
import importButton from "./component/importButton.vue";
export default {
  // 导入导出逻辑写在这里
  components: {
    LJTable,
    importButton,
  },
  created() {},
  methods: {
    exportData(exportdata) {
      // 获取表格头数据
      let titles = this.$attrs.columns.map((v) => v.title);
      // 获取表格索引数据
      let entitle = this.$attrs.columns.map((v) => v.key);
      const data = this.formatJson(entitle, exportdata); // [第一行[数据1,数据2，数据3]]
      try {
        import("./vendor/Export2Excel").then((excel) => {
          excel.export_json_to_excel({
            header: titles,
            data: data,
            filename: "数据报表",
            autoWidth: true,
            bookType: "xlsx",
          });
          this.$message.success("导出报表成功！");
        });
      } catch (err) {
        this.$message.error("导出报表失败！");
      }
    },
    formatJson(filterVal, jsonData) {
      // 转换成导出数据格式
      return jsonData.map((v) =>
        filterVal.map((j) => {
          return v[j];
        })
      );
    },
    getTableAllData() {
      this.exportData(this.$attrs.data);
    },
    exportTemplate() {
      let data = [];
      this.exportData(data);
    },
    importButton(data) {
      console.log("data", data);
      let titles = this.$attrs.columns.map((v) => v.title);
      let header = data.header;
      let result = header.every((item, index) => {
        return titles[index] === item;
      });
      //   读取表格头是一致
      if (!result) {
        return this.$message.error("请使用模板0导入数据");
      }
      //
      let entitle = this.$attrs.columns.map((v) => v.key);
      let target = titles.map((v, i) => {
        return [v, entitle[i]];
      });
      target = Object.fromEntries(target); // 获取表格头和数据索引的枚举
      console.log(target, "target");
      //获取表格数据开始导入
      let readResult = data.results;
      let parseData = readResult.map((v) => {
        let obj = {};
        for (const key in v) {
          obj[target[key]] = v[key];
        }
        return obj;
      });
      this.$emit("import", parseData);
    },
  },
};
</script>

<style></style>
