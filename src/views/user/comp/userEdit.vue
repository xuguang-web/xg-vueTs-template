<template>
  <div class="userEdit">
    <app-dialog title="基础信息" @close="handleClose" :visible="visible">
      <el-form class="app-confirm-form" :model="formData" label-width="100px" ref="formRef">
        <el-form-item label="名称：" prop="name">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="手机号：" prop="phone">
          <el-input v-model="formData.phone" />
        </el-form-item>
        <el-form-item label="生效时间：" prop="time">
          <el-date-picker
            v-model="time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始生效时间"
            end-placeholder="结束生效时间"
          />
        </el-form-item>
        <!-- <el-form-item label="用户头像：" prop="pic">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item> -->
      </el-form>
    </app-dialog>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/store/common"

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
const time = ref("")

const emit = defineEmits(["confirm", "close"])

const commonStore = useCommonStore()

commonStore.getDepartmentTreeData()

const handleAvatarSuccess = () => {}

console.log(
  "%c [  ]-42",
  "font-size:13px; background:pink; color:#bf2c9f;",
  commonStore.departmentTreeData
)

// 关闭弹窗
const handleClose = () => {
  emit("close")
}
</script>

<style lang="less">
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
