<template>
  <el-table :data="data" border>
    <template v-for="item in props">
      <el-table-column v-if="item.render" v-bind="item">
        <template #default="scope">
          <renderSlot :render="item.render" :data="scope"></renderSlot>
        </template>
      </el-table-column>
      <el-table-column v-bind="item" v-else />
    </template>
  </el-table>
</template>

<script lang="tsx" setup>
import { props, data } from './props';
import { defineComponent } from 'vue';
const renderSlot = defineComponent({
  props: {
    render: Function,
    data: Object,
  },
  render: ({ render, data }: { render: Function; data: { row: object } }) => {
    return render(data.row, data);
  },
});
</script>
<style></style>
