// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    borrowedItems: [
      { id: 1, itemName: 'Raspberry Pi', category: 'Technology', reservable: 'Yes', description: 'Single-board computer', createdBy: 'Admin', createdDate: '2024-08-01' },
      // Add more initial items if needed
    ],
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.borrowedItems.push(item);
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit('ADD_ITEM', item);
    },
  },
});

