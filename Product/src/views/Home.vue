<template>
  <div>
    <Slider />
    <!-- Ads -->

    <div class="avds">
      <div class="avds_container">
        <div class="avds_small">
          <div class="avds_background"></div>
          <div class="avds_small_inner">
            <div class="avds_discount_container">
              <img
                src="https://github.com/SergioElCringe/JS_step_2/blob/init/PROJECT/BASE__PROJECT/images/discount.png?raw=true"
                alt=""
              />
              <div>
                <div class="avds_discount">
                  <div>20<span>%</span></div>
                  <div>Discount</div>
                </div>
              </div>
            </div>
            <div class="avds_small_content">
              <div class="avds_title">Smart Phones</div>
              <div class="avds_link">
                <a href="categories.html">See More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="avds_large">
          <div class="avds_background">
            <img
              src="https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/avds_large.jpg"
              alt=""
            />
          </div>
          <div class="avds_large_container">
            <div class="avds_large_content">
              <div class="avds_title">Professional Cameras</div>
              <div class="avds_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a ultricies metus. Sed nec molestie eros. Sed viver ra velit
                venenatis fermentum luctus.
              </div>
              <div class="avds_link avds_link_large">
                <a href="categories.html">See More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Products -->

    <div class="products">
      <div class="container">
        <div class="row">
          <div class="col">
            <Catalog :query="{ filter: 'category' }" />
          </div>
        </div>
      </div>
    </div>

    <!-- Ad -->
    <div class="avds_xl">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="avds_xl_container clearfix">
              <div class="avds_xl_background"></div>
              <div class="avds_xl_content">
                <div class="avds_title">Amazing Devices</div>
                <div class="avds_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus.
                </div>
                <div class="avds_link avds_xl_link">
                  <a href="categories.html">See More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Icons />
    <Subscribe />
  </div>
</template>

<script>
import Catalog from "@components/Catalog.vue";
import Icons from "@components/Icons.vue";
import Slider from "@components/Slider.vue";
import Subscribe from "@components/Subscribe.vue";
export default {
  name: "Home",
  components: {
    Catalog,
    Icons,
    Slider,
    Subscribe,
  },
};
</script>

<style>
.avds_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.avds_small {
  background-image: url(https://github.com/SergioElCringe/JS_step_2/blob/init/PROJECT/BASE__PROJECT/images/avds_small.jpg?raw=true);
}
.avds_large {
  background-image: url(https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/avds_large.jpg);
}

.avds_xl_background {
  background-image: url(https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/avds_xl.jpg);
}
</style>