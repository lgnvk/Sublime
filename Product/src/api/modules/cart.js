import instance from '@/api/core';

const url = '/cart';

export const cart = {

  async getCart() {
    try {
      const data = await instance({ url });
      return data;
    } catch (err) {
      throw err;
    };
  },
  async deleteItem(params) {
    const method = 'DELETE';
    try {
      const data = await instance({ url, method, params });
      return data;
    } catch (err) {
      throw err;
    };
  },
};