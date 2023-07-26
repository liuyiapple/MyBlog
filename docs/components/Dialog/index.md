<script setup>
import Dialog from "./index.vue";
</script>

<Dialog/>

## 源代码

封装的并不是很完善，如果你有不错的想法，欢迎提出来，我会第一时间更新

::: details 查看代码

```vue
<template>
  <el-dialog
    v-model="visible"
    v-bind="props"
    destroy-on-close
    draggable
    @close="closeHandle"
  >
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelHandel">{{ cancelText }}</el-button>
        <el-button
          type="primary"
          @click="confirmHandel"
          :loading="confirmLoading"
        >
          {{ confirmText }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
const props = withDefaults(
  defineProps<{
    visible: boolean;
    width: string;
    cancelText: string;
    confirmText: string;
    confirmLoading?: boolean;
  }>(),
  {
    width: '30%',
    cancelText: '取消',
    confirmText: '确定',
    confirmLoading: false,
  }
);
const emits = defineEmits(['update:visible', 'confirm', 'cancel', 'close']);
const cancelHandel = () => {
  emits('update:visible', false);
};
const confirmHandel = () => {
  emits('confirm');
};
const closeHandle = () => {
  emits('update:visible', false);
};

watch(
  () => props.visible,
  () => {
    visible.value = props.visible;
  },
  {
    deep: true,
  }
);
const visible = ref(props.visible);
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
```

:::

## 如何使用

```vue{8}
<template>
  <Dialog
    v-model:visible="showDialog"
    title="弹窗标题"
    @confirm="confirmHandel"
    :confirmLoading="confirmLoading"
  >
    这里可以填你的业务内容
  </Dialog>
  <el-button @click="openDialoghandle" type="primary">打开弹窗</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Dialog from './Dialog.vue';

const showDialog = ref(false);

const openDialoghandle = () => {
  showDialog.value = true;
};

const confirmLoading = ref(false);

const confirmHandel = () => {
  showDialog.value = false;
};
</script>
```

支持了几乎 dialog 所有的 api，你不再需要关注 dialog 本身，而是更注重自身的业务场景，一切 api，只需要传入组件就能使用，组件默认使用到了 **destroy-on-close** 如果你的业务有所需求，那就自己传入把他挤掉就行
