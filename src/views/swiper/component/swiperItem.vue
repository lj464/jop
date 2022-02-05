<template>
  <div :class="{ reverse }">
    <transition>
      <slot v-if="currentName === name"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      Type: String,
      require: true,
    },
  },
  data() {
    return {
      currentName: "",
      reverse: false,
    };
  },
};
</script>

<style scoped>
.v-leave-active,
.v-enter-active {
  transition: all 0.5s;
}
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
}
.reverse .v-enter {
  transform: translateX(-100%);
}
.reverse .v-leave-to {
  transform: translateX(100%);
}
.v-leave-active {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
