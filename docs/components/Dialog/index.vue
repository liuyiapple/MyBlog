<template>
  <Dialog
    v-model:visible="showDialog"
    title="弹窗标题"
    @confirm="confirmHandel"
    :confirmLoading="confirmLoading"
  >
    这里可以填你的业务内容
  </Dialog>
  <el-button @click="openDialoghandle" type="primary">打开弹窗</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Dialog from './Dialog.vue';
const showDialog = ref(false);
const openDialoghandle = () => {
  showDialog.value = true;
};
const confirmLoading = ref(false);
const confirmHandel = () => {
  showDialog.value = false;
};
</script>
<style lang="less" scoped></style>
