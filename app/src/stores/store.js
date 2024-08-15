// stores/store.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios';
import { notify } from 'boot/notify';

export const useStore = defineStore('store', {
  state: () => ({
    user: 'roßes',
    list: [],
    menu: []
  }),
  getters: {

  },
  actions: {
    async fetchList() {
      try {
        const response = await axios.get(`https://server.michoest.com/list`);
          this.list = response.data;
      }
      catch (err) {
        notify(`Error: ${err}`, 'negative');
      }
    },
    async fetchMenu() {
      try {
        const response = await axios.get(`https://server.michoest.com/menu`);
          this.menu = response.data;
      }
      catch (err) {
        notify(`Error: ${err}`, 'negative');
      }
    },
    async completeItem(itemId) {
      try {
          const response = await axios.post(`https://server.michoest.com/list/item/${itemId}/complete`);
          this.list = response.data;

          return true;
      }
      catch (err) {
          console.error('There was an error fetching the lists:', err);

          return false;
      }
  },
  async openItem(itemId) {
    try {
      const response = await axios.post(`https://server.michoest.com/list/item/${itemId}/open`);
      this.list = response.data;

      return true;
  }
  catch (err) {
      console.error('There was an error fetching the lists:', err);

      return false;
  }
},
async addToList(ingredients) {
  try {
      const response = await api.post(`/api/menu/`, { ingredients });
      this.list = response.data;
      
      return true;
  }
  catch (err) {
      console.error('There was an error adding the ingredients:', err);

      return false;
  }
},
  }
});
