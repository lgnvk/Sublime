<template>
  <div>
    <div class="home">
      <div class="home_container">
        <div
          class="home_background categories_background"
        ></div>
        <div class="home_content_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content">
                  <div class="home_title">Smart Phones<span>.</span></div>
                  <div class="home_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam a ultricies metus. Sed nec molestie eros. Sed
                      viverra velit venenatis fermentum luctus.
                    </p>
                  </div>
                </div>
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
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="product_grid">
              <Catalog :query="query"/>
            </div>
            <Pagination onPage="4" @paginate="query.page = $event"/>
          </div>
        </div>
      </div>
    </div>
    <Icons/>
    <div class="newsletter">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="newsletter_border"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="newsletter_content text-center">
              <div class="newsletter_title">Subscribe to our newsletter</div>
              <div class="newsletter_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a ultricies metus. Sed nec molestie eros
                </p>
              </div>
              <div class="newsletter_form_container">
                <form action="#" id="newsletter_form" class="newsletter_form">
                  <input
                    type="email"
                    class="newsletter_input"
                    required="required"
                  />
                  <button class="newsletter_button trans_200">
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from "../components/Catalog.vue";
import Pagination from "@components/Pagination.vue";
import Icons from "@components/Icons.vue";
export default {
  name: "Categories",
  components: { Catalog, Pagination, Icons },
  data() {
    return {
      query: {
				page: 1,
				show: 4,
				sort: 'ad',
      },
    }
  },
};
</script>

<style scoped>
.categories_background {
  background-image: url(https://github.com/SergioElCringe/JS_step_2/blob/init/PROJECT/BASE__PROJECT/images/categories.jpg?raw=true);
}
</style>