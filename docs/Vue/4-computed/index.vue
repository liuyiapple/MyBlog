<template>
  <div>
    <div>num : {{ num }}</div>
    <div>count : {{ count }}</div>
    <el-button type="primary" @click="addCountHandle"> 加一 </el-button>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
const a = {
  _value: 0,
};
const num = ref(0);
const count = computed(() => {
  console.log(num);
  return num.value + 1;
});
const addCountHandle = () => {
  num.value++;
};
</script>
<style lang="less" scoped></style>
