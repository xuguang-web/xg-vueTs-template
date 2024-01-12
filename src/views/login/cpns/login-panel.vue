<template>
  <div class="login-panel">
    <img src="../../../assets/img/login/omms-login-position.png" alt="" />
    <div class="welcome">
      <div class="welcome-desc">你好，欢迎登录</div>
      <div class="welcome-title">后台管理系统</div>
    </div>
    <login-account :propAccount="account" ref="accountRef" />
    <div class="control-account" v-if="currentTab === 'account'">
      <el-checkbox v-model="isKeep">记住密码</el-checkbox>
    </div>
    <div class="control-account" v-if="currentTab === 'register'">
      <el-button type="text" @click="goLogin">前往登录</el-button>
    </div>
    <el-button type="primary" class="login-btn" @click="loginAction">{{ showBtnText }}</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue"

import LoginAccount from "./login-account.vue"
import registerAccount from "./register-account.vue"

import localCache from "@/utils/cache"

const currentTab = ref("account")
const isKeep = ref(false)

const showBtnText = computed(() => (currentTab.value === "account" ? "立即登录" : "用户注册"))

const accountRef = ref<InstanceType<typeof LoginAccount>>()
const registerRef = ref<InstanceType<typeof registerAccount>>()

let account = reactive({
  name: "",
  password: ""
})

const initData = () => {
  const cacheName = localCache.getCache("name") ?? ""
  const cachePassword = localCache.getCache("password") ?? ""
  if (cacheName && cachePassword) {
    isKeep.value = true
  }
  account.name = cacheName
  account.password = cachePassword
}

const loginAction = () => {
  //1.获取到账号密码
  if (currentTab.value === "account") {
    accountRef.value?.accountLoginAction(isKeep.value)
  } else {
    registerRef.value?.accountRegisterAction()
  }
}

onMounted(() => {
  // 记住密码，根据localstorage是否存值
  initData()
})

const goLogin = () => {
  currentTab.value = "account"
}
</script>

<style lang="less" scoped>
.login-panel {
  position: absolute;
  top: 20%;
  right: 130px;
  width: 416px;
  height: 420px;
  padding: 40px 48px 0;
  box-shadow: 0 4px 24px 0 rgba(0, 80, 182, 0.5);
  border-radius: 8px;
  background: linear-gradient(180deg, #fff, #fcfdff 79%, #e2f1ff);
  img {
    position: absolute;
    top: 0;
    right: 0;
  }
  .welcome {
    &-desc {
      width: 168px;
      height: 36px;
      font-size: 24px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      line-height: 36px;
      margin-bottom: 4px;
    }
    &-title {
      width: 272px;
      height: 48px;
      font-size: 32px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.85);
      line-height: 48px;
      letter-spacing: 2px;
      margin-bottom: 48px;
    }
  }
  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 16px;
    cursor: pointer;
    height: 40px !important;
    line-height: 40px !important;
    background: #1890ff;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
