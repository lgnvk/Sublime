<template>
  <div class="home">
    <div class="home_container">
      <div class="home_background"></div>
      <div class="home_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content">
                <div class="breadcrumbs">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <li>Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container container_cart">
    <div>
      <div class="col">
        <!-- Column Titles -->
        <div class="cart_product_info">
          <div class="cart_product_product">Products</div>
          <div class="cart_product_name">Name</div>
          <div>Price & Qantity</div>
        </div>
      </div>
    </div>
    <div class="cartCart">
      <item
        v-for="item of items"
        :item="item"
        :key="item.id"
        :imgApi="imgApi"
        @changeItem="changeItem"
        @deleteItem="deleteItem"
        class="cart_page"
      />
    </div>
    <div class="totals">
      <div class="total_price">Total price: {{ totalPrice }}</div>
      <div class="total_amount">Total amount: {{ totalAmount }}</div>
    </div>
    <div class="cart_buttons">
      <button class="btn_cart">
        <a class="cart_link" href="/categories"
          ><span>Continue shopping</span></a
        >
      </button>
      <button class="btn_cart"><a class="cart_link" href="/checkout">Proceed to Checkout</a></button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import item from "@components/items/cartItem.vue";
export default {
  name: "CartPage",
  components: { item },

  data() {
    return {
      url: "/api/cart",
      imgApi:
        "https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products",
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
    ...mapState({
      items: (state) => state.Cart.items,
    }),
    ...mapGetters({
      totalAmount: "Cart/totalAmount",
      totalPrice: "Cart/totalPrice",
    }),
  },
};
</script>


<style>
.home_background {
  background-image: url(https://github.com/SergioElCringe/JS_step_2/blob/init/PROJECT/BASE__PROJECT/images/cart.jpg?raw=true);
}
.cart_link {
  all: unset;
}
.cart_link:hover {
  all: unset;
}
.cart_buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.btn_cart {
  width: 180px;
  height: 60px;
  border: 2px solid;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-weight: 600;
  color: black;
}

.btn_cart:hover {
  color: white;
  background-color: black;
}
.container_cart {
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
}

.cart_container h1 {
  font-weight: 700;
}

.cart_product_info {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.cart_product_product {
  margin-right: 280px;
}
.cart_product_name {
  margin-right: 280px;
}
.cart_page img {
  width: 200px;
  height: 150px;
}
.cart_page .cart__item__info {
  width: 480px;
  display: flex;
  flex-direction: row;
}
</style>