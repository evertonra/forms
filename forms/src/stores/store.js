import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    isOpen: true
  }),
  actions: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  },
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? 'hidden' : ''
    }
  }
})
