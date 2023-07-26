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
