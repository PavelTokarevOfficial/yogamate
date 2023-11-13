<template>
  <div class="intro" id="home" ref="introRef">
    <div class="p-0 p-md-5">
      <h1 class="header">Yoga is the journey of the self, through the self, to the self.</h1>
      <p class="slogan mt-5 mb-5">Don't miss your happier boost</p>
      <MyButton>Book your slot</MyButton>
    </div>
    <img src="../../assets/image_intro.png" alt="image_intro" class="w-100 mt-5 mb-5 intro_img">
  </div>
</template>

<script>
import MyButton from '../../ui/MyButton.vue'
import anime from "animejs";
export default {
  components:{
    MyButton,
  },
  mounted() {
    anime({
      targets: this.$refs.introRef,
      translateX: [700, 0],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }
}

</script>

<style scoped lang="scss">
.intro{
  .header{
    font-size: 64px;
  }
  .slogan{
    font-size: 24px;
  }
  .intro_img{
    border-radius: 20px;
  }
}
</style>