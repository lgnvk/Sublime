<template>
  <div>
    <div class="home">
      <div class="home_container">
        <div
          class="home_background"
        ></div>
        <div class="home_content_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content">
                  <div class="breadcrumbs">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact -->

    <div class="contact">
      <div class="container">
        <div class="row">
          <!-- Get in touch -->
          <div class="col-lg-8 contact_col">
            <div class="get_in_touch">
              <div class="section_title">Get in Touch</div>
              <div class="section_subtitle">Say hello</div>
              <div class="contact_form_container">
                <ContactForm />
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-3 offset-xl-1 contact_col">
            <div class="contact_info">
              <div class="contact_info_section">
                <div class="contact_info_title">Marketing</div>
                <ul>
                  <li>Phone: <span>+53 345 7953 3245</span></li>
                  <li>Email: <span>yourmail@gmail.com</span></li>
                </ul>
              </div>
              <div class="contact_info_section">
                <div class="contact_info_title">Shippiing & Returns</div>
                <ul>
                  <li>Phone: <span>+53 345 7953 3245</span></li>
                  <li>Email: <span>yourmail@gmail.com</span></li>
                </ul>
              </div>
              <div class="contact_info_section">
                <div class="contact_info_title">Information</div>
                <ul>
                  <li>Phone: <span>+53 345 7953 3245</span></li>
                  <li>Email: <span>yourmail@gmail.com</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import ContactForm from "./components/ContactForm.vue";
export default {
  name: "Contact",
  components: { ContactForm },
};
</script>

<style>
.home {
  padding: 0 40px;
  height: 230px;
}
.home_background {
  background-image: url(https://github.com/SergioElCringe/JS_step_2/blob/init/PROJECT/BASE__PROJECT/images/contact.jpg?raw=true);
  background-size: auto;
}
.contact {
  padding: 45px;
}
</style>