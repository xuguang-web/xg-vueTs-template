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
import { ElForm } from 'element-plus'
import { ref,reactive,defineProps} from 'vue'
import { accountRules } from "../config"
import type { accountProps } from "../types"
import router from '@/router'
import localCache from '@/utils/cache'
import { login } from "@/service/login"

const props = defineProps<accountProps>()

const account = reactive({
    name:"",
    password:""
})


if(props.propAccount?.name) {
    console.log('%c [  ]-29', 'font-size:13px; background:pink; color:#bf2c9f;',props.propAccount?.name )
    const {name,password} = props.propAccount
    account.name = name;
    account.password = password
}




// 验证form的函数
const formRef = ref<InstanceType<typeof ElForm>>()

const accountLoginAction = (isKeep: boolean) => {
  // 1.验证是否成功
  formRef.value?.validate((valid) => {
    if (valid) {
      // 登录逻辑
      const name = account.name
      const password = account.password

      // 记住密码
      if(isKeep) {
          localCache.setCache('name', name)
          localCache.setCache('password', password)
      }else {
          localCache.deleteCache('name')
          localCache.deleteCache('password')
      }

      // 登录操作
      handleLogin(name,password)
    }
  })
}

const handleLogin =  async (name:string, password:string) => {
   const loginResult = await login({name,password});

   const { token }  = loginResult.data.data
   localCache.setCache('token', token)

   router.push('/main')
}

defineExpose({
  accountLoginAction,
  account
})


</script>

<style scoped></style>