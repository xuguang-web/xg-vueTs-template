<template>
  <div class="main">{{ counterStore.couter }}-{{ counterStore.doubleConter }}</div>
</template>

<script setup lang="ts" name="main">
import useCounterStore from "@/store/counter"

const counterStore = useCounterStore()
</script>

<style lang="less" scoped></style>
