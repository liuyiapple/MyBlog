# 如何下载 base64 编码的附件

直接上代码

这种通用方法都会存放在一个 utils 方法的文件里，方便调用，那我们就把它倒出去吧

```js
// 转换Base64数据为Blob对象
export const base64ToBlob = (base64Data: any) => {
  const raw = window.atob(base64Data);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array]);
};
// 创建下载链接
export const createDownloadLink = (blob: any, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
};
```

使用

```js{12}
// 用前先倒入嘛，你自己在哪里封装的就去哪里倒
import { createDownloadLink, base64ToBlob } from '@/utils';
const downHandle = async (row) => {
  //  getData 是封装的 axios 方法，这里就不多说了
  const response = await getData('/getBase64', {
    // response 是响应到的接口数据
    params: {
      filePath: row.fileInfo.filePath,
    },
  });
  // 传入 base64 编码的数据 和 文件名的话，就看你自己的需求了，我这是从接口返回的数据里取的
  createDownloadLink(base64ToBlob(response.data), row.fileInfo.fileName);
};
```

举个例子

## 点击下面按钮试试看

<script setup> 
import File from "./File/index.vue"
</script>
<File/>
