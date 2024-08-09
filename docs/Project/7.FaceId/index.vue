<template>
  <div>
    <el-button id="snapshot-btn" type="primary" class="mt-10px"> 拍摄人脸照片 </el-button>
    <div class="video-img">
      <div class="camer-video">
        视频区域
        <video id="preview-box" width="340" height="250" autoplay></video>
      </div>
      <div class="camer-video">
        图片区域
        <canvas width="340" height="250" class="cavas" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, onMounted, onUnmounted } from 'vue';

const imgDataValue = ref<HTMLImageElement | any>();

let stream: MediaStream | null = null;

const faceIdHandle = async () => {
  await nextTick();
  const previewBox = document.querySelector('#preview-box') as HTMLVideoElement; // 预览区

  navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(async (mediaStream) => {
    stream = mediaStream;
    previewBox.srcObject = stream;

    const snapshotBtn = document.querySelector('#snapshot-btn') as HTMLButtonElement; // 拍照按钮
    // canvas用来显示拍摄的照片
    snapshotBtn.addEventListener('click', async () => {
      await nextTick();
      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      canvas.getContext('2d')?.drawImage(previewBox, 0, 0, previewBox.width, previewBox.height);
      imgDataValue.value = canvas.toDataURL('image/jpeg');
    });
  });
};

onMounted(() => {
  faceIdHandle();
});

onUnmounted(() => {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    stream = null;
  }
});
</script>

<style lang="less" scoped>
.video-img {
  display: flex;
}
#preview-box {
  border: 1px solid green;
}
.cavas {
  border: 1px solid red;
}
.camer-video {
  display: flex;
  flex-direction: column;
}
</style>
