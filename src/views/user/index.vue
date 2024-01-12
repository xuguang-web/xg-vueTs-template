<template>
  <div class="user">
    <el-button class="user-button" type="primary" @click="handleAdd">新 增</el-button>
    <el-table :data="tableList" stripe border style="width: 100%">
      <el-table-column
        v-for="item in tableCols"
        :key="item.prop"
        align="center"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width"
      />
    </el-table>
    <user-edit @close="showUserEdit = false" v-if="showUserEdit"></user-edit>
  </div>
</template>

<script setup lang="ts" name="user">
import userEdit from "./comp/userEdit.vue"
import { detail, userList } from "@/service/user"
import { reactive, ref } from "vue"
import { tableCols } from "./config"

const showUserEdit = ref(false)
const tableList = ref([])
const params = reactive({
  pageNum: 0,
  pageSize: 10
})

const initData = async () => {
  const res = await userList(params)
  tableList.value = res?.data
}
initData()

const handleAdd = () => {
  showUserEdit.value = true
}
</script>

<style lang="less" scoped>
.user {
  &-button {
    margin-bottom: 8px;
  }
}
</style>
