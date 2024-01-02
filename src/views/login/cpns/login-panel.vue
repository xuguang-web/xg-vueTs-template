<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account :propAccount="account" ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>用户注册</span>
        </template>
         <register-account ref="registerRef"/>
      </el-tab-pane>
    </el-tabs>
    <div class="control-account" v-if="currentTab === 'account'">
      <el-checkbox v-model="isKeep">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="loginAction">{{ showBtnText }}</el-button>
  </div>
</template>

<script lang="ts" setup>
import {ref,reactive, onMounted,computed} from "vue"
import localCache from '@/utils/cache'

import LoginAccount from './login-account.vue'
import registerAccount from './register-account.vue'
 


  const currentTab = ref('account')
  const isKeep = ref(false)

  const showBtnText = computed(()=> currentTab.value === 'account' ? '立即登录':'用户注册'
  )


  const accountRef = ref<InstanceType<typeof LoginAccount>>()
  const registerRef = ref<InstanceType<typeof registerAccount>>()

  let account = reactive({
        name:"",
        password: ""
  })

  const initData = ()=> {
    const cacheName = localCache.getCache('name') ?? ''
    const cachePassword = localCache.getCache('password') ?? ''
    if(cacheName && cachePassword) {
       isKeep.value = true
    }
    account = {
        name: cacheName,
        password: cachePassword 
    }
  }


  const loginAction = () => {
      //1.获取到账号密码
      if (currentTab.value === 'account') {
         accountRef.value?.accountLoginAction(isKeep.value)
      }else {
         registerRef.value?.accountRegisterAction()
      }
   }

   onMounted(()=>{
      // 记住密码，根据localstorage是否存值
      initData()
  })

</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 8px;
  }

  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
