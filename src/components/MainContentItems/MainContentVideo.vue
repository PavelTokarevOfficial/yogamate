<template>
  <div class="main_content_video" id="video" ref="videoRef">
    <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/l6pDOwNeTrg"
        title="Видео Живая Природа"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    />
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
      const element = this.$refs.videoRef;
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
.main_content_video{

    height: 50vh;

}
</style>