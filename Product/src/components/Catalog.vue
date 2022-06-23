<template>
  <div class="grid">
    <item
      v-for="item of items"
      :key="item.id"
      :item="item"
      :imgApi="imgApi"
      @addItem="addItem"
    />
  </div>
</template>

<script>
import item from "./items/catalogItem.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "Catalog",
  components: { item },
  props: {
    query: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      url: "/api/catalog",
      cartUrl: "/api/cart",
      imgApi:
        "https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products",
      error: null,
    };
  },
  computed: {
    ...mapGetters({
      items: "Catalog/items",
    }),
    ...mapState({
      itemsCart: (state) => state.Cart.items,
    }),
  },

  watch: {
    query: {
      deep: true,
      async handler() {
        await this.getCatalog(this.query);
      },
    },
  },

  async created() {
    try {
      await this.getCatalog(this.query);
    } catch (err) {
      console.warn(err);
    }
  },

  methods: {
    ...mapActions({
      getCatalog: "Catalog/getCatalog",
    }),
    async addItem(item) {
      const { id, imgUrl, name, price, amount } = item;
      const find = this.itemsCart.find((cartItem) => cartItem.id === id);
      if (!find) {
        const newItem = {
          id,
          imgUrl,
          name,
          price,
          totalPrice: price,
          amount: 1,
        };
        try {
          const data = await $api.send(this.cartUrl, "POST", newItem);
          if (!data.error) {
            this.itemsCart.push(newItem);
          }
        } catch (err) {
          console.warn(err);
        }
      }
    },
  },
};
</script>

<style>
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>