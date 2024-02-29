<template>
  <div>
    <el-button id="snapshot-btn" type="primary" class="mt-10px">
      拍摄人脸照片
    </el-button>
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
const imgDataValue = ref();
const faceIdHandle = async () => {
  await nextTick();
  const previewBox = document.querySelector('#preview-box') as any; // 预览区
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(async (stream) => {
      previewBox.srcObject = stream;
      const snapshotBtn = document.querySelector('#snapshot-btn') as any; // 拍照按钮
      // canvas用来显示拍摄的照片
      snapshotBtn.addEventListener('click', async () => {
        await nextTick();
        const canvas = document.querySelector('canvas') as any;
        canvas
          .getContext('2d')
          .drawImage(previewBox, 0, 0, previewBox.width, previewBox.height);
        imgDataValue.value = canvas.toDataURL('image/jpeg');
      });
    });
};
onMounted(() => {
  faceIdHandle();
});
onUnmounted(() => {
  //   关闭摄像头
  const previewBox = document.querySelector('#preview-box') as any;
  const stream = previewBox.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
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
