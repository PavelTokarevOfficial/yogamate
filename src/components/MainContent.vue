<template>
  <div class="col-12 col-md-9 mainContent" >
    <Intro/>
    <Advantages/>
    <AboutUs/>
    <Services/>
    <MainContentVideo/>
    <Footer/>
  </div>
</template>

<script>
import Intro from './MainContentItems/Intro.vue'
import Advantages from './MainContentItems/Advantages.vue'
import AboutUs from './MainContentItems/AboutUs.vue'
import Services from './MainContentItems/Services.vue'
import MainContentVideo from './MainContentItems/MainContentVideo.vue'
import Footer from './MainContentItems/Footer.vue'
export default {
  components:{
    Intro,
    Advantages,
    AboutUs,
    MainContentVideo,
    Services,
    Footer,
  }
}
</script>

<style scoped lang="scss">

</style>