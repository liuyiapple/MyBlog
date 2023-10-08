<template>
  <div ref="el" :style="style" style="position: fixed" class="dragg-box">
    🤘 useDraggable 试试拖拽 <br />
    x: {{ x.toFixed(0) }}, y:{{ y.toFixed(0) }}
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRef, ref } from 'vue';
import { useDraggable } from '@vueuse/core';
const el = ref<HTMLElement | null>(null);
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 1400, y: 700 },
});
</script>
<style lang="less" scoped>
.dragg-box {
  width: 220px;
  height: 70px;
  background-color: #d3cece;
  cursor: move;
  z-index: 9999;
  border-radius: 8px;
  padding: 10px;
}
</style>
