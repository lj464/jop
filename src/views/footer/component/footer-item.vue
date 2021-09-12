<template>
  <div @click="itemClick">
    <div v-if="isActive">
      <slot name="image"> </slot>
    </div>
    <div v-else>
      <slot name="activeImage"></slot>
    </div>
    <div>
      <slot name="title"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   isActive: false,
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) === -1;
    },
  },
  //   created(){
  //       this.
  //   }
};
</script>

<style lang="scss" scoped>
div {
  flex: 1;
  text-align: center;
  img {
    width: 30px;
    margin: 0 auto;
    display: block;
  }
}
</style>
