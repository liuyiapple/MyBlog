<template>
  <div>
    <span> 某快递单号：{{ expross }}</span> &nbsp;
    <el-icon @click="copyExprossHandle"><CopyDocument /></el-icon>
  </div>
  <hr />
  <el-input
    v-model="copyText"
    class="input-content"
    placeholder="请输入复制文本"
  />
  <br />
  <el-button type="primary" @click="copyHandel">一件复制</el-button>
</template>
<script lang="ts" setup>
import { useClipboard } from '@vueuse/core';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
const copyText = ref('');
const expross = ref('123123123');
const { copied, copy, isSupported, text } = useClipboard();
const copyHandel = () => {
  if (copyText.value.trim() == '') return ElMessage.error('请先输入文本内容');
  copy(copyText.value);
  ElMessage.success('复制成功');
};
const copyExprossHandle = () => {
  copy(expross.value);
  ElMessage.success('复制单号成功');
};
</script>
<style lang="less" scoped>
.input-content {
  width: 300px;
  margin-bottom: 10px;
}
</style>
