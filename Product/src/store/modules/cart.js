import { cart } from '@api';

export default {
  namespaced: true,
  state: () => ({
    items: [],
  }),

  actions: {
    async getCart({ commit }) {
      try {
        const data = await cart.getCart();
        commit('setCart', data);
      } catch (err) {
        throw err;
      };
    },

    async deleteItem({ commit }, pl) {
      try {
        const data = cart.deleteItem(pl);
        if (!data.error) {
          commit('setDeleteItem', pl);
        };
      } catch (err) {
        throw err;
      };
    },
  },
  mutations: {
    setCart(state, data) {
      state.items = data.items;
    },
    setDeleteItem(state, pl) {
      const { id } = pl;
      const find = state.items.findIndex(item => item.id === id);
      state.items.splice(find, 1);
    },
    setClearCart(state) {
      state.items = [];
    },
  },
  getters: {
    totalAmount(state) {
      return state.items.reduce((acc, item) => {
        return (acc += item.amount);
      }, 0);
    },
    totalPrice(state) {
      return state.items.reduce((acc, item) => {
        return (acc += item.price * item.amount);
      }, 0);
    },
  },
};