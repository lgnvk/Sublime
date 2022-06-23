<template>
  <v-carousel-item class="slider_item">
    <div class="slider_content">
      <div class="slider_title">{{ slide.title }}</div>
      <div class="slider_subtitle">{{ slide.text }}</div>
      <button class="btn_shop"><a href="/categories">Shop now</a></button>
    </div>
  </v-carousel-item>
</template>

<script>
export default {
  name: "SliderItem",
  props: {
    slide: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.slider_item {
  background-image: url(https://github.com/SergioElCringe/JS_step_2/blob/init/PROJECT/BASE__PROJECT/images/home_slider_1.jpg?raw=true);
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;
  width: auto;
}

.slider_content {
  margin: 80px 0 0 200px;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  color: white;
}
.slider_title {
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 20px;
}
.btn_shop {
  width: 180px;
  height: 50px;
  border: 1px solid;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-weight: 600;
  color: white;
}
.btn_shop a {
  all: unset;
}
.btn_shop:focus {
  outline: none;
}
.btn_shop:hover {
  color: black;
  background-color: white;
  z-index: 1;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  cursor: pointer;
}
</style>