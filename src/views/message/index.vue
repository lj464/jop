<template>
  <!-- 消息组件模拟element-ui 实现调用一个方法就能出现一个消息提示 -->
  <div>
    <h3 style="margin-bottom: 20px">模拟element-ui的$message功能</h3>
    <el-button @click="showSuccess" type="success">成功按钮</el-button>
    <el-button @click="showErr" type="danger">失败按钮</el-button>
    <el-button @click="showDefault" type="primary">默认按钮</el-button>
  </div>
</template>

<script>
import { Message } from "./component/message";
// 引入事件池
export default {
  methods: {
    showSuccess() {
      let data = {
        msg: "我是成功内容",
        duration: 2000,
      };
      Message.success(data);
    },
    showErr() {
      let data = {
        msg: "我是失败内容",
        duration: 2000,
      };
      Message.err(data);
    },
    showDefault() {
      Message.success();
    },
  },
};
</script>

<style scoped></style>
