<template>
  <div class="title">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  mounted() {
    setTimeout(() => {
      this.remove();
    }, this.duration);
  },
};
</script>

<style>
.title {
  position: fixed;
  top: 0px;
  left: 50%;
}
</style>
