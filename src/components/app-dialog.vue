<template>
  <el-dialog
    class="xg-dialog"
    :title="title"
    width="60%"
    v-model="visible"
    :before-close="handleClose"
    v-bind="$attrs"
  >
    <div class="body-wrapper" :class="autoHeight ? 'autoHeight' : 'fixedHeight'">
      <slot></slot>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button v-if="showCancelButton" @click="handleClose">取消</el-button>
        <el-button v-if="showConfirmButton" type="primary" @click="handleConfirm">确认</el-button>
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
</style>

<style lang="less">
.xg-dialog {
  .el-dialog__body {
    min-height: 200px;
    padding: 16px;
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
