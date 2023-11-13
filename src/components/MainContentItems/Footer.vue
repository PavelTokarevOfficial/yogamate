<template>
  <footer class="footer mt-5" id="contact" ref="footerRef">
    <div class="row">
      <div class="col-12 col-lg-6 order-2 order-lg-1">
        <img src="../../assets/yogamate.png" alt="logo">
        <p class="mt-5 mb-5">Sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est Velit officia
          consequat.</p>
        <div class="row">
          <div class="col-6">
            <span class="mt-3 mb-3">Address</span>
            <p>2118 Thornridge Cir. Syracuse,
              Connecticut 35624</p>
            <p>4517 Washington Ave. Manchester,
              Kentucky 39495</p>
          </div>
          <div class="col-6">
            <div class="col-12">
              <span class="mt-3 mb-3">Call us</span>
              <a href="tel:+1 316 555-0116">+1 (316) 555-0116</a>
            </div>
            <div class="col-12">
              <span class="mt-3 mb-3">Email</span>
              <p>info@yogamate.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 order-1 order-lg-2">
        <Feedback/>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="row d-flex justify-content-center justify-content-lg-between">
        <div class="col-auto">
          <p>Copyrights © 2022 All Rights Reserved by yogamate Inc.</p>
        </div>
        <div class="col-auto">
          <SocialLinks/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLinks from '../../components/SocialLinks.vue'
import Feedback from "./Feedback.vue";
import anime from "animejs";

export default {
  components: {
    Feedback,
    SocialLinks,
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const element = this.$refs.footerRef;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const isVisible = elementPosition < windowHeight;

      if (isVisible) {
        this.visible = true;
        anime({
          targets: element,
          translateX: [1000, 0],
          delay: 100,
          duration: 1000,
          easing: 'easeInOutQuad'
        });
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
}

</script>

<style scoped lang="scss">
.footer {
  span {
    color: #FA8072;
    text-transform: uppercase;
    display: block;
  }
  a {
    text-decoration: none;
    color: white;
  }
}
</style>