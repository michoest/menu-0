// stores/store.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios';
import { notify } from 'boot/notify';

export const useStore = defineStore('store', {
  state: () => ({
    user: 'roßes',
    list: { items: [], showCompletedItems: false },
    menu: { dishes: [], ingredients: [] }
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
    async addItem(item) {
      try {
          const response = await axios.post(`https://server.michoest.com/list/item/`, item);
          this.list = response.data.list;

          return response.data.id;

      }
      catch (err) {
          console.error('There was an error fetching the list:', err);

          return false;
      };
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
      const response = await axios.post(`https://server.michoest.com/menu/`, { ingredients });
      this.list = response.data;

      return true;
  }
  catch (err) {
      console.error('There was an error adding the ingredients:', err);

      return false;
  }
},
async clearList() {
  try {
      const response = await axios.post(`https://server.michoest.com/list/clear`);
      this.list = response.data;

      return true;
  }
  catch (err) {
      console.error('There was an error fetching the list:', err);

      return false;
  }
},
async deleteCompletedItems() {
  try {
      const response = await axios.delete(`https://server.michoest.com/list/delete-completed-items`);
      this.list = response.data;

      return true;
  }
  catch (err) {
      console.error('There was an error fetching the list:', err);

      return false;
  }
},
async showCompletedItems(show) {
  try {
      const response = await axios.post(`https://server.michoest.com/list/show-completed-items/${show}`);

      this.list.showCompletedItems = show;
  }
  catch (err) {
      console.error('There was an error:', err);
  }
},
  }
});
