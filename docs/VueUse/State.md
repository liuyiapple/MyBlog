# 开篇

Vue3 现如今已经非常成熟，虽然仍然会有一些小的版本更新，也是为开发者提供更好用的 API。**_Composition API_** 更是为我们的日常开发效率提高不少，随之又有很多优秀的开发者开发一些业务中常见的方法，那就是 **VueUse**。我也是第一次接触，就像之前在写 **React** 的时候，**aHooks** 这个库夜也是非常棒的。作为水平不好的我来说，只能使用大佬的封装，更快速的完成业务，也希望记录自己的学习过程，一起来看看 **VueUse** 吧。

## State

::: tip 状态相关，使用场景看个人吧
Elements 是关于 状态 的 API
:::

## createGLobalState

createGlobalState 是一个将状态保存在全局作用域中，以便于 Vue 实例使用。这里你完全可以理解成状态组件库，就跟 Vuex，pinia，mobx，redux 等等一样的状态保存库。使用起来一点也不比这些库逊色。

```js
// 创建 store

import { ref } from "vue";
import { createGlobalState } form "vueuse/core"
export const useGlobalStore = createGlobalState(() => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }
  return { count, increment }
})

```

在组件中使用

```vue
<template>
  <div>{{ count }}</div>
  <button @click="() => increment()">+</button>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '@/store/index.ts';
const { count, increment } = useGlobalStore();
</script>
<style lang="less" scoped></style>
```

就是这么简单 👍

## Elements

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
