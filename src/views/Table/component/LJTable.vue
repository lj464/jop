<template>
  <div class="table-wrapper" ref="tableWrapper">
    <div class="scroll" :style="{ 'max-height': scrollHeight + 'px' }">
      <table ref="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" @input="changeAll" ref="head" :checked="checkeds" />
            </th>
            <th v-for="column in columns" :key="column.key">
              {{ column.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>
              <input
                type="checkbox"
                :checked="isChecked(item)"
                @input="checked(item, $event)"
              />
            </td>
            <td v-for="item1 in columns" :key="item1.key">
              {{ item[item1.key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";
export default {
  props: {
    data: {
      Type: Array,
      default() {
        return [
          {
            id: 1, // key索引 value值
            name: "zs",
            age: "14",
            sex: "男",
          },
        ];
      },
    },
    columns: {
      Type: Array,
      default() {
        return [
          { title: "Name", key: "name" }, //title表格标题 key 数据索引
        ];
      },
    },
    Schecked: {
      Type: Array,
    },
    scrollHeight: {
      // 出现滚动条的高度
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      checkeds: false,
    };
  },
  methods: {
    checked(data, e) {
      let copyChecked = cloneDeep(this.Schecked);
      if (e.target.checked) {
        copyChecked.push(data);
      } else {
        copyChecked = copyChecked.filter((v) => {
          return v.id !== data.id;
        });
      }
      console.log(copyChecked);
      this.$emit("update:Schecked", copyChecked);
    },
    changeAll(e) {
      if (e.target.checked) {
        this.$emit("update:Schecked", [...this.data]);
      } else {
        this.$emit("update:Schecked", []);
      }
    },
    isChecked(item) {
      return this.Schecked.some((v) => v.id === item.id);
    },
  },
  watch: {
    Schecked(newV) {
      if (newV.length !== this.data.length) {
        if (newV.length !== 0) {
          return (this.$refs.head.indeterminate = true);
        }
        this.checkeds = false;
        this.$refs.head.indeterminate = false;
      } else {
        this.$refs.head.indeterminate = false;
        this.checkeds = true;
      }
    },
  },
  //   不能用计算属性
  computed: {
    computedCheck() {
      return this.Schecked.length == this.data.length;
    },
  },
  mounted() {
    let table = this.$refs.table;
    let copyTable = table.cloneNode();
    let tableWrapper = this.$refs.tableWrapper;
    let thead = table.children[0];

    tableWrapper.style.paddingTop = thead.offsetHeight + "px";
    copyTable.appendChild(thead);
    thead.classList.add("fiex-header");
    tableWrapper.appendChild(copyTable);
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
.table-wrapper {
  width: 80%;
  margin: 0 auto;
  position: relative;
  table {
    border-collapse: collapse;
  }

  table,
  th,
  td {
    border-bottom: 1px solid #ccc;
  }
  .fiex-header {
    position: absolute;
    top: 0px;
    width: 100%;
    tr {
      float: left;
      width: 100%;
      display: flex;
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      th {
        border-bottom: 1px solid #ccc;
        flex: 1;
      }
    }
  }
  table {
    border: 1px solid #ccc;
    border-top: none;
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    tr {
      float: left;
      width: 100%;
      display: flex;
      height: 35px;
      line-height: 35px;
      // border-bottom: 1px solid #ccc;
      text-align: center;
      td {
        flex: 1;
      }
    }
  }
}
/*滚动条样式*/
.scroll::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
