<template>
  <el-button type="primary" @click="submitHandel" :loading="loading">
    带有Loading效果的按钮
  </el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const loading = ref(false);
const submitHandel = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = !loading.value;
  }, 1000);
};
</script>
<style lang="less" scoped></style>
