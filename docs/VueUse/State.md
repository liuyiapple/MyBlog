# State

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
