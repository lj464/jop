<template>
  <div id="app">
    <lal :arr="arr" v-model="value" @input="select" />
    <router-view />
  </div>
</template>
<script>
import lal from "../components/lal.vue";
import data from "../data.json";
const getData = (pid) => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(data.filter((v) => v.pid == pid));
    }, 1000);
  });
};
export default {
  components: {
    lal,
  },
  data() {
    return {
      arr: [
        {
          lable: "蔬菜",
          value: "1",
          chindren: [
            {
              lable: "西红柿",
              value: "2",
            },
            {
              lable: "黄瓜",
              value: "3",
              chindren: [
                {
                  lable: "有子黄瓜",
                  value: "9",
                },
              ],
            },
          ],
        },
        {
          lable: "肉类",
          value: "4",
          chindren: [
            {
              lable: "牛肉",
              value: "5",
              chindren: [
                {
                  lable: "牛肉干",
                  value: "10",
                },
              ],
            },
            {
              lable: "羊肉",
              value: "6",
            },
          ],
        },
      ],
      value: [],
    };
  },
  async mounted() {
    this.arr = await getData(0);
    console.log(await getData(0));
  },
  methods: {
    async select(data) {
      let current = data[data.length - 1];
      console.log(data[data.length - 1]);
      let chindren = await getData(current.id);
      this.$set(current, "chindren", chindren);
    },
  },
};
</script>
<style lang="scss">
</style>
