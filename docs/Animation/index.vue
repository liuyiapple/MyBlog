<template>
  <div>
    <canvas ref="pinkboard"></canvas>
    <div class="title">花无缺，我喜欢你</div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const pinkboard = ref(null);
    let context = null;
    let particles = null;
    let particleRate = null;
    let time = null;

    function pointOnHeart(t) {
      return {
        x: 160 * Math.pow(Math.sin(t), 3),
        y:
          130 * Math.cos(t) -
          50 * Math.cos(2 * t) -
          20 * Math.cos(3 * t) -
          10 * Math.cos(4 * t) +
          25,
      };
    }

    const initialize = () => {
      context = pinkboard.value.getContext('2d');
      particles = new ParticlePool(settings.particles.length);
      particleRate = settings.particles.length / settings.particles.duration;
    };

    const render = () => {
      requestAnimationFrame(render);

      const newTime = new Date().getTime() / 1000;
      const deltaTime = newTime - (time || newTime);
      time = newTime;

      context.clearRect(0, 0, pinkboard.value.width, pinkboard.value.height);

      const amount = particleRate * deltaTime;
      for (let i = 0; i < amount; i++) {
        const pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
        const dir = { x: pos.x, y: pos.y };
        particles.add(
          pinkboard.value.width / 2 + pos.x,
          pinkboard.value.height / 2 - pos.y,
          dir.x,
          -dir.y
        );
      }

      particles.update(deltaTime);
      particles.draw(context, image);
    };

    onMounted(() => {
      initialize();
      render();
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(render);
    });

    return {
      pinkboard,
    };
  },
};
</script>

<style>
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
}

.title {
  width: 20%;
  height: 30%;
  /* 文字居中 */
  text-align: center;
  /* 字体大小 */
  font-size: 30px;
  /* 背景颜色 */
  background-color: transparent;
  /* 文字颜色 */
  color: rgba(247, 110, 206, 0.829);
  /* 左右居中 */
  margin: auto;
  /* 定位 */
  position: relative;
  /* 上边距 */
  top: 40%;
  /* 字体 */
  font-family: '幼圆';
}
</style>
