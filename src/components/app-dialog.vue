<template>
  <el-dialog
    class="xg-dialog"
    :title="title"
    v-model="visible"
    :before-close="handleClose"
    v-bind="$attrs"
    :width="width"
  >
    <slot></slot>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, ref } from "vue"
const props = defineProps({
  title: {
    type: String,
    default: "提示"
  },
  autoHeight: {
    type: Boolean,
    default: true
  },
  width: {
    type: [Number, String],
    default: "650px"
  }
})

const visible = ref(true)

const emit = defineEmits(["close", "confirm"])

// 关闭弹窗
const handleClose = () => {
  emit("close")
}

// 点击确定
const handleConfirm = () => {
  emit("confirm")
}
</script>

<style lang="less" scoped>
.body-wrapper {
  overflow: auto;
}
.autoHeight {
  max-height: 56vh;
}
.fixedHeight {
  height: 56vh;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>

<style lang="less">
.xg-dialog {
  .el-dialog__body {
    min-height: 200px;
    padding: 16px 24px;
  }
  .el-dialog__header {
    margin: 0 !important;
    border-bottom: 1px solid #ccc;
  }
  .el-dialog__footer {
    padding: 8px 16px !important;
    border-top: 1px solid #ccc;
  }
}
</style>
