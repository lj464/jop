<template>
  <div>
    <h3 style="margin-bottom: 20px">模仿element-ui实现的上传组件</h3>
    <div class="box">
      <upload
        v-bind="config1"
        :onProgress="Progress"
        :onSuccess="handleSuccess"
        :onExceed="onExceed"
        :onError="onError"
      />
      <upload
        v-bind="config2"
        :onProgress="Progress"
        :onSuccess="handleSuccess"
        :onExceed="onExceed"
        :onError="onError"
        class="second"
      >
        <el-button type="primary"> 点击上传 </el-button>
      </upload>
    </div>
  </div>
</template>

<script>
import upload from "./component/upload.vue";
export default {
  components: {
    upload,
  },
  data() {
    return {
      config1: {
        name: "file", //上传文件名
        action: "http://localhost:8080/upload", //上传地址
        fileList: [{ name: "文件1", url: "xxx" }], //文件列表
        limit: 4, //最多四个文件
      },
      config2: {
        name: "file", //上传文件名
        action: "http://localhost:8080/upload", //上传地址
        fileList: [{ name: "文件2", url: "xxx" }], //文件列表
        limit: 4, //最多四个文件
        action: ".jpeg", //上传文件类型
        drag: false, //自定上传样式
      },
    };
  },
  methods: {
    Progress(e) {
      console.log("上传进度回调函数", e);
    },
    handleSuccess(e) {
      console.log("上传成功回调", e);
    },
    onExceed(e) {
      console.log("超出最大上传限制的回调", e);
    },
    onError(e) {
      console.log(e, "上传失败回调函数");
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
}
.second {
  margin-left: 50px;
}
</style>
