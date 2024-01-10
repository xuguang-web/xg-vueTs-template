<template>
  <el-form :model="account" label-width="42px" ref="formRef" :rules="accountRules">
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
import { ref, reactive, defineProps, watch } from "vue"
import { accountRules } from "../config"

import { login } from "@/service/login"

import type { accountProps } from "../types"
import router from "@/router"
import localCache from "@/utils/cache"

const props = defineProps<accountProps>()

const account = reactive({
  name: "",
  password: ""
})

watch(
  props.propAccount,
  (val) => {
    if (val?.name) {
      const { name, password } = props.propAccount
      account.name = name
      account.password = password
    }
  },
  { deep: true }
)

// 验证form的函数
const formRef = ref<InstanceType<typeof ElForm>>()

const accountLoginAction = (isKeep: boolean) => {
  // 1.验证是否成功
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      // 登录逻辑
      const name = account.name
      const password = account.password

      // 记住密码
      if (isKeep) {
        localCache.setCache("name", name)
        localCache.setCache("password", password)
      } else {
        localCache.deleteCache("name")
        localCache.deleteCache("password")
      }

      // 登录操作
      handleLogin(name, password)
    }
  })
}

const handleLogin = async (name: string, password: string) => {
  const loginResult = await login({ name, password })

  const { message, data, code } = loginResult
  if (code === 0) {
    ElMessage.success(message)
    localCache.setCache("token", data?.token)
    router.push("/main")
  }
}

defineExpose({
  accountLoginAction,
  account
})
</script>

<style lang="less" scoped>
:deep {
  .el-form-item__label::before {
    display: none;
  }
}
</style>
