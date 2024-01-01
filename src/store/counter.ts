import { defineStore } from "pinia"

const useCounterStore = defineStore("counter", {
  state: () => ({
    couter: 100
  }),
  getters: {
    doubleConter(state) {
      return state.couter * 2
    }
  },
  actions: {
    changeCounterAction(newCounter: number) {
      this.couter = newCounter
    }
  }
})

export default useCounterStore
