<template>
  <li :class="{ hassubs: item.subCategories }">
    <a :href="item.url">{{ item.name }}</a>
    <ul v-if="item.subCategories">
      <li v-for="subItem of item.subCategories" :key="subItem.id">
        <router-link :to="subItem.url">{{ subItem.name }}</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style>
</style>