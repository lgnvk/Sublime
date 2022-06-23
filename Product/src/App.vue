<template>
  <div class="super_container">
    <v-app>
      <Header />
      <div class="view-container">
        <v-main>
          <router-view />
        </v-main>
      </div>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  data: () => ({
  }),
};
</script>
<style lang="scss">
.view-container {
  margin-top: 130px;
}
.super_container {
  font-family: Poppins;
}
</style>