<template>
  <div class="slider_container">
    <v-carousel
      v-model="active"
      cycle
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
    >
      <SliderItem
        v-for="(slide, active) in slides"
        :key="active"
        :slide="slide"
      />
      <div class="slider_dots">
        <button class="slider_btn" @click="active = 0">01.</button>
        <button class="slider_btn" @click="active = 1">02.</button>
        <button class="slider_btn" @click="active = 2">03.</button>
      </div>
    </v-carousel>
  </div>
</template>

<script>
import SliderItem from "../components/items/sliderItem.vue";
export default {
  components: { SliderItem },

  data() {
    return {
      active: null,
      slides: [
        {
          name: "slider1",
          title: "A new Online Shop experience.",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
        },
        {
          name: "slider2",
          title: "A new Online Shop experience.",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
        },
        {
          name: "slider3",
          title: "A new Online Shop experience.",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
        },
      ],
    };
  },
};
</script>

<style>
.slider_container {
  margin: 0 50px 30px 60px;
  height: auto;
  width: auto;
  position: relative;
}

.slider_dots {
position: absolute;
bottom: 5%;
left: 195px;
}

.slider_btn {
  font-size: 16px;
  width: 25px;
  border: 0;
  color: white;
  background-color: transparent;
}
.slider_btn:focus {
  outline: none;
}
.slider_btn:hover {
  cursor: pointer;
  color: #e95a5a;
}

</style>