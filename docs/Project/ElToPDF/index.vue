<template>
  <div id="el-ptf">ElementToPDF转换</div>

  <el-button class="btn" type="primary" @click="downLoadHandle">点击下载pdf</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const downLoadHandle = async () => {
  const element = document.getElementById('el-ptf');

  if (element) {
    // 生成元素截图
    const canvas = await html2canvas(element, {
      scale: 3, // 缩放比例，这里是为了让图片清晰一些
      useCORS: true, // 允许跨域
      backgroundColor: null, // 背景透明，不然会出现黑边
    });

    // 获取canvas的宽高
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // 将canvas转换为图片数据
    const imgData = canvas.toDataURL('image/jpeg'); // 这一步是需要作为base64的图片数据，看具体需求，可有可无

    // 创建PDF时，页面的宽度和高度要根据图片的比例动态调整
    const pdf = new jsPDF({
      orientation: imgWidth > imgHeight ? 'landscape' : 'portrait', // 根据图片的宽高比选择横向或纵向
      unit: 'px',
      format: [imgWidth, imgHeight], // 使用图片的宽高作为PDF页面大小
    });

    // 将图片以等比例添加到PDF中
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    pdf.save('你要生成的名字.pdf');
  }
};
</script>
<style scoped lang="less">
#el-ptf {
  height: 200px;
  background-color: rgb(18, 62, 192);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  margin-top: 20px;
}
</style>
