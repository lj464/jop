<template>
  <div class="">
    <LJTable :data="data" :columns="columns" :Schecked.sync="checked" :height="100" />
  </div>
</template>

<script>
import LJTable from "./component/LJTable.vue";
export default {
  components: {
    LJTable,
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
      ],
      // 选中行
      checked: [],
    };
  },
};
</script>

<style></style>
