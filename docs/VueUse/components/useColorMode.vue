<template>
  <el-switch @click="switchHandle" v-model="switchValue"></el-switch>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';
const switchValue = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
const switchHandle = () => {
  toggleDark();
};
</script>
<style lang="less" scoped></style>
