<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts" setup>
import loginPanel from "./cpns/login-panel.vue"
</script>

<style lang="less" scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login/loginBg.png");
}
</style>
