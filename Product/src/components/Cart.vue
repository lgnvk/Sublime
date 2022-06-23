<template>
  <div class="shopping_cart">
    <button id="cart__btn" class="btn__cart" @click="open = !open">
      <img class="cart__icon" src="../assets/img/cartIcon.svg" alt="" />
      <div>
        Cart
        <span id="cart-counter">({{ totalAmount }})</span>
      </div>
    </button>
    <div class="cart__content" id="cart-items" v-show="open">
      <item
        v-for="item of items"
        :item="item"
        :key="item.id"
        :imgApi="imgApi"
        @changeItem="changeItem"
        @deleteItem="deleteItem"
      />
      <div class="cart_buttons" v-show="items.length > 0">
        <button class="btn_cart">
          <a class="cart_link" href="/cart"
            ><span>Go to cart</span></a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import item from "./items/cartItem.vue";

export default {
  name: "Cart",
  components: { item },

  data() {
    return {
      url: "/api/cart",
      open: false,
      imgApi:
        "https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products",
      interval: null,
      total: null,
    };
  },
  async created() {
    try {
      await this.getCart(this.url);
    } catch (err) {
      console.warn(err);
    }
  },
  methods: {
    ...mapActions({
      getCart: "Cart/getCart",
      deleteItem: "Cart/deleteItem",
    }),
    async changeItem(pl) {
      const { id, amount } = pl;
      const find = this.items.find((item) => item.id == id);
      try {
        const data = await $api.send(this.url + `/${id}`, "PUT", {
          amount,
        });
        if (!data.error) {
          if (amount == -1 && find.amount == 1) {
            await this.deleteItem(item);
          } else {
            find.amount += amount;
          }
        }
      } catch (err) {
        console.warn(err);
      }
    },
  },

  computed: {
    ...mapGetters({
      totalAmount: "Cart/totalAmount",
      totalPrice: "Cart/totalPrice",
    }),
    ...mapState({
      items: (state) => state.Cart.items,
    }),
  },
};
</script>

<style>
.shopping_cart {
  font-weight: 500;
}
.cart__content {
  height: auto;
  width: auto;
  top: 40px;
  background-color: rgb(243, 243, 243);
}
.btn__cart {
  width: 100px;
  border: 0;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.btn__cart:focus {
  outline: none;
}
.btn__cart:hover {
  cursor: pointer;
}
</style>