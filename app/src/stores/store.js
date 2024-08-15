// stores/store.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  const user = ref('roßes')

  function setUser(newUser) {
    user.value = newUser
  }

  function clearUser() {
    user.value = null
  }

  return { user, setUser, clearUser }
})
