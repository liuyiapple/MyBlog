# Elements

::: tip 对元素的控制
Elements 是关于 DOM 和 浏览器 操作的一些 API
:::

## useActiveElement

这里的原生 DOM 操作为 DocumentOrShadowRoot.activeElement 能够知道当前哪个 Input 输入框处于聚焦的状态，使用方法也很简单，当我们有大量的 Input 需要监听时便可以使用到这个 Hook，下面是一个简单实用案例

```vue{13,15,19,20}
<template>
  <div>
    <el-input placeholder="1" />
    <el-input placeholder="2" />
    <el-input placeholder="3" />
    <el-input placeholder="4" />
    <el-input placeholder="5" />
  </div>
</template>
<script lang="ts" setup>
import { useActiveElement } from '@vueuse/core';
import { watch } from 'vue';
const activeElements = useActiveElement();

watch(activeElements, (el) => {
  // 这里可以直接打印到聚焦的一个输入框的DOM
  console.log(el);

  // 让然你希望拿到聚焦的内容的时候，也是便于操作的,
 // 只需要v-model 绑定，通过 el.value 就可以获得
});
</script>
```

## useDocumentVisibility

用来监测用户离开当前网页的一个状态，使用了 Document.visibilityState 原生 API，具体的使用场景可以用到埋点，监测考试等场景，尽享数据上报

具体使用方法

```vue{7}
<template>
  <div>当前考生离开考试页面了{{ count }}次</div>
</template>
<script lang="ts" setup>
import { useDocumentVisibility } from '@vueuse/core';
import { ref, watch } from 'vue';
const DocumentVisibility = useDocumentVisibility();
const count = ref(0);
watch(
  () => DocumentVisibility.value,
  () => {
    count.value++;
  }
);
</script>
```
