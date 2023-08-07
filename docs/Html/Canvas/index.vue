<template>
  <canvas id="canvas" ref="canvasRef"></canvas>
</template>

<script lang="ts" setup>
import { Ref, onMounted, ref, onBeforeMount } from 'vue';

const canvasRef = ref();

const drawCanvas = () => {
  const ctx = canvasRef.value?.getContext('2d');
  ctx.width = 400;
  ctx.height = 400;

  ctx.fillStyle = 'skyblue';
  ctx.stokeStyle = 'green';
  ctx.joinStyle = 'round'; // 交叉头
  ctx.lineWidth = 2; // 线段的宽度
  ctx.beginPath(); // 绘制路径
  ctx.moveTo(10, 10); // 起点
  ctx.lineTo(100, 100); // 终点
  ctx.lineTo(100, 40);
  ctx.lineTo(10, 10);
  ctx.stroke(); // 绘制线段

  ctx.beginPath(); // 绘制路径
  ctx.arc(200, 100, 50, 0, Math.PI); // 绘制圆
  ctx.fill(); // 填充
};
onMounted(() => {
  drawCanvas();
});
</script>

<style lang="less" scoped></style>
