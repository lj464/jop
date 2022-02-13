<template>
  <div>
    <upload action="xxx" :onProgress="handle" />
  </div>
</template>

<script>
import upload from "./component/upload.vue";
export default {
  components: {
    upload,
  },
  methods: {
    handle() {
      console.log("上传前回调");
    },
  },
};
</script>

<style></style>
