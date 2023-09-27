<template>
  <el-input
    placeholder="输入一个参数试试看"
    v-model="codeURL"
    class="input_content"
  />
  <el-button @click="showCodeHandle">展示弹窗</el-button>
</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus';
import qrcode from 'qrcode';
import { ref } from 'vue';
const codeURL = ref<string>('');
const showQrCode = async (
  url: string,
  alt: string = '二维码',
  title: string | undefined = '访问链接'
) => {
  const ImgCode = await qrcode.toDataURL(url);
  ElMessageBox.alert(`<img src="${ImgCode}" alt=${alt} />`, title, {
    dangerouslyUseHTMLString: true,
    showConfirmButton: false,
    showCancelButton: false,
    center: true,
  });
};
const showCodeHandle = () => {
  if (!codeURL.value) return ElMessage.error('请输入参数');
  showQrCode(codeURL.value);
};
</script>
<style lang="less" scoped>
.image_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input_content {
  margin-bottom: 40px;
}
:deep(.el-message-box) {
  width: 0;
}
</style>
