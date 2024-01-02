<template>
  <el-form :model="account" label-width="60px" ref="formRef" :rules="accountRules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ElForm, ElMessage } from "element-plus"
import { ref, reactive } from "vue"
import { accountRules } from "../config"

import { register } from "@/service/login"
const account = reactive({
  name: "",
  password: ""
})

// 验证form的函数
const formRef = ref<InstanceType<typeof ElForm>>()

const accountRegisterAction = () => {
  // 1.验证是否成功
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      // 注册逻辑
      const { name, password } = account
      const registerResult = await register({ name, password })
      const { code } = registerResult
      if (code === 0) {
        const { message } = registerResult
        ElMessage.success(message)
      }
    }
  })
}

defineExpose({
  accountRegisterAction
})
</script>

<style scoped></style>
