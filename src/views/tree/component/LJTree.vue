<template>
  <el-tree
    :data="Alldata"
    :default-expand-all="true"
    :render-content="render"
    :expand-on-click-node="false"
    trigger="click"
  >
  </el-tree>
</template>

<script>
import deepClone from "loadsh/cloneDeep";
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      fileLIs: [{ value: "rm", name: "删除文件" }],
      wenjianjia: [
        { value: "rm", name: "删除文件" },
        { value: "em", name: "修改文件" },
      ],
      Alldata: [],
      soueceData: [],
      currentID: null,
      currentLable: "",
    };
  },
  methods: {
    FormData1(data) {
      //   console.log(data);
      // 保护数据
      // let Cdata = deepClone(data)
      let data1 = data.reduce((moment, current) => {
        moment[current.id] = current;
        return moment;
      }, {});
      let result = data.reduce((moment, current) => {
        let pid = current.pid;
        let parent = data1[pid];
        if (parent) {
          parent.children
            ? parent.children.push(current)
            : (parent.children = [current]);
        } else if (pid === 0) {
            moment.push(current);
        }
        return moment;
      }, []);
      this.Alldata = result;
    },
    render(h, { node, data, store }) {
      let list = data.type === "fa" ? this.fileLIs : this.wenjianjia;
      return (
        <div style={{ width: "100%" }}>
          {data.type === "fa" ? (
            <i class="el-icon-document-remove" />
          ) : node.expanded ? (
            <i class="el-icon-folder-opened" />
          ) : (
            <i class="el-icon-folder" />
          )}
          {data.id === this.currentID ? (
            <el-input on-input={this.handleEdit} value={this.currentLable} />
          ) : (
            data.label
          )}
          {data.id === this.currentID ? (
            <span>
              <el-button class="lj-bth" on-click={this.quxiao}>
                取消
              </el-button>
              <el-button
                class="lj-bth"
                on-click={() => this.EditSubmit(data.id)}
              >
                保存
              </el-button>
            </span>
          ) : (
            <el-dropdown
              trigger="click"
              on-command={(value) => {
                this.handleCommand(data, value);
              }}
            >
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                {list.map((v) => {
                  return (
                    <el-dropdown-item command={v.value}>
                      {v.name}
                    </el-dropdown-item>
                  );
                })}
              </el-dropdown-menu>
            </el-dropdown>
          )}
        </div>
      );
    },
    handleCommand(data, value) {
      if (value === "rm") {
        this.$confirm("确认删除？").then(() => {
          this.remove(data.id);
        });
      } else {
        (this.currentID = data.id), (this.currentLable = data.label);
      }
    },
    async remove(id) {
      let ClonData = deepClone(this.data);
      let res = await this.delete(ClonData, id);
      this.$message.success({
        message: "删除成功",
        duration: 1000,
      });
      this.FormData1(res);
    },
    delete(ClonData, id) {
      return new Promise((resolve) => {
        ClonData = ClonData.filter((v) => v.id !== id);
        this.$emit("ChangeData", ClonData);
        resolve(ClonData);
      });
    },
    handleEdit(value) {
      this.currentLable = value;
    },
    async EditSubmit(id) {
      await this.SubmitChange(id);
      let soueceData1 = deepClone(this.data);
      this.FormData1(soueceData1);
      this.currentID = 0;
      this.currentLable = "";
    },
    quxiao() {
      this.currentID = 0;
      this.currentLable = "";
    },
    SubmitChange(id) {
      return new Promise((resolve) => {
        let EditData = deepClone(this.data);
        let item = EditData.find((v) => v.id === id);
        item.label = this.currentLable;
        this.$emit("ChangeData", EditData);
        resolve();
      });
    },
  },
  created() {
    this.soueceData = deepClone(this.data);
  },
  mounted() {
    this.FormData1(this.soueceData);
  },
  // watch:{
  //   data:{
  //     deep:true,
  //     immediate:true,
  //     handler:function(newValue){
  //       this.FormData1(newValue)
  //     }
  //   }
  // }
};
</script>

<style lang='scss'>
.el-tree {
  width: 50%;
}
.el-dropdown {
  float: right !important;
}
.el-input__inner {
  height: 26px;
  margin-top: 26px;
}
.el-input {
  width: 56%;
}
.lj-bth {
  height: 8px;
  line-height: 2px;
}
</style>