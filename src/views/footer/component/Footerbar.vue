<template>
  <div class="tablebar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tablebar {
  display: flex;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 20px;
}
</style>
