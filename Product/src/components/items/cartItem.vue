<template>
  <div>
    <div class="cart__item">
      <img class="cart__item__img" :src="imgUrl" />
      <div class="cart__item__info">
        <span>{{ item.name }}</span>
        <div class="price__block">
          <span>${{ item.price * item.amount }}</span>
          <span>Qty: {{ item.amount }}</span>
        </div>
      </div>
      <div class="cart__buttons">
        <div class="cart__quantity_buttons">
          <button @click="changeAmount(true)">ᐱ</button>
          <button @click="changeAmount(false)">ᐯ</button>
        </div>
        <button class="cart__delete" @click="deleteItem({ id: item.id })">
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    item: {
      type: Object,
    },
    imgApi: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeAmount(add) {
      this.$emit("changeItem", { id: this.item.id, amount: add ? 1 : -1 });
    },
    deleteItem(pl) {
      this.$emit("deleteItem", pl);
    },
  },
  computed: {
    imgUrl() {
      return this.imgApi + this.item.imgUrl[0];
    },
  },
};
</script>

<style lang="scss" >
.cart__item {
  margin: 3px;
  padding: 3px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid;
  border-color: rgb(212, 212, 212);
  background-color: transparent;
  &__img {
    height: 75px;
    width: 80px;
  }
  &__info {
    width: 200px;
    display: flex;
    align-items: center;
  }
}
.cart__buttons {
  display: flex;
}

.cart__buttons button {
  border: unset;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
}

.cart__quantity_buttons {
  color: #000;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.cart__delete {
  width: 40px;
}
</style>