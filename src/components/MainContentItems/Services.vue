<template>
  <div class="services p-3 p-md-5" id="services" ref="servicesRef">
    <div class="row">
      <div class="description mb-5">
        <span>Services</span>
        <h3>You cannot always control what goes on outside, but you can always control what goes on inside.</h3>
        <p>Lorem nullam sed lacus, arcu. Dui proin mauris neque vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.</p>
      </div>

      <div class="col-12 col-lg-6">
        <img src="../../assets/vinyasa_yoga.jpg" alt="" class="w-100 object-fit-cover">
        <h4 class="mt-4 mb-4">Vinyasa yoga </h4>
        <p>
          Dui proin mauris neque vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.
        </p>
      </div>
      <div class="col-12 col-lg-6">
        <img src="../../assets/kundalini_yoga.jpg" alt="" class="w-100 object-fit-cover">
        <h4 class="mt-4 mb-4">Kundalini yoga</h4>
        <p>
          Dui proin mauris neque vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.
        </p>
      </div>
      <div class="col-12 col-lg-6">
        <img src="../../assets/bikram_yoga.jpg" alt="" class="w-100 object-fit-cover">
        <h4 class="mt-4 mb-4">Bikram yoga</h4>
        <p>
          Dui proin mauris neque vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.
        </p>
      </div>
      <div class="col-12 col-lg-6">
        <img src="../../assets/restorative_yoga.jpg" alt="" class="w-100 object-fit-cover">
        <h4 class="mt-4 mb-4">Restorative yoga</h4>
        <p>
          Dui proin mauris neque vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.
        </p>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
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
      const element = this.$refs.servicesRef;
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
.services{
  background-color: #FFDAB9;
  margin-top: -1px;
  img{
    border-radius: 20px;
  }
  span, h4{
    color: #FA8072;
  }
  h3, p{
    color: #002366;
  }
}
</style>