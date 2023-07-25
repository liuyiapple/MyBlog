<template>
  <el-button @click="downHandle" type="primary">
    <el-icon><Download /></el-icon>下载附件
  </el-button>
  <el-button @click="checkFile">查看base64编码</el-button>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { baseData } from './base64';
const base64ToBlob = (base64Data: any) => {
  const raw = window.atob(base64Data);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array]);
};
const checkFile = () => {
  ElMessage.success('请在控制台查看');
  console.log(baseData);
  console.log('真的是base64编码');
};
// 创建下载链接
const createDownloadLink = (blob: any, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
};
const downHandle = () => {
  createDownloadLink(base64ToBlob(baseData), 'base64.docx');
};
</script>
<style lang="less" scoped></style>
