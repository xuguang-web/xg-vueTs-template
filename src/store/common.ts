import { defineStore } from "pinia"
import { getdepartmentTree } from "@/service/common"

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      departmentTreeData: []
    }
  },
  getters: {},
  actions: {
    async getDepartmentTreeData() {
      const res = await getdepartmentTree()
      this.departmentTreeData = res?.data
    }
  }
})
