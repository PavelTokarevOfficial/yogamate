<template>
  <div class="col-12 col-md-3 sideBar" ref="sidebarRef">
    <div class="mt-5 mb-5 d-flex d-md-block justify-content-center" >
      <img src="../assets/yogamate.png" alt="logo">
    </div>
    <div class="links sticky-top pt-md-5">
      <ul class="d-flex d-md-block justify-content-between pb-5">
        <li class="mb-3 "><a href="#home">Home</a></li>
        <li class="mb-3 "><a href="#about">About</a></li>
        <li class="mb-3 "><a href="#services">Services</a></li>
        <li class="mb-3 "><a href="#video">Video</a></li>
        <li class="mb-3 "><a href="#contact">Contact</a></li>
      </ul>
      <SocialLinks/>
    </div>
  </div>
</template>

<script>
import SocialLinks from './SocialLinks.vue'
import anime from 'animejs';
export default {
  components:{
    SocialLinks
  },
  mounted() {
    anime({
      targets: this.$refs.sidebarRef,
      translateX: [-700, 0],
      duration: 1500,
      easing: 'easeInOutQuad'
    });
  }
}
</script>

<style scoped lang="scss">
.sideBar {
  ul {
    padding: 0;
    li {
      list-style: none;
      a {
        display: inline-block;
        width: 100%;
        text-decoration: none;
        color: white;
        transition: .5s;
        &:hover {
          color: #FA8072;
        }
      }
    }
  }
}
</style>