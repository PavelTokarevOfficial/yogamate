<template>
  <div class="about_us mt-5 p-3 p-md-5" id="about">
    <div class="row">
      <div class="col-12 col-lg-6">
        <img src="../../assets/flower.jpg" alt="" class="w-100 h-100 object-fit-cover">
      </div>
      <div class="description col-12 col-lg-6 d-flex flex-column justify-content-between">
        <span class="pt-4">About us</span>
        <h3 class="pt-4">Be where you are, not where you think you should be.</h3>
        <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nullam sed lacus, arcu. Dui proin mauris neque
          vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.
        </p>
        <MyButton>Read more</MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from '../../ui/MyButton.vue'
export default {
  components:{
    MyButton
  }
}
</script>

<style scoped lang="scss">
.about_us {
  background-color: #FFDAB9;
  img{
    border-radius: 20px;
  }
  span{
    color: #FA8072;
  }
  h3, p{
    color: #002366;
  }
}
</style>