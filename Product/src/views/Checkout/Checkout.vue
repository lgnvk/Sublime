<template>
  <div>
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
                      <li><a href="/cart">Cart</a></li>
                      <li>Checkout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout_info">
      <div class="checkout_form">
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.firtsName"
                  label="First Name*"
                  variant="filled"
                  :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="formData.secondName"
                  label="Lirst Name*"
                  variant="filled"
                  :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.company"
                  label="Company"
                  variant="filled"
                  :rules="[rules.firstUpper]"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.country"
                  label="Country*"
                  variant="filled"
                  :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.address"
                  label="Address*"
                  variant="filled"
                  :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.zipcode"
                  label="Zipccode*"
                  variant="filled"
                  :rules="[rules.required]"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.city"
                  label="City/Town*"
                  variant="filled"
                  :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.province"
                  label="Province"
                  variant="filled"
                  :rules="[rules.cyrilic, rules.firstUpper]"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.phone"
                  label="Phone*"
                  variant="filled"
                  :rules="[rules.required]"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.email"
                  label="Email*"
                  variant="filled"
                  :rules="[rules.required, rules.email]"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
      <div class="checkout_order">
        <div class="">
          <div class="order checkout_section">
            <div class="section_title">Your order</div>
            <div class="section_subtitle">Order details</div>

            <!-- Order details -->
            <div class="order_list_container">
              <div
                class="
                  order_list_bar
                  d-flex
                  flex-row
                  align-items-center
                  justify-content-start
                "
              >
                <div class="order_list_title">Product</div>
                <div class="order_list_value ml-auto">Total</div>
              </div>
              <ul class="order_list">
                <li
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-start
                  "
                >
                  <div class="order_list_title">Cocktail Yellow dress</div>
                  <div class="order_list_value ml-auto">$59.90</div>
                </li>
                <li
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-start
                  "
                >
                  <div class="order_list_title">Subtotal</div>
                  <div class="order_list_value ml-auto">$59.90</div>
                </li>
                <li
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-start
                  "
                >
                  <div class="order_list_title">Shipping</div>
                  <div class="order_list_value ml-auto">Free</div>
                </li>
                <li
                  class="
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-start
                  "
                >
                  <div class="order_list_title">Total</div>
                  <div class="order_list_value ml-auto">$59.90</div>
                </li>
              </ul>
            </div>

            <!-- Payment Options -->
            <div class="payment">
              <div class="payment_options">
                <label class="payment_option clearfix"
                  >Paypal
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="payment_option clearfix"
                  >Cach on delivery
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="payment_option clearfix"
                  >Credit card
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="payment_option clearfix"
                  >Direct bank transfer
                  <input type="radio" checked="checked" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>

            <!-- Order Text -->
            <div class="order_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pharetra temp or so dales. Phasellus sagittis auctor gravida.
              Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.
            </div>
            <div class="button order_button"><a href="#">Place Order</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutForm",
  data() {
    return {
      valid: true,
      formData: {
        firtsName: "",
        secondName: "",
        company: "",
        country: "",
        address: "",
        zipcode: "",
        city: "",
        province: "",
        phone: "",
        email: "",
      },
      rules: {
        required: (value) => !!value || "Заполните поле!",
        firstUpper: (value) =>
          /^[А-Я]{1}[а-я]{1,}$/.test(value) || "Пишите с заглавной буквы",
        email: (v) => /.+@.+/.test(v) || "E-mail must be valid",
      },
    };
  },
};
</script>

<style scoped>
.home_background {
  background-image: url(https://github.com/SergioElCringe/JS_step_2/blob/init/PROJECT/BASE__PROJECT/images/cart.jpg?raw=true);
}
.checkout_info {
  margin: 40px 60px 20px 60px;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.checkout_form {
  width: 50%;
}
</style>