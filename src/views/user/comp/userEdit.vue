<template>
  <div class="userEdit">
    <app-dialog title="基础信息" width="40%" @close="handleClose" :visible="visible">
      <el-form :model="formData" label-width="42px" ref="formRef" :rules="accountRules">
        <el-form-item label="名称" prop="name">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="密码" prop="phone">
          <el-input v-model="formData.phone" />
        </el-form-item>
        <el-form-item label="生效时间" prop="time"> </el-form-item>
        <el-form-item label="所属部门" prop="departmentId">
          <el-input v-model="formData.departmentId" />
        </el-form-item>
      </el-form>
    </app-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import AppDialog from "@/components/app-dialog.vue"

const visible = ref(true)
const formData = reactive({
  name: "",
  phone: "",
  departmentId: "",
  pic: "",
  roleId: "",
  beginTime: "",
  endTime: ""
})

const emit = defineEmits(["confirm", "close"])

// 关闭弹窗
const handleClose = () => {
  console.log("%c [  ]-25", "font-size:13px; background:pink; color:#bf2c9f;", 666)
  emit("close")
}
</script>

<style lang="less" scoped></style>
