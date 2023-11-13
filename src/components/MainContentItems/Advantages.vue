<template>
  <div class="row" ref="advantagesRef">
    <div class="col-12 col-md-4 mt-3 mb-3">
      <img src="../../assets/enneagram.svg" alt="">
      <h4 class="mt-3 mb-3">Flexible schedule</h4>
      <p>Feel free to book any time slot which fits best for you </p>
    </div>
    <div class="col-12 col-md-4 mt-3 mb-3">
      <img src="../../assets/yoga_ball.svg" alt="">
      <h4 class="mt-3 mb-3">Check enneagram</h4>
      <p>Check you enneagram with our online tool</p>
    </div>
    <div class="col-12 col-md-4 mt-3 mb-3">
      <img src="../../assets/jump_rope.svg" alt="">
      <h4 class="mt-3 mb-3">Available instruments</h4>
      <p>Enough yoga instruments for your personal use</p>
    </div>
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
      const element = this.$refs.advantagesRef;
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
