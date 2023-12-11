# API

## v-model

双向绑定 v-model 可以说是 Vue 的核心，那什么时候需要用到 v-model 呢

- 特点

  - 实现双向绑定
  - 单相向据流

#### 为什是双向绑定，却是单向数据流呢？

尽管 Vue 使用的是 MVVM（M：模型，V：视图，MV：视图模型） 的架构模式，然而，v-model 并不是真正的双向绑定，Vue 只是实现了“单向数据流”的机制来模拟双向绑定，这也就意味着数据从模型（数据对象）流向视图（DOM），但并不直接从视图流回模型。

在 Vue 中，视图更新触发模型更新，但是模型更新不会直接触发视图更新，相反，当模型中的数据发生改变时，Vue 会通过虚拟 DOMdiff 算法监测到这些变化，并更新用于视图。

单向数据流的设计有助于保持数据的一致性和可追踪性，可以使得数据流动的路径更为明确。

#### 使用场景

- 表单提交（input，textarea，checkbox）
- 组件共享参数，一个或多个

- 原理
  先实现一个简单的 v-model

#### 使用案例

```vue
<template>
  <h1>{{ msg }}</h1>
  <input type="text" @input="inputHandle" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const msg = ref('');
const inputHandle = (e) => {
  msg.value = e.target.value;
};
</script>
<style lang="less" scoped></style>
```

可以看到，我们在 input 输入的同时，使用 input 的 input 事件，拿到 事件对象 e，在事件对象 e 上可以获取到 e.target.value 也就是输入框的值，并对 msg 进行附值操作，这就是一个很简单的 v-model,当然，Vue 的 v-model 远远不止这些

- 常用的使用场景

这里是说父子组件使用 v-model 进行数据共享的案例

父组件

```vue{2}
<template>
  <Child v-model:status="status" />
  <div>父组件的Status：{{ status }}</div>
  <button @click="statusChange">父组件change</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Child from './child.vue';
const status = ref(false);

const statusChange = () => {
  status.value = !status.value;
};
</script>
<style lang="less" scoped></style>
```

子组件

```vue{9,11}
<template>
  <div>子组件的Status：{{ status }}</div>
  <button @click="childrenChange">子组件change</button>
</template>
<script lang="ts" setup>
defineProps<{
  status: boolean;
}>();
const emits = defineEmits(['update:status']);
const childrenChange = () => {
  emits('update:status', false);
};
</script>
<style lang="less" scoped></style>
```

在这里，我把 status 状态 通过 **_v-model:status="status"_** 传递给了子组件，当我点击父组件的 按钮，对 status 取反，同样的，子组件的状态也发生了改变，但是在子组件点击按钮，我这里使用到了 **defineEmits(['update:status'])**,这便是 v-model 携带指定参数更改的自定义事件，在这个例子中子组件接收到父组件 props 中的 status，并通 **updata:status** 事件更新父组件的值，这样，便实现了父子组件共同维护一个参数，当然，也可使用多个 v-model 进行维护多个参数，根据实际业务开发

- 使用场景：

  - 需要拆分组件，实现代码可服用行的弹窗，抽屉，等等，都需要在父组件打开，在子组件关闭，v-model 最适合不过了

- 修饰符
  - 常用的修饰符 .trim .number
  - 当然也可以自定义，这里就不赘述了

## computet 计算属性

日常开发中，当组件中的某一个数据需要依赖于其他数据的改变进行改变时，计算属性便是非常好的选择,我们看一个实例

```vue
<template>
  <div>
    <div>{{ isTrue }}</div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
const arr = ref([1, 2, 3]);

const isTrue = computed(() => {
  return arr.length > 0 ? 'true' : 'false';
});
</script>
<style lang="less" scoped></style>
```

<script lang='ts' setup>
import ComputedComponent from "./4-computed/index.vue"

</script>
<ComputedComponent/>

写到这里，如果读者认为文中有哪里时错误的，或者有任何欠妥，也非常欢迎联系我，或者吐槽我，我会加深学习，并继续更正
